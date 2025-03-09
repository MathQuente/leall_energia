import { ServicesGrid } from '../components/ServicesGrid';

import trabalhador from '../assets/trabalhador.jpg'
import luvas_iso from '../assets/services-img/luvas-iso.png'
import ferramentas_iso from '../assets/services-img/ferramentas-iso.png'
import vara_iso from '../assets/services-img/vara-iso.png'
import pontas_prova from '../assets/services-img/pontas_prova.png'
import capacete_prot from '../assets/services-img/capacete_prot.png'
import calcado_prot from '../assets/services-img/calcado_prot.png'
import manta_iso from '../assets/services-img/manta_iso.png'
import tapete_iso from '../assets/services-img/tapete_iso.png'
import mangote_iso from '../assets/services-img/mangote_iso.png'
import aterramento_temporario from '../assets/services-img/aterramento_temporario.png'
import bastao_resgate from '../assets/services-img/bastao_resgate.png'
import cesto_iso from '../assets/services-img/cesto_iso.png'
import banqueta_iso from '../assets/services-img/banqueta_iso.png'
import cabos_jumpe from '../assets/services-img/cabos_jumpe.png'
import bastoes_iso from '../assets/services-img/bastoes_iso.png'
import cobertura_circulares from '../assets/services-img/cobertura_circulares.png'
import cobertura_rigidas from '../assets/services-img/cobertura_rigidas.png'
import cobertura_borracha from '../assets/services-img/cobertura_borracha.png'
import nr_10 from '../assets/nr-10.jpg'


import { MdOutlineCheck } from 'react-icons/md';

