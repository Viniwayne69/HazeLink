import { Check } from 'lucide-react'
import { pricingItems } from '../data/siteContent'
import { WhatsAppButton } from './WhatsAppButton'

export function PricingCard() {
  return (
    <article className="pricing-card">
      <p className="plan-label">Invista na sua presença digital</p>
      <div className="price">
        <strong>R$ 497,00</strong>
        <span>/ano</span>
      </div>
      <p className="price-note">Pagamento único anual.</p>
      <ul>
        {pricingItems.map((item) => (
          <li key={item}>
            <Check size={17} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <WhatsAppButton>Quero mensagem</WhatsAppButton>
      <small>Ambiente seguro, visual premium e suporte humano.</small>
    </article>
  )
}
