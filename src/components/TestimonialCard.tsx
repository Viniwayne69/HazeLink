type TestimonialCardProps = {
  quote: string
  author: string
  role: string
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <span aria-hidden="true">“</span>
      <p>{quote}</p>
      <div>
        <strong>{author}</strong>
        <small>{role}</small>
      </div>
    </article>
  )
}
