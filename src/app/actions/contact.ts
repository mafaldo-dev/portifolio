'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'Assunto é obrigatório'),
  message: z.string().min(1, 'Mensagem é obrigatória'),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  // Aqui você pode adicionar a lógica para enviar o email ou salvar a mensagem em um banco de dados
  console.log('Formulário enviado:', validatedFields.data)

  // Simula um atraso de 1 segundo para demonstrar o estado de carregamento
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true }
}

