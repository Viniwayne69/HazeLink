import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { extname, join, relative, sep } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const assetsDir = join(distDir, 'assets')
const serverDir = join(process.cwd(), 'dist', 'server')
const workerPath = join(serverDir, 'index.js')

const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.png', 'image/png'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.xml', 'application/xml; charset=utf-8'],
  ['.svg', 'image/svg+xml; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
])

const assetEntries = new Map()

async function addAsset(publicPath, filePath) {
  const buffer = await readFile(filePath)
  const contentType = contentTypes.get(extname(filePath)) || 'application/octet-stream'
  assetEntries.set(publicPath, {
    contentType,
    body: buffer.toString('base64'),
  })
}

await addAsset('/index.html', join(distDir, 'index.html'))

async function addDirectoryAssets(directory) {
  const entries = await readdir(directory)

  for (const entry of entries) {
    const filePath = join(directory, entry)
    const fileStat = await stat(filePath)

    if (fileStat.isDirectory()) {
      if (entry !== 'server') {
        await addDirectoryAssets(filePath)
      }
      continue
    }

    const publicPath = `/${relative(distDir, filePath).split(sep).join('/')}`
    await addAsset(publicPath, filePath)
  }
}

try {
  await stat(assetsDir)
  await addDirectoryAssets(assetsDir)
} catch {
  // Some builds may not emit hashed assets.
}

await addDirectoryAssets(distDir)

const workerSource = `const ASSETS = ${JSON.stringify(Object.fromEntries(assetEntries), null, 2)};

const textHeaders = {
  "content-type": "text/html; charset=utf-8",
};

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function createAssetResponse(pathname) {
  const asset = ASSETS[pathname];

  if (!asset) {
    return null;
  }

  return new Response(decodeBase64(asset.body), {
    headers: {
      "content-type": asset.contentType,
      "cache-control": pathname.startsWith("/assets/")
        ? "public, max-age=31536000, immutable"
        : "public, max-age=60",
    },
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const assetResponse = createAssetResponse(url.pathname === "/" ? "/index.html" : url.pathname);

    if (assetResponse) {
      return assetResponse;
    }

    const acceptsHtml = request.headers.get("accept")?.includes("text/html");
    const looksLikePage = request.method === "GET" && !url.pathname.split("/").pop()?.includes(".");

    if (request.method === "GET" && (acceptsHtml || looksLikePage)) {
      return createAssetResponse("/index.html");
    }

    return new Response("Not found", { status: 404, headers: textHeaders });
  },
};
`

await mkdir(serverDir, { recursive: true })
await writeFile(workerPath, workerSource)