export function Services(){
    return(
        <>
        <div className='bg-white mb-10'>
             <div className='bg-white gap-4 mx-1 md:mx-50'>
                <div className='flex flex-col md:flex-row p-10 items-center justify-center gap-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent ">Nossos serviços</h1>
                        <h2 className="text-xl text-gray-900 mt-2 -left">Testes de isolação elétrica conforme NR-10 nos seguintes equipamentos:</h2>
                        <div className=''>
                            <ul className="text-xl text-gray-900 box-content pt-10">
                                <li className='mb-4'><MdOutlineCheck className='inline-block text-blue-900'/>Luvas, ferramentas e varas.</li>
                                <li className='mb-4'><MdOutlineCheck className='inline-block text-blue-900'/>Ponta de prova, capacete e bota.</li>
                                <li className='mb-4'><MdOutlineCheck className='inline-block text-blue-900'/>Mantas, tapetes e mangotes.</li>
                                <li className='mb-4'><MdOutlineCheck className='inline-block text-blue-900'/>Aterramento, bastão salv, lança e cesto.</li>
                                <li className='mb-4'><MdOutlineCheck className='inline-block text-blue-900'/>Banquetas, jampe e bastões isolados.</li>
                                <li className='mb-4'><MdOutlineCheck className='inline-block text-blue-900'/>Coberturas isoladas.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-end mr-10">
                        <img src={nr_10} className="rounded-lg shadow-lg hidden md:flex max-h-120 max-w-120"/>
                    </div>
                </div>

                <hr className='mx-5 lg:mx-20 md:mx-10 md:mt-10 text-blue-900'/>
                <h2 className='text-3xl font-bold bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent text-center p-5'>Equipamentos</h2> 

                <span className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 -left bg-white lg:ml-20 lg:mr-20 mx-5'>
                    <ServicesGrid 
                        title="Ensaio de tensão elétrica aplicada em Luvas Isolantes de Borracha." 
                        subtitle="NBR 16295: Luvas de material isolante."
                        img={luvas_iso}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Ferramentas Manuais Isoladas." 
                        subtitle="NBR 9699: Ferramentas manuais - Isolação elétrica até 1000Vca e 1500Vcc."
                        img={ferramentas_iso}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Vara de Manobra Isolante." 
                        subtitle="ASTM-F 711: Especificação padrão para vara de plástico reforçado com fibra de vidro (FRP) e tubo usado em ferramentas de linha ao viva."
                        img={vara_iso}/>
                    <ServicesGrid 
                        title="Ensaio de tensão elétrica aplicada em Pontas de Prova." 
                        subtitle="IEC 61010-1:2010/AMD1:2016: Requisitos de segurança para equipamentos elétricos para medição, controle e uso em laboratório."
                        img={pontas_prova}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Capacete de Proteção." 
                        subtitle="ABNT-NBR 8221: Capacete de segurança para uso ocupacional - Especificação e método de ensaio."
                        img={capacete_prot}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Calçado de Proteção." 
                        subtitle="ABNT-NBR 16603: Equipamento de proteção individual - Calçado isolante elétrico para trabalhos em instalações elétricas de baixa tensão até 500 V em ambiente seco - Requisitos, métodos e ensaios."
                        img={calcado_prot}/>
                    <ServicesGrid 
                        title="Ensaio de tensão elétrica aplicada em Mantas Isolantes de Borracha." 
                        subtitle="ASTM-D 1048: Especificação padrão para mantas isolantes de borracha."
                        img={manta_iso}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Tapetes e Estrados Isolantes." 
                        subtitle="ASTM-D 178: Especificação padrão para tapete isolante de borracha."
                        img={tapete_iso}/>
                    <ServicesGrid 
                        title="Ensaio de tensão elétrica aplicada em Mangotes Isolantes de Borracha." 
                        subtitle="ABNT-NBR 10623: Mangas Isolantes de Borracha."
                        img={mangote_iso}/>
                    <ServicesGrid 
                        title="Ensaio de tensão elétrica aplicada em Aterramento Temporário." 
                        subtitle="ASTM-F 855: Especificações padrão para aterramento de proteção temporário a ser usado em linhas/equipamentos de energia elétrica desenergizados."
                        img={aterramento_temporario}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Bastão de Resgate." 
                        subtitle="ASTM-F 711: Especificação padrão para vara de plástico reforçado com fibra de vidro (FRP) e tubo usado em ferramentas de linha viva."
                        img={bastao_resgate}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Laça e Cesto Aéreo Isolados." 
                        subtitle="ANSI-SIA A.92.2: Dispositivos Aéreos Elevadores e Rotativos Montados em Veículos (Unidades Isoladas Abaixo de 69 kV)."
                        img={cesto_iso}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Banqueta Isolante." 
                        subtitle="ASTM-F 712: Métodos de teste padrão para equipamentos de proteção plástica eletricamente isolantes para proteção de trabalhadores."
                        img={banqueta_iso}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Cabos para Jumpe Provisório." 
                        subtitle="ABNT-NBR 11857: Cabo Protegido para Jumpe Provisório para Trabalhos em Redes Aéreas Energizadas até 15 kV. "
                        img={cabos_jumpe}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Bastões Isolados." 
                        subtitle="ASTM-F 711: Especificação padrão para vara de plástico reforçado com fibra de vidro (FRP) e tubo usado em ferramentas de linha viva."
                        img={bastoes_iso}/>
                    <ServicesGrid 
                        title="Ensaio de tensão elétrica aplicada em Coberturas Circulares para Linha Viva." 
                        subtitle="ASTM-F 712: Métodos de teste padrão para equipamentos de proteção plástica eletricamente isolantes para proteção de trabalhadores."
                        img={cobertura_circulares}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Coberturas Rígidas para Linha Viva." 
                        subtitle="ASTM-F 712: Métodos de teste padrão para equipamentos de proteção plástica eletricamente isolantes para proteção de trabalhadores."
                        img={cobertura_rigidas}/>
                    <ServicesGrid 
                        title="Ensaios de tensão elétrica aplicada em Coberturas de Borracha para Linha Viva." 
                        subtitle="ASTM-D 1050: Especificação padrão para mangueira de linha isolante de borracha."
                        img={cobertura_borracha}/>
                </span>
            </div>
        </div>
        </>
    );
}