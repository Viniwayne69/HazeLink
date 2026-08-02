type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, description, align = 'center' }: SectionTitleProps) {
  return (
    <div className={`section-title section-title-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
