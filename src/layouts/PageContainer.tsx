import type { ReactNode } from 'react'
import { MessageCircle } from 'lucide-react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { whatsappLink } from '../data/siteContent'

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
      <Footer />
      <a className="floating-whatsapp" href={whatsappLink} aria-label="Falar com a HazeLink no WhatsApp" rel="noreferrer" target="_blank">
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </div>
  )
}
