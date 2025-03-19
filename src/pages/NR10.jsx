import { Container } from '../components/Container'
import nr_10 from '../assets/a60b24fb-a952-4f36-8bde-df48ce7b5c07.png'

export function NR10() {
  return (
    <div className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-2 pt-10 lg:p-10">
          <section className="flex flex-col">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent">
              Segurança no trabalho
            </h1>
            <div className='lg:text-justify sm:text-center'>
            <p className="mt-10 text-xl text-gray-900">
              A Norma Regulamentadora NR 10, do Ministério do Trabalho, descreve
              as relações implícitas na interação de profissionais com o sistema
              elétrico. A segurança destes trabalhadores deve ser garantida com
              o uso de equipamentos e ferramentas isoladas e rigorosamente
              testadas através de ensaios elétricos, conforme previstos pela
              ABNT - NBRs aplicáveis a cada equipamento com suas
              especificidades.
            </p>
            <h2 className="mt-10 text-3xl font-bold text-center bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent">
              O que diz a norma NR 10:
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-xl text-gray-900">
                <strong>10.2.4</strong> Os estabelecimentos com carga instalada
                superior a 75 kW devem constituir e manter o Prontuário de
                Instalações Elétricas, contendo, além do disposto no subitem
                10.2.3, no mínimo:
              </p>
              <p className="text-xl text-gray-900 font-bold">
                e) Resultados dos testes de isolação elétrica realizados em
                equipamentos de proteção individual e coletiva;
              </p>
              <p className="text-xl text-gray-900">
                <strong>10.4.3.1</strong> Os equipamentos, dispositivos e
                ferramentas que possuam isolamento elétrico devem estar
                adequados às tensões envolvidas, e serem inspecionados e
                testados de acordo com as regulamentações existentes ou
                recomendações dos fabricantes.
              </p>
              <p className="text-xl text-gray-900">
                <strong>10.7.8</strong> Os equipamentos, ferramentas e
                dispositivos isolantes ou equipados com materiais isolantes,
                destinados ao trabalho em alta tensão, devem ser submetidos a
                testes elétricos ou ensaios de laboratório periódicos,
                obedecendo-se as especificações do fabricante, os procedimentos
                da empresa e, na ausência destes, anualmente.
              </p>
            </div>
            </div>
          </section>
          <aside className="flex justify-center">
            <img
              src={nr_10}
              alt="Ilustração da Norma NR 10"
              className="hidden lg:block rounded-lg shadow-lg lg:max-h-[700px] lg:w-[400px] xl:max-h-[800px] xl:w-[450px] 2xl:max-h-[820px] 2xl:w-[500px] object-cover"
            />
          </aside>
        </div>
      </Container>
    </div>
  )
}
