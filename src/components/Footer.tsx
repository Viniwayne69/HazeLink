import { Camera, Globe2, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactInfo, footerColumns } from '../data/siteContent'
import { LogoBlock } from './LogoBlock'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <LogoBlock />
        <p>Sua conexão. Sua primeira impressão.</p>
        <div className="social-row" aria-label="Redes sociais">
          <a aria-label="LinkedIn" href="https://linkedin.com" rel="noreferrer" target="_blank">
            <Globe2 size={17} />
          </a>
          <a aria-label="Instagram" href="https://instagram.com" rel="noreferrer" target="_blank">
            <Camera size={17} />
          </a>
          <a aria-label="YouTube" href="https://youtube.com" rel="noreferrer" target="_blank">
            <PlayCircle size={17} />
          </a>
        </div>
      </div>

      {footerColumns.map((column) => (
        <div className="footer-column" key={column.title}>
          <h3>{column.title}</h3>
          {column.links.map((link) => (
            <Link key={link.label} to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
      ))}

      <div className="footer-column footer-contact">
        <h3>Contato</h3>
        {contactInfo.map((item) => (
          <a href={item.href} key={item.label} rel="noreferrer" target={item.href.startsWith('http') ? '_blank' : undefined}>
            {item.value}
          </a>
        ))}
      </div>

      <p className="copyright">© {year} HazeLink. Todos os direitos reservados.</p>
    </footer>
  )
}
