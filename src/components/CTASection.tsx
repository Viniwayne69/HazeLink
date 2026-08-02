import { Link } from 'react-router-dom'
import { WhatsAppButton } from './WhatsAppButton'

type CTASectionProps = {
  compact?: boolean
}

export function CTASection({ compact = false }: CTASectionProps) {
  return (
    <section className={`cta-section${compact ? ' cta-section-compact' : ''}`}>
      <div>
        {!compact && <p className="eyebrow">Comece com presença</p>}
        <h2>{compact ? 'Mais presença, mais conexão, mais resultado.' : 'Pronto para transformar sua primeira impressão?'}</h2>
        <p>
          {compact
            ? 'HazeLink é para quem leva sua marca a sério.'
            : 'Apresente sua marca com mais clareza, sofisticação e presença em cada contato.'}
        </p>
      </div>
      <div className="cta-actions">
        <WhatsAppButton>{compact ? 'Quero contratar' : 'Comece agora'}</WhatsAppButton>
        {!compact && (
          <Link className="button button-ghost" to="/contato">
            Falar com especialista
          </Link>
        )}
      </div>
    </section>
  )
}
