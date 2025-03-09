import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '../formSchema'
import { PatternFormat } from 'react-number-format'

export function ContactsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur'
  })
  const onSubmit = data => console.log(data)

  return (
    <>
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-[#06b3c2]">
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
              className="bg-white w-full p-3 border border-[#06b3c2] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
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
              className="bg-white w-full p-3 border border-[#06b3c2] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
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
              className="bg-white w-full p-3 border border-[#06b3c2] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
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
              className="bg-white w-full p-3 border border-[#06b3c2] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
            ></textarea>
            {errors.mensagem && (
              <span className="text-red-500 text-sm mt-1">
                {errors.mensagem.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#06b3c2] hover:bg-[#059ba9] text-white font-medium py-3 px-4  transition duration-300 mt-2"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </>
  )
}
