import nr_10 from '../assets/nr-10.jpg'

export function NR10(){
    return (
        <>
    <div className='bg-white gap-4 mx-auto md:ml-10 md:mr-10 lg:ml-30'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 justify-center text-center'>
        <div className=''>
            <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent'>Segurança no trabalho</h1>
            <div className='text-xl text-gray-900 box-content md:ml-10 pt-10 pr-10 text-justify'>
                A Norma Regulamentadora NR 10, do Ministério do Trabalho, descreve as relações implícitas na interação de profissionais com o sistema elétrico. 
                A segurança destes trabalhadores deve ser garantida com o uso de equipamentos e ferramentas isoladas e rigorosamente testadas através de ensaios elétricos, 
                conforme previstos pela ABNT - NBRs aplicáveis a cada equipamento com suas especificidades.
            </div>
        <h2 className='text-3xl font-bold bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent p-10 text-center'>O que diz a norma NR 10:</h2>
        <span className=" md:mx-10 mx-5 flex flex-col">
        
        <p className="text-xl text-gray-900 mt-2 -left md:ml-10 text-justify">
        10.2.4 Os estabelecimentos com carga instalada superior a 75 kW devem constituir e manter o Prontuário de Instalações Elétricas, contendo, além do disposto no subitem 10.2.3, no mínimo: 
        </p>
        {/* <div className="flex flex-col text-xl text-gray-900 box-content md:ml-30 md:mr-30 pb-10 text-justify justify-center"> */}
        <p className='font-bold pb-5 text-xl text-gray-900 mt-2 -left md:ml-10 text-justify'>
        e) Resultados dos testes de isolação elétrica realizados em equipamentos de proteção individual e coletiva; 
        </p>
        <p className='pb-5 text-xl text-gray-900 -left md:ml-10 text-justify'>
        10.4.3.1 Os equipamentos, dispositivos e ferramentas que possuam isolamento elétrico devem estar adequados às tensões envolvidas, e serem inspecionados e testados de acordo com as regulamentações existentes 
        ou recomendações dos fabricantes.

        </p>
        <p className='text-xl text-gray-900 -left md:ml-10 text-justify'>
        10.7.8 Os equipamentos, ferramentas e dispositivos isolantes ou equipados com materiais isolantes, destinados ao trabalho em alta tensão, 
        devem ser submetidos a testes elétricos ou ensaios de laboratório periódicos, obedecendo-se as especificações do fabricante, os procedimentos da empresa e na ausência desses, anualmente.
        </p>
        {/* </div> */}
        </span>

        </div>
        <div className='flex'>
            <img
                src={nr_10}
                className="rounded-lg shadow-lg hidden max-h-120 md:flex object-cover" />
        </div>
        </div>
        </div>
        </>
    );
}