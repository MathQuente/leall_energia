import { ServicesGrid } from '../components/ServicesGrid';

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


import { MdOutlineCheck } from 'react-icons/md';

export function Services(){
    return(
        <>
        <div className='bg-gradient-to-b to-blue-700 from-gray-900 flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center h-full p-4 overflow-auto bg-white md:w-50%">
                <div className='bg-white items-center p-8 '>
                    <h1 className="text-center text-3xl font-bold text-gray-700 b-4">Nossos serviços</h1>
                    <h2 className="text-left p-2 text-xl text-gray-600 mt-2">Testes de isolação elétrica conforme NR-10 nos seguintes equipamentos:</h2>

                    <ul className="p-4 rounded-xl w-96 text-gray-700">
                        <li><MdOutlineCheck className='inline-block text-green-500'/>Luvas, ferramentas e varas.</li>
                        <li><MdOutlineCheck className='inline-block text-green-500'/>Ponta de prova, capacete e bota.</li>
                        <li><MdOutlineCheck className='inline-block text-green-500'/>Mantas, tapetes e mangotes.</li>
                        <li><MdOutlineCheck className='inline-block text-green-500'/>Aterramento, bastão salv, lança e cesto.</li>
                        <li><MdOutlineCheck className='inline-block text-green-500'/>Banquetas, jampe e bastões isolados.</li>
                        <li><MdOutlineCheck className='inline-block text-green-500'/>Coberturas isoladas.</li>
                    </ul>
                </div>
            
                <span className='bg-white grid grid-cols-1 md:grid-cols-2 gap-4 -left'>
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