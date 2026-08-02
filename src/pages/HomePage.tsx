import { motion } from 'framer-motion'
import { BadgeCheck, BriefcaseBusiness, Check, Handshake, ListChecks, PlayCircle, QrCode, Radio, UserRound, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { IconFeature } from '../components/IconFeature'
import { ProductShowcase } from '../components/ProductShowcase'
import { TestimonialCard } from '../components/TestimonialCard'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { photos, pricingItems, quickBenefits, testimonials } from '../data/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

const essentials = [
  {
    icon: BadgeCheck,
    title: 'Página Digital Personalizada',
    description: 'Sua identidade, seus contatos, links e informações em um único lugar.',
  },
  {
    icon: QrCode,
    title: 'Cartão com QR Code',
    description: 'Compartilhe sua página instantaneamente. Pronto para imprimir e distribuir.',
  },
  {
    icon: Radio,
    title: 'Cartão Premium com NFC',
    description: 'Aproxime e conecte. Tecnologia NFC para causar uma impressão inesquecível.',
  },
]

const audience = [
  { icon: BriefcaseBusiness, title: 'Empresas' },
  { icon: UserRound, title: 'Consultores' },
  { icon: BadgeCheck, title: 'Profissionais liberais' },
  { icon: Handshake, title: 'Vendas e Atendimento' },
  { icon: UsersRound, title: 'Eventos e Networking' },
  { icon: ListChecks, title: 'E muito mais' },
]

export function HomePage() {
  usePageMeta({
    title: 'HazeLink | A primeira impressão digital da sua marca',
    description:
      'Apresente sua marca com mais sofisticação, clareza e presença. O HazeLink reúne sua identidade digital, facilita o contato e fortalece sua primeira impressão.',
  })

  return (
    <>
      <section className="home-hero">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
        >
          <h1>
            Sua primeira impressão acontece <em>antes da reunião.</em>
          </h1>
          <p>Conecte, compartilhe e impressione com elegância. Tudo o que você é, em um só link.</p>
          <div className="hero-actions">
            <WhatsAppButton>Comece agora</WhatsAppButton>
            <Link className="button button-soft" to="/como-funciona">
              <PlayCircle size={17} aria-hidden="true" />
              Ver como funciona
            </Link>
          </div>
        </motion.div>

        <motion.figure
          animate={{ opacity: 1, scale: 1 }}
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <img src={photos.hero} alt="Profissionais compartilhando contatos durante um evento de tecnologia" />
        </motion.figure>
      </section>

      <section className="quick-strip" aria-label="Diferenciais rápidos">
        {quickBenefits.map((benefit) => (
          <article key={benefit.title}>
            <benefit.icon size={19} strokeWidth={1.7} aria-hidden="true" />
            <span>{benefit.title}</span>
          </article>
        ))}
      </section>

      <section className="audience-section">
        <h2>Para marcas e profissionais que querem se destacar</h2>
        <div>
          {audience.map((item) => (
            <article key={item.title}>
              <item.icon size={25} strokeWidth={1.5} aria-hidden="true" />
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </section>

      <ProductShowcase />

      <section className="light-section home-essentials">
        <div className="section-title section-title-left">
          <h2>Seu HazeLink inclui tudo que você precisa</h2>
        </div>
        <div className="benefit-grid benefit-grid-three">
          {essentials.map((benefit) => (
            <IconFeature key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <section className="home-pricing-section" id="precos">
        <div>
          <h2>Invista na sua presença digital</h2>
          <div className="price">
            <strong>R$ 497,00</strong>
            <span>/ ano</span>
          </div>
          <ul className="check-list">
            {pricingItems.slice(0, 6).map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <WhatsAppButton>Quero contratar</WhatsAppButton>
        </div>
        <figure>
          <img src={photos.contact} alt="Profissionais conversando durante um evento de tecnologia" loading="lazy" />
        </figure>
      </section>

      <section className="testimonials-section">
        <div className="section-title section-title-center">
          <p className="eyebrow">Quem já utiliza, recomenda</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
