import type { LucideIcon } from 'lucide-react'

type IconFeatureProps = {
  icon: LucideIcon
  title: string
  description?: string
}

export function IconFeature({ icon: Icon, title, description }: IconFeatureProps) {
  return (
    <article className="icon-feature">
      <span className="icon-feature-mark">
        <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </article>
  )
}
