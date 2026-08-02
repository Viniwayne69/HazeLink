import { BadgeCheck, Brush, Contact, QrCode, Radio, Send, UserRound } from 'lucide-react'
import { CTASection } from '../components/CTASection'
import { PageHero } from '../components/PageHero'
import { photos } from '../data/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

const steps = [
  {
    icon: UserRound,
    title: 'Crie seu perfil',
    description: 'Preencha suas informações, contatos, links e tudo que deseja compartilhar. Nós cuidamos do resto.',
  },
  {
    icon: Brush,
    title: 'Personalize',
    description: 'Escolha o estilo, as cores e os detalhes que representam sua marca e seu posicionamento.',
  },
  {
    icon: Send,
    title: 'Revisamos e publicamos',
    description: 'Nossa equipe revisa tudo com atenção e publica sua página com rapidez e qualidade.',
  },
  {
    icon: QrCode,
    title: 'Você recebe seus materiais',
    description: 'Receba seu cartão com QR Code para impressão e o cartão NFC premium em casa.',
  },
  {
    icon: Contact,
    title: 'Compartilhe e conecte',
    description: 'Use em reuniões, eventos, atendimentos e redes sociais. Aproxime, compartilhe e impressione.',
  },
]

const techCards = [
  {
    title: 'NFC',
    description: 'Aproxime o cartão do celular e sua página abre instantaneamente.',
    icon: Radio,
  },
  {
    title: 'QR Code',
    description: 'Escaneie o código e tenha acesso rápido à sua página personalizada.',
    icon: QrCode,
  },
]

const faqs = [
  'Em quanto tempo minha página fica pronta?',
  'O cartão NFC funciona em qualquer celular?',
  'Posso editar as informações depois?',
  'O que está incluso no plano anual?',
]

export function HowItWorksPage() {
  usePageMeta({
    title: 'Como funciona | HazeLink',
    description: 'Entenda como o HazeLink cria sua página digital, seu QR Code e seu cartão premium com NFC.',
    path: '/como-funciona',
  })

  return (
    <>
      <PageHero
        eyebrow=""
        title="Como funciona"
        description="Um processo simples para você apresentar sua marca com mais profissionalismo e impacto."
        image={photos.process}
        imageAlt="Profissionais compartilhando contatos durante um evento de tecnologia"
        stat="Processo guiado"
        detail="Da criação do perfil aos materiais prontos"
      />

      <section className="timeline-section">
        <div className="section-title section-title-center timeline-title">
          <p className="eyebrow">Processo HazeLink</p>
          <h2>Da sua identidade ao primeiro toque.</h2>
        </div>
        <div className="vertical-steps">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span className="step-icon">
                <step.icon size={22} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <h3>
                  {index + 1}. {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
              <span className={`step-preview step-preview-${index + 1}`} aria-hidden="true">
                <step.icon size={28} strokeWidth={1.5} />
                <i />
                <i />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="tech-section">
        <div>
          <p className="eyebrow">Materiais</p>
          <h2>Tecnologia que aproxima</h2>
          <p>Com NFC e QR Code, sua marca está a um toque ou um scan de distância.</p>
        </div>
        <div className="tech-grid">
          {techCards.map((card) => (
            <article key={card.title}>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <span>
                <card.icon size={32} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-title section-title-left">
          <p className="eyebrow">Dúvidas frequentes</p>
        </div>
        <div className="faq-list">
          {faqs.map((question) => (
            <article key={question}>
              <span>{question}</span>
              <BadgeCheck size={16} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <CTASection compact />
    </>
  )
}
