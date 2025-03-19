import { Container } from '../components/Container'
import { SlideInWhenVisible } from '../components/SlideInWhenVisible'

import { FaHome } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { HiMiniHandRaised } from 'react-icons/hi2'

import aboutUsImage from '../assets/f0960c95-a266-4711-acac-bbd51e53c5af.jpg'
import ourPrincipes from '../assets/eb81fda5-d9cc-49b0-ad8f-c2cc87774498.png'
import inCompany from '../assets/a5e4dd8f-257a-47e3-8cbc-a32db9540c5f.jpg'
import adcd from '../assets/adcd.jpg';
import asd from '../assets/asd.png';
import cxcv from '../assets/cxcv.png';
import das from '../assets/das.png';
import dsf from '../assets/dsf.jpg';
import qwe from '../assets/qwe.png';
import ret from '../assets/ret.jpg';
import sdfsdf from '../assets/sdfsdf.jpg';
import wqewqe from '../assets/wqewqe.jpg';

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  { id: 1, file: adcd },
  { id: 2, file: asd },
  { id: 3, file: cxcv },
  { id: 4, file: das },
  { id: 5, file: dsf },
  { id: 6, file: qwe },
  { id: 7, file: ret },
  { id: 8, file: sdfsdf },
  { id: 9, file: wqewqe }
]

const principles = [
  {
    icon: <FaHome className="w-8 h-8" />,
    title: 'Missão',
    text: `Garantir a segurança dos profissionais da área de elétrica, atestando a qualidade do material isolante de equipamentos de proteção e ferramentas. Proporcionando soluções práticas e eficazes por meio de ensaios elétricos realizados em nossa estrutura móvel, oferecendo conveniência aos clientes com a preservação da qualidade e da segurança dos serviços.`
  },
  {
    icon: <IoEyeSharp className="w-8 h-8" />,
    title: 'Visão',
    text: `Ser a referência no Nordeste em ensaios de isolação elétrica em equipamentos de proteção e ferramentas, destacando-se pela excelência, inovação e compromisso com a segurança. Priorizando a qualidade dos serviços e a confiança de nossos clientes.`
  },
  {
    icon: <HiMiniHandRaised className="w-8 h-8" />,
    title: 'Valores',
    text: `Nossos valores estão alicerçados na honestidade, compromisso e qualidade. Acreditamos que a honestidade e o compromisso com os nossos clientes são fundamentais para construir relações de confiança duradouras. Buscamos ser reconhecidos pela excelência técnica, mantendo a qualidade como o pilar essencial para o sucesso da nossa marca.`
  }
]

export function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="py-16">
        <Container>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <figure className="w-full md:w-1/2 hidden lg:block">
              <img
                src={inCompany}
                alt="Ensaios In-Company"
                className="w-full h-auto rounded-lg shadow-xl"
                loading="lazy"
              />
            </figure>
            <article className="w-full lg:w-1/2 space-y-4">
              <SlideInWhenVisible direction="right">
                <h2 className="text-4xl text-center md:text-start text-[#21256b] font-bold mb-6">
                  Ensaios In-Company
                </h2>
              </SlideInWhenVisible>
              <p className="text-lg text-[#454545] leading-relaxed">
                Ensaios In-Company para não deixar o cliente desprovido do
                EPI&apos;s e EPC&apos;s durante os testes.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <article className="w-full lg:w-1/2 space-y-4">
              <SlideInWhenVisible direction="left">
                <h2 className="text-4xl text-center md:text-start text-[#21256b] font-bold mb-6">
                  Conheça a Leall Energia
                </h2>
              </SlideInWhenVisible>
              <p className="text-lg text-[#454545] leading-relaxed">
                Fundada por um profissional com ampla experiência e qualificação
                comprovada na área de ensaios elétricos, a Leall Energia é
                especializada na realização de ensaios de isolação elétrica em
                EPI’s, EPC’s e ferramentas, conforme as exigências da NR10.
                Localizada na região metropolitana de Fortaleza - CE, oferecemos
                uma unidade móvel que permite realizar os serviços no endereço
                de nossos clientes, garantindo mais praticidade e eficiência.
              </p>
            </article>
            <figure className="w-full md:w-1/2 hidden lg:block">
              <img
                src={aboutUsImage}
                alt="Conheça a Leall Energia"
                className="w-full h-auto rounded-lg shadow-xl"
                loading="lazy"
              />
            </figure>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <figure className="w-full hidden lg:block order-1 md:order-0">
              <img
                src={ourPrincipes}
                alt="Nossos Princípios"
                className="w-[550px] h-[500px] rounded-lg shadow-xl"
                loading="lazy"
              />
            </figure>
            <article className="w-full flex flex-col space-y-8">
              <SlideInWhenVisible direction="right">
                <h2 className="text-4xl text-center md:text-start text-[#21256b] font-bold mb-6">
                  Nossos Princípios
                </h2>
              </SlideInWhenVisible>
              {principles.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-center md:items-start"
                >
                  <div className="text-[#21256b] mt-1">{item.icon}</div>
                  <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#454545] text-center md:text-left leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </article>
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center justify-center w-full bg-gray-100 p-10">
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
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {images.map(image => (
              <SwiperSlide key={image.id}>
                <div className="flex items-center justify-center h-40 p-7">
                  <img
                    src={image.file}
                    alt={`Cliente ${image.id}`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  )
}
