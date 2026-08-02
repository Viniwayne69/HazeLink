import { photos } from '../data/siteContent'

export function FounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-copy">
        <p className="eyebrow">Sobre o fundador</p>
        <h2>A mente por trás da HazeLink</h2>
        <p>
          Vinicius Ribeiro é o fundador da HazeLink e da Haze. A proposta da empresa é transformar a forma como marcas
          e profissionais se apresentam no mundo, unindo design, tecnologia e comunicação de maneira clara, elegante e
          memorável.
        </p>
        <p>
          A HazeLink nasce para tornar cada apresentação mais simples, mais bonita e mais confiável, sem excesso de
          tecnologia aparente, apenas uma experiência bem pensada do primeiro toque ao próximo contato.
        </p>
        <span className="signature">Vinicius Ribeiro</span>
      </div>
      <figure className="founder-photo">
        <img src={photos.founder} alt="Profissional em ambiente de trabalho elegante usando celular" loading="lazy" />
      </figure>
    </section>
  )
}
