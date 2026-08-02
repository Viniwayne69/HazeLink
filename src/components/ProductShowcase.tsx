import { Check, Link2, Mail, MapPin, MessageCircle, QrCode, Radio } from 'lucide-react'
import hazeLogo from '../assets/haze-logo.webp'

const productPoints = [
  'Perfil responsivo com sua identidade',
  'Contatos e canais sempre atualizados',
  'Compartilhamento por link, QR Code e NFC',
]

export function ProductShowcase() {
  return (
    <section className="product-showcase" aria-labelledby="product-showcase-title">
      <div className="product-showcase-copy">
        <p className="eyebrow">Seu HazeLink em ação</p>
        <h2 id="product-showcase-title">Uma apresentação pronta para abrir conversas.</h2>
        <p>
          Sua identidade ganha uma página elegante, fácil de atualizar e preparada para ser compartilhada no momento em
          que uma nova conexão acontece.
        </p>
        <ul>
          {productPoints.map((point) => (
            <li key={point}>
              <Check size={17} aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-stage" aria-hidden="true">
        <div className="product-phone">
          <span className="phone-speaker" />
          <div className="phone-profile">
            <img src={hazeLogo} alt="" />
            <small>PERFIL DIGITAL</small>
            <h3>Marina Costa</h3>
            <p>Consultoria e estratégia</p>
            <div className="profile-actions">
              <span><MessageCircle size={16} /></span>
              <span><Mail size={16} /></span>
              <span><MapPin size={16} /></span>
            </div>
            <div className="profile-links">
              <span><Link2 size={15} /> Conheça meu trabalho</span>
              <span><MessageCircle size={15} /> Fale comigo</span>
            </div>
          </div>
        </div>

        <div className="product-card product-card-nfc">
          <Radio size={28} />
          <strong>HazeLink</strong>
          <small>TECNOLOGIA NFC</small>
        </div>

        <div className="product-card product-card-qr">
          <QrCode size={58} strokeWidth={1.3} />
          <strong>Seu acesso em um scan</strong>
        </div>
      </div>
    </section>
  )
}
