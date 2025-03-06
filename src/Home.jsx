import logo from '../src/assets/trabalhador.jpg'
import { FaHome } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { HiMiniHandRaised } from 'react-icons/hi2'

import { SlideInWhenVisible } from './components/SlideInWhenVisible'

const images = [
  { id: 1, url: '../src/assets/adcd.jpg' },
  { id: 2, url: '../src/assets/asd.png' },
  { id: 3, url: '../src/assets/cxcv.png' },
  { id: 4, url: '../src/assets/das.png' },
  { id: 5, url: '../src/assets/dsf.jpg' },
  { id: 6, url: '../src/assets/qwe.png' },
  { id: 7, url: '../src/assets/ret.jpg' },
  { id: 8, url: '../src/assets/sdfsdf.jpg' },
  { id: 9, url: '../src/assets/wqewqe.jpg' }
]

export function Home() {
  return (
    <>
      <div className="flex-flex-col">
        <div className="flex items-center justify-center gap-10 w-full pt-10">
          <div className="w-1/4 flex flex-col flex-wrap gap-4">
            <SlideInWhenVisible direction="left">
              <h1 className="text-4xl text-[#06b3c2] font-semibold">
                Sobre nós
              </h1>
            </SlideInWhenVisible>
            <p className="text-[#454545]">
              Fundada por um profissional com ampla experiência e qualificação
              comprovada na área de ensaios elétricos, a Leall Energia é
              especializada na realização de testes em ferramentas e
              equipamentos isolados em conformidade com a NR10. Localizada na
              região metropolitana de Fortaleza - CE, oferecemos um laboratório
              móvel que permite realizar os serviços no endereço de nossos
              clientes, garantindo mais praticidade e eficiência.
            </p>
          </div>
          <div>
            <img src={logo} className="w-[546px] h-[383px]" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 w-full pt-10">
          <div>
            <img src={logo} className="w-[546px] h-[383px]" alt="" />
          </div>
          <div className="w-1/4 flex flex-col flex-wrap gap-4">
            <SlideInWhenVisible direction="right">
              <h1 className="text-4xl text-[#06b3c2] font-semibold">
                Nosso Principios
              </h1>
            </SlideInWhenVisible>

            <div className="flex flex-col">
              <div className="flex gap-4">
                <FaHome className="text-[#06b3c2] size-8" />
                <p className="text-xl text-[#333333] ">Missão</p>
              </div>

              <p className="text-[#454545]">
                Garantir a segurança dos profissionais da área de elétrica,
                atestando a qualidade do material isolante de ferramentas e
                equipamentos. Proporcionando soluções práticas e eficazes por
                meio de ensaios elétricos realizados em nosso laboratório móvel,
                oferecendo conveniência aos clientes com a preservação da
                qualidade e da segurança dos serviços.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3">
                <IoEyeSharp className="text-[#06b3c2] size-8" />
                <p className="text-xl text-[#333333]">Visão</p>
              </div>
              <p className="text-[#454545]">
                Ser a referência no Nordeste em ensaios elétricos de ferramentas
                e equipamentos isolados, destacando-se pela excelência, inovação
                e compromisso com a segurança. Priorizando a qualidade dos
                serviços e a confiança de nossos clientes.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2">
                <HiMiniHandRaised className="text-[#06b3c2] size-8" />
                <p className="text-xl text-[#333333]">Valores</p>
              </div>
              <p className="text-[#454545]">
                Nossos valores estão alicerçados na honestidade, compromisso e
                qualidade. Acreditamos que a honestidade e o compromisso com os
                nossos clientes são fundamentais para construir relações de
                confiança duradouras. Buscamos ser reconhecidos pela excelência
                técnica, mantendo a qualidade como o pilar essencial para o
                sucesso da nossa marca.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-gray-100 p-10">
          <h1 className="text-4xl text-[#06b3c2] mb-10">Nossos Clientes</h1>
          <div className="grid grid-cols-3 mt-5 gap-4">
            {images.map(image => (
              <img
                key={image.id}
                src={image.url}
                alt={image.alt}
                className="w-40"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
