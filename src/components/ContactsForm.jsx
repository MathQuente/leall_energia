import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '../formSchema'
import { PatternFormat } from 'react-number-format'
import emailjs from 'emailjs-com'
import { useState } from 'react'

export function ContactsForm() {
  const [isSent, setIsSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur'
  })

  const sendEmail = async data => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.nome,
          from_email: data.email,
          telefone: data.telefone,
          message: data.mensagem
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  const onSubmit = async data => {
    try {
      await sendEmail(data)
      setIsSent(true)
      reset()
      setTimeout(() => setIsSent(false), 3000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1196bb] to-[#21256b]">
          Envie sua mensagem por aqui.
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-gray-700 font-medium">
              Nome
            </label>
            <input
              {...register('nome')}
              type="text"
              placeholder="Nome completo"
              className="bg-white w-full p-3 border border-[#1196bb] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
            />
            {errors.nome && (
              <span className="text-red-500 text-sm mt-1">
                {errors.nome.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-700 font-medium">
              E-mail
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="Seu e-mail"
              className="bg-white w-full p-3 border border-[#1196bb] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="telefone" className="text-gray-700 font-medium">
              Telefone
            </label>
            <PatternFormat
              format="(##) #####-####"
              mask="_"
              value={watch('telefone') || ''}
              onValueChange={values => {
                setValue('telefone', values.formattedValue)
              }}
              className="bg-white w-full p-3 border border-[#1196bb] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
              placeholder="(00) 00000-0000"
            />
            {errors.telefone && (
              <span className="text-red-500 text-sm mt-1">
                {errors.telefone.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="mensagem" className="text-gray-700 font-medium">
              Mensagem
            </label>
            <textarea
              {...register('mensagem')}
              rows="6"
              placeholder="Seu texto aqui"
              className="bg-white w-full p-3 border border-[#1196bb] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
            ></textarea>
            {errors.mensagem && (
              <span className="text-red-500 text-sm mt-1">
                {errors.mensagem.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-b from-[#1196bb] to-[#21256b] hover:from-[#0F87A8] hover:to-[#1E2160] cursor-pointer text-white font-medium py-3 px-4  transition duration-300 mt-2"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </button>
          {isSent && (
            <div className="mt-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
              Mensagem enviada com sucesso!
            </div>
          )}
        </form>
      </div>
    </>
  )
}
