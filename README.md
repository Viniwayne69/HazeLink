# HazeLink

Site institucional e comercial da HazeLink, criado com Vite, React, TypeScript, Tailwind CSS, React Router DOM, Lucide React, Framer Motion, React Hook Form e Zod.

## Rodando localmente

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
```

## Estrutura

O projeto contém páginas públicas para início, como funciona, recursos, sobre e contato. O formulário de contato usa React Hook Form com validação por Zod.

## Deploy na Vercel

1. Conecte o repositório na Vercel.
2. Use `npm run build` como comando de build.
3. Configure `dist` como diretório de saída.
4. Publique o projeto.

Para deploy no Sites, mantenha `.openai/hosting.json` com o `project_id` existente.
