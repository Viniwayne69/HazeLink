import { motion } from 'framer-motion'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  stat?: string
  detail?: string
}

export function PageHero({ eyebrow, title, description, image, imageAlt = '', stat, detail }: PageHeroProps) {
  return (
    <section className={`page-hero${image ? ' page-hero-with-visual' : ''}`}>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="page-hero-copy"
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{description}</p>
      </motion.div>
      {image ? (
        <motion.figure
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="page-hero-visual"
          initial={{ opacity: 0, scale: 0.98, y: 18 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <img src={image} alt={imageAlt} loading="lazy" />
          {stat && detail ? (
            <figcaption>
              <strong>{stat}</strong>
              <span>{detail}</span>
            </figcaption>
          ) : null}
        </motion.figure>
      ) : null}
    </section>
  )
}
