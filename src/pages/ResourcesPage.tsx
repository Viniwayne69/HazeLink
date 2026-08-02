import { CTASection } from '../components/CTASection'
import { IconFeature } from '../components/IconFeature'
import { PageHero } from '../components/PageHero'
import { photos, resourceGroups } from '../data/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function ResourcesPage() {
  usePageMeta({
    title: 'Benefícios | HazeLink',
    description: 'Conheça os benefícios que tornam o HazeLink uma presença digital elegante, prática e profissional.',
    path: '/recursos',
  })

  return (
    <>
      <PageHero
        eyebrow=""
        title="Benefícios"
        description="Muito mais do que um link. Uma experiência que fortalece sua marca e gera oportunidades."
        image={photos.networking}
        imageAlt="Profissionais conversando e compartilhando informações pelo celular"
        stat="Mais presença"
        detail="Uma marca mais clara, memorável e pronta para novas conexões"
      />

      <section className="light-section benefits-page-section">
        <div className="section-title section-title-center benefits-title">
          <p className="eyebrow">Presença que trabalha por você</p>
          <h2>Benefícios percebidos desde o primeiro contato.</h2>
        </div>
        <div className="benefit-grid benefit-grid-four">
          {resourceGroups.map((feature) => (
            <IconFeature key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <CTASection compact />
    </>
  )
}
