import { z } from 'zod'

export const contactSchema = z.object({
  nome: z
    .string()
    .min(3, { message: 'Nome deve ter mais do que 3 caracteres' })
    .max(50, { message: 'Nome não pode exceder 50 caracteres' })
    .regex(/^[a-zA-ZÀ-ÿ ]+$/, {
      message: 'Apenas letras e espaços são permitidos'
    }),
  email: z.string().email({ message: 'Emai inválido' }),
  telefone: z
    .string()
    .min(14, { message: 'Telefone incompleto' })
    .max(15, { message: 'Telefone inválido' })
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, {
      message: 'Formato esperado: (xx) xxxxx-xxxx'
    }),
  mensagem: z
    .string()
    .min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' })
    .max(500, { message: 'Mensagem não pode exceder 500 caracteres' })
})
