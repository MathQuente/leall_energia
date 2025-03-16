import { ServicesCard } from '../components/ServicesCard'
import { MdOutlineCheck } from 'react-icons/md'
import { Container } from '../components/Container'

import equipamentos from '../assets/equipamentos.jpg'

const SERVICES_DATA = [
  {
    id: 'luvas',
    title: 'Ensaio de tensão elétrica aplicada em Luvas Isolantes de Borracha.',
    subtitle: 'NBR 16295: Luvas de material isolante.',
    img: '../src/assets/services-img/luvas-iso.png',
    imgAlt: 'Luvas isolantes de borracha'
  },
  {
    id: 'ferramentas',
    title:
      'Ensaios de tensão elétrica aplicada em Ferramentas Manuais Isoladas.',
    subtitle:
      'NBR 9699: Ferramentas manuais - Isolação elétrica até 1000Vca e 1500Vcc.',
    img: '../src/assets/services-img/ferramentas-iso.png',
    imgAlt: 'Ferramentas manuais isoladas'
  },
  {
    id: 'vara',
    title: 'Ensaios de tensão elétrica aplicada em Vara de Manobra Isolante.',
    subtitle:
      'ASTM-F 711: Especificação padrão para vara de plástico reforçado com fibra de vidro (FRP) e tubo usado em ferramentas de linha viva.',
    img: '../src/assets/services-img/vara-iso.png',
    imgAlt: 'Vara de manobra isolante'
  },
  {
    id: 'pontas',
    title: 'Ensaio de tensão elétrica aplicada em Pontas de Prova.',
    subtitle:
      'IEC 61010-1:2010/AMD1:2016: Requisitos de segurança para equipamentos elétricos para medição, controle e uso em laboratório.',
    img: '../src/assets/services-img/pontas_prova.png',
    imgAlt: 'Pontas de prova'
  },
  {
    id: 'capacete',
    title: 'Ensaios de tensão elétrica aplicada em Capacete de Proteção.',
    subtitle:
      'ABNT-NBR 8221: Capacete de segurança para uso ocupacional - Especificação e método de ensaio.',
    img: '../src/assets/services-img/capacete_prot.png',
    imgAlt: 'Capacete de proteção'
  },
  {
    id: 'calcado',
    title: 'Ensaios de tensão elétrica aplicada em Calçado de Proteção.',
    subtitle:
      'ABNT-NBR 16603: Equipamento de proteção individual - Calçado isolante elétrico para trabalhos em instalações elétricas de baixa tensão até 500 V em ambiente seco - Requisitos, métodos e ensaios.',
    img: '../src/assets/services-img/calcado_prot.png',
    imgAlt: 'Calçado de proteção'
  },
  {
    id: 'manta',
    title:
      'Ensaio de tensão elétrica aplicada em Mantas Isolantes de Borracha.',
    subtitle:
      'ASTM-D 1048: Especificação padrão para mantas isolantes de borracha.',
    img: '../src/assets/services-img/manta_iso.png',
    imgAlt: 'Mantas isolantes de borracha'
  },
  {
    id: 'tapete',
    title:
      'Ensaios de tensão elétrica aplicada em Tapetes e Estrados Isolantes.',
    subtitle:
      'ASTM-D 178: Especificação padrão para tapete isolante de borracha.',
    img: '../src/assets/services-img/tapete_iso.png',
    imgAlt: 'Tapetes e estrados isolantes'
  },
  {
    id: 'mangote',
    title:
      'Ensaio de tensão elétrica aplicada em Mangotes Isolantes de Borracha.',
    subtitle: 'ABNT-NBR 10623: Mangas Isolantes de Borracha.',
    img: '../src/assets/services-img/mangote_iso.png',
    imgAlt: 'Mangotes isolantes de borracha'
  },
  {
    id: 'aterramento',
    title: 'Ensaio de tensão elétrica aplicada em Aterramento Temporário.',
    subtitle:
      'ASTM-F 855: Especificações padrão para aterramento de proteção temporário a ser usado em linhas/equipamentos de energia elétrica desenergizados.',
    img: '../src/assets/services-img/aterramento_temporario.png',
    imgAlt: 'Aterramento temporário'
  },
  {
    id: 'bastao-resgate',
    title: 'Ensaios de tensão elétrica aplicada em Bastão de Resgate.',
    subtitle:
      'ASTM-F 711: Especificação padrão para vara de plástico reforçado com fibra de vidro (FRP) e tubo usado em ferramentas de linha viva.',
    img: '../src/assets/services-img/bastao_resgate.png',
    imgAlt: 'Bastão de resgate'
  },
  {
    id: 'cesto',
    title:
      'Ensaios de tensão elétrica aplicada em Laça e Cesto Aéreo Isolados.',
    subtitle:
      'ANSI-SIA A.92.2: Dispositivos Aéreos Elevadores e Rotativos Montados em Veículos (Unidades Isoladas Abaixo de 69 kV).',
    img: '../src/assets/services-img/cesto_iso.png',
    imgAlt: 'Laça e cesto aéreo isolados'
  },
  {
    id: 'banqueta',
    title: 'Ensaios de tensão elétrica aplicada em Banqueta Isolante.',
    subtitle:
      'ASTM-F 712: Métodos de teste padrão para equipamentos de proteção plástica eletricamente isolantes para proteção de trabalhadores.',
    img: '../src/assets/services-img/banqueta_iso.png',
    imgAlt: 'Banqueta isolante'
  },
  {
    id: 'cabos',
    title:
      'Ensaios de tensão elétrica aplicada em Cabos para Jumpe Provisório.',
    subtitle:
      'ABNT-NBR 11857: Cabo Protegido para Jumpe Provisório para Trabalhos em Redes Aéreas Energizadas até 15 kV.',
    img: '../src/assets/services-img/cabos_jumpe.png',
    imgAlt: 'Cabos para jumpe provisório'
  },
  {
    id: 'bastoes',
    title: 'Ensaios de tensão elétrica aplicada em Bastões Isolados.',
    subtitle:
      'ASTM-F 711: Especificação padrão para vara de plástico reforçado com fibra de vidro (FRP) e tubo usado em ferramentas de linha viva.',
    img: '../src/assets/services-img/bastoes_iso.png',
    imgAlt: 'Bastões isolados'
  },
  {
    id: 'cobertura-circular',
    title:
      'Ensaio de tensão elétrica aplicada em Coberturas Circulares para Linha Viva.',
    subtitle:
      'ASTM-F 712: Métodos de teste padrão para equipamentos de proteção plástica eletricamente isolantes para proteção de trabalhadores.',
    img: '../src/assets/services-img/cobertura_circulares.png',
    imgAlt: 'Coberturas circulares para linha viva'
  },
  {
    id: 'cobertura-rigida',
    title:
      'Ensaios de tensão elétrica aplicada em Coberturas Rígidas para Linha Viva.',
    subtitle:
      'ASTM-F 712: Métodos de teste padrão para equipamentos de proteção plástica eletricamente isolantes para proteção de trabalhadores.',
    img: '../src/assets/services-img/cobertura_rigidas.png',
    imgAlt: 'Coberturas rígidas para linha viva'
  },
  {
    id: 'cobertura-borracha',
    title:
      'Ensaios de tensão elétrica aplicada em Coberturas de Borracha para Linha Viva.',
    subtitle:
      'ASTM-D 1050: Especificação padrão para mangueira de linha isolante de borracha.',
    img: '../src/assets/services-img/cobertura_borracha.png',
    imgAlt: 'Coberturas de borracha para linha viva'
  }
]

const EQUIPMENT_LIST = [
  'Luvas, ferramentas e varas.',
  'Ponta de prova, capacete e bota.',
  'Mantas, tapetes e mangotes.',
  'Aterramento, bastão salva-vidas, lança e cesto.',
  'Banquetas, jumper e bastões isolados.',
  'Coberturas isoladas.'
]

export function Services() {
  return (
    <section className="bg-white py-12">
      <Container className="px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 mb-16">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent mb-4">
              Nossos serviços
            </h1>
            <h2 className="text-xl text-gray-800 mb-8">
              Testes de isolação elétrica conforme NR-10 nos seguintes
              equipamentos:
            </h2>

            <ul className="space-y-3">
              {EQUIPMENT_LIST.map((item, index) => (
                <li key={index} className="flex items-start">
                  <MdOutlineCheck className="h-6 w-6 text-blue-700 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={equipamentos}
              alt="Equipamentos de isolação elétrica"
              className="rounded-lg shadow-lg w-full hidden md:block object-cover h-auto"
            />
          </div>
        </div>

        <hr className="my-10 border-blue-900/20" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent text-center p-5">
          Equipamentos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_DATA.map(service => (
            <ServicesCard
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              img={service.img}
              imgAlt={service.imgAlt}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
