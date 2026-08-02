import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome.'),
  email: z.string().email('Informe um e-mail válido.'),
  whatsapp: z.string().min(8, 'Informe seu WhatsApp.'),
  company: z.string().min(2, 'Informe sua empresa ou profissão.'),
  message: z.string().min(10, 'Conte um pouco sobre o que você precisa.'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const submitForm = handleSubmit(async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 450))
    setSent(true)
    reset()
  })

  return (
    <form className="contact-form" onSubmit={submitForm} noValidate>
      <div className="field-grid">
        <label>
          Nome
          <input autoComplete="name" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label>
          E-mail
          <input autoComplete="email" type="email" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
      </div>
      <div className="field-grid">
        <label>
          WhatsApp
          <input autoComplete="tel" {...register('whatsapp')} />
          {errors.whatsapp && <span>{errors.whatsapp.message}</span>}
        </label>
        <label>
          Empresa ou profissão
          <input {...register('company')} />
          {errors.company && <span>{errors.company.message}</span>}
        </label>
      </div>
      <label>
        Mensagem
        <textarea rows={6} {...register('message')} />
        {errors.message && <span>{errors.message.message}</span>}
      </label>
      <button className="button button-primary" disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>
      {sent && <p className="success-message">Mensagem enviada. Em breve entraremos em contato com você.</p>}
    </form>
  )
}
