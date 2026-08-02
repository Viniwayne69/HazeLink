import { Eye, Lightbulb, ScanLine } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { photos } from '../data/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function AboutPage() {
  usePageMeta({
    title: 'Sobre | HazeLink',
    description: 'Conheça a visão da HazeLink e o propósito por trás da primeira impressão digital da sua marca.',
    path: '/sobre',
  })

  return (
    <>
      <PageHero
        eyebrow="Sobre a HazeLink"
        title="Conexão, design e tecnologia com propósito"
        description="A HazeLink nasceu para transformar a forma como marcas e profissionais se apresentam no mundo. Unimos design, tecnologia e comunicação para criar experiências digitais elegantes, práticas e memoráveis."
        image={photos.founder}
        imageAlt="Fundador da HazeLink em um ambiente profissional"
        stat="Marca com presença"
        detail="Tecnologia simples, experiência elegante e comunicação clara"
      />

      <section className="founder-story-section">
        <div className="founder-story-grid">
          <div className="founder-story-copy">
            <p className="eyebrow">Fundador e CEO</p>
            <h2>Vinicius Ribeiro</h2>
            <p>
              Apaixonado por design, tecnologia e comunicação, fundou a HazeLink para ajudar marcas e profissionais a
              deixarem sua marca por onde passam.
            </p>
            <p>Acredita que a primeira impressão pode abrir portas e transformar conexões em grandes oportunidades.</p>
            <strong>Vinicius Ribeiro</strong>
            <span>CEO e fundador da HazeLink</span>
          </div>
          <div className="founder-principles">
            <article>
              <Eye size={23} aria-hidden="true" />
              <div><h3>Clareza que aproxima</h3><p>Uma presença simples de entender e fácil de lembrar.</p></div>
            </article>
            <article>
              <Lightbulb size={23} aria-hidden="true" />
              <div><h3>Design com intenção</h3><p>Cada detalhe existe para fortalecer a percepção da sua marca.</p></div>
            </article>
            <article>
              <ScanLine size={23} aria-hidden="true" />
              <div><h3>Tecnologia natural</h3><p>Recursos modernos que desaparecem para a experiência fluir.</p></div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
