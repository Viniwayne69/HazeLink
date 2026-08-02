import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/siteContent'

type WhatsAppButtonProps = {
  children: string
  className?: string
}

export function WhatsAppButton({ children, className = '' }: WhatsAppButtonProps) {
  return (
    <a className={`button button-primary ${className}`.trim()} href={whatsappLink} rel="noreferrer" target="_blank">
      {children}
      <MessageCircle size={17} aria-hidden="true" />
    </a>
  )
}
