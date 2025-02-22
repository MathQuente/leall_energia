export function App() {
  return (
    <>
      <div className="bg-[url('/assets/react')] bg-cover bg-center h-screen w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-8xl text-cyan-500 font-bold">Bem-vindo</h1>
          <h3 className="text-3xl text-white">Leall Energia</h3>

          <div className="flex flex-col items-start">
            <h1>Sobre nós</h1>
            <p className="">
              Fundada por um profissional com ampla experiência e qualificação
              comprovada na área de ensaios elétricos, a Leall Energia é
              especializada na realização de testes em ferramentas e
              equipamentos isolados em conformidade com a NR10. Localizada na
              região metropolitana de Fortaleza - CE, oferecemos um laboratório
              móvel que permite realizar os serviços no endereço de nossos
              clientes, garantindo mais praticidade e eficiência.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
