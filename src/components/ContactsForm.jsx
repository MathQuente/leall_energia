export function ContactsForm() {
  return (
    <>
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-[#06b3c2]">
          Envie sua mensagem por aqui.
        </h2>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-gray-700 font-medium">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome completo"
              className="bg-white w-full p-3 border border-[#06b3c2] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-700 font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              className="bg-white w-full p-3 border border-[#06b3c2] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="telefone" className="text-gray-700 font-medium">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Telefone aqui"
              className="bg-white w-full p-3 border border-[#06b3c2] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="mensagem" className="text-gray-700 font-medium">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="6"
              placeholder="Seu texto aqui"
              className="bg-white w-full p-3 border border-[#06b3c2] focus:outline-none focus:ring-1 focus:ring-[#06b3c2]"
            ></textarea>
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
