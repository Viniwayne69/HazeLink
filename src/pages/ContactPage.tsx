import { ContactForm } from '../features/contact/ContactForm'
import { PageHero } from '../components/PageHero'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { contactInfo, photos } from '../data/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactPage() {
  usePageMeta({
    title: 'Contato | HazeLink',
    description: 'Fale com a HazeLink para criar sua primeira impressão digital com sofisticação e clareza.',
    path: '/contato',
  })

  return (
    <>
      <PageHero
        eyebrow=""
        title="Fale com a gente"
        description="Estamos prontos para ajudar você a elevar sua marca para o próximo nível."
        image={photos.contact}
        imageAlt="Consultoria durante um evento de tecnologia"
        stat="Atendimento humano"
        detail="Explique sua ideia e receba os próximos passos com clareza"
      />

      <section className="contact-section">
        <ContactForm />
        <div className="contact-aside">
          <h2>Outros canais</h2>
          <div className="contact-list">
            {contactInfo.map((item) => (
              <a href={item.href} key={item.label} rel="noreferrer" target={item.href.startsWith('http') ? '_blank' : undefined}>
                <item.icon size={21} strokeWidth={1.7} aria-hidden="true" />
                <span>
                  <small>{item.label}</small>
                  {item.value}
                </span>
              </a>
            ))}
          </div>
          <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
        </div>
      </section>
    </>
  )
}
