import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteContent'
import { LogoBlock } from './LogoBlock'
import { WhatsAppButton } from './WhatsAppButton'

function linkClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'active' : ''
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header" aria-label="Cabeçalho principal">
      <LogoBlock className="header-wordmark" showMark={false} />

      <nav className="desktop-menu" aria-label="Navegação principal">
        {navLinks.map((link) =>
          link.path.includes('#') ? (
            <a href={link.path} key={link.label}>
              {link.label}
            </a>
          ) : (
            <NavLink className={linkClass} key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ),
        )}
      </nav>

      <WhatsAppButton className="header-cta">Quero contratar</WhatsAppButton>

      <button aria-label="Abrir menu" className="menu-toggle" onClick={() => setIsOpen(true)} type="button">
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="mobile-menu-backdrop"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              animate={{ x: 0 }}
              className="mobile-menu-panel"
              exit={{ x: '100%' }}
              initial={{ x: '100%' }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <button aria-label="Fechar menu" className="menu-close" onClick={() => setIsOpen(false)} type="button">
                <X size={22} />
              </button>
              {navLinks.map((link) =>
                link.path.includes('#') ? (
                  <a href={link.path} key={link.label} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </a>
                ) : (
                  <NavLink className={linkClass} key={link.path} onClick={() => setIsOpen(false)} to={link.path}>
                    {link.label}
                  </NavLink>
                ),
              )}
              <WhatsAppButton>Comece agora</WhatsAppButton>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
