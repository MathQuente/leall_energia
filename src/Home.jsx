import logo from '../src/assets/trabalhador.jpg'
import { FaHome } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { HiMiniHandRaised } from 'react-icons/hi2'

import { SlideInWhenVisible } from './components/SlideInWhenVisible'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex justify-center md:gap-20 w-full md:pt-16 px-10">
          <div className="md:w-1/3 flex flex-col flex-wrap gap-4 pt-10">
            <SlideInWhenVisible direction="left">
              <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#1196bb] to-[#21256b] font-semibold">
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
          <div className="lg:block hidden">
            <img
              src={logo}
              className="md:w-[565px] md:h-[396px] lg:block hidden"
              alt=""
            />
          </div>
        </div>

        <div className="flex w-full px-10 md:pt-16 lg:max-w-[1050px] xl:max-w-[1150px] 2xl:max-w-[1280px] md:mx-auto md:px-4 md:gap-20 md:py-14 mb-10 mt-10">
          <div className="w-full lg:flex justify-center hidden">
            <img
              src={logo}
              alt="TecLab Logo"
              className="w-[423px] h-[800px] object-cover md:hidden lg:block"
            />
          </div>

          <div className="flex flex-col flex-wrap item gap-6 px-4 lg:px-0">
            <SlideInWhenVisible direction="right">
              <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#1196bb] to-[#21256b] font-semibold">
                Nossos Princípios
              </h2>
            </SlideInWhenVisible>

            <div className="flex-col">
              <div className="flex items-center gap-4">
                <FaHome className="text-[#1e4480] size-8" />
                <p className="text-xl text-[#333333] ">Missão</p>
              </div>
              <p className="md:ml-11">
                Garantir a segurança dos profissionais da área de elétrica,
                atestando a qualidade do material isolante de ferramentas e
                equipamentos. Proporcionando soluções práticas e eficazes por
                meio de ensaios elétricos realizados em nosso laboratório móvel,
                oferecendo conveniência aos clientes com a preservação da
                qualidade e da segurança dos serviços.
              </p>
            </div>

            <div className="flex-col">
              <div className="flex items-center gap-4">
                <IoEyeSharp className="text-[#1e4480] size-8" />
                <p className="text-xl text-[#333333]">Visão</p>
              </div>
              <p className="md:ml-11">
                Ser a referência no Nordeste em ensaios elétricos de ferramentas
                e equipamentos isolados, destacando-se pela excelência, inovação
                e compromisso com a segurança. Priorizando a qualidade dos
                serviços e a confiança de nossos clientes.
              </p>
            </div>

            <div className="flex-col">
              <div className="flex gap-2">
                <HiMiniHandRaised className="text-[#1e4480] size-8" />
                <p className="text-xl text-[#333333]">Valores</p>
              </div>
              <p className="md:ml-11">
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
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#1196bb] to-[#21256b] mb-10">
            Nossos Clientes
          </h1>
          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
            >
              {images.map(image => (
                <SwiperSlide key={image.id}>
                  <div className="flex items-center justify-center h-40 p-7">
                    <img
                      src={image.url}
                      alt={`Cliente ${image.id}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
