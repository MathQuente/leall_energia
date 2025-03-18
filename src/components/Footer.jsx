import { MdEmail } from 'react-icons/md'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { NavLink } from './NavLink'
import { useEffect, useRef, useState } from 'react'

export function Footer() {
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [logoUrl, setLogoUrl] = useState('')
  const logoRef = useRef(null)
  const logoContainerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting && !logoLoaded) {
          import('../assets/logo.png').then(module => {
            setLogoUrl(module.default)
            setLogoLoaded(true)
          })
        }
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.1
      }
    )

    if (logoContainerRef.current) {
      observer.observe(logoContainerRef.current)
    }

    return () => {
      if (logoContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(logoContainerRef.current)
      }
    }
  }, [logoLoaded])

  return (
    <footer
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(19,68,111,0.9) 82%, rgba(150,150,150,1) 60%), url('../src/assets/background.jpg')"
      }}
    >
      <div className="flex flex-col gap-10 md:h-[300px] md:flex-row md:justify-around md:items-center">
        <div
          ref={logoContainerRef}
          className="flex items-center justify-center"
        >
          {logoLoaded ? (
            <img
              ref={logoRef}
              src={logoUrl}
              alt="TecLab Logo"
              className="w-auto h-72 max-w-full max-h-full object-contain"
              loading="lazy"
              onLoad={() => {
                if (logoRef.current) {
                  logoRef.current.style.opacity = 1
                }
              }}
              style={{
                opacity: 0,
                transition: 'opacity 0.3s ease-in',
                backgroundColor: 'transparent'
              }}
            />
          ) : (
            <div className="w-60 h-20 bg-transparent"></div>
          )}
        </div>

        <div className="flex flex-col items-center justify-center md:items-center select-none gap-2">
          <h3 className="text-xl font-semibold  text-white">Faça contato</h3>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2 gap-1">
              <MdEmail className="text-white text-lg" />
              <p className="text-white text-md">testes@leallenergia.com</p>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <FaWhatsapp className="text-white" />
              <p className="text-white">(85) 8430-0302</p>
            </div>

            <a
              className="text-white text-md flex items-center mb-2 gap-2"
              href="https://www.instagram.com/leallenergia?utm_source=qr"
              target="_blank"
            >
              <FaInstagram className="text-white" />
              Leall Energia
            </a>
            <a
              className="text-white text-md flex items-center mb-2 gap-2"
              href="http://linkedin.com/company/leallenergia"
              target="_blank"
            >
              <FaLinkedin className="text-white" />
              Leall Energia
            </a>
          </div>
          <p className="text-center text-white text-md">
            R. Antônio Pereira do Nascimento, 160
            <br />
            Luzardo Viana. Maracanaú - CE.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-center select-none mb-14 md:mb-0">
          <h3 className="text-xl font-semibold text-white">Navegação Rápida</h3>
          <ul className="text-center">
            <NavLink title="Empresa" href="/" footer />
            <NavLink title="NR-10" href="/nr10" footer />
            <NavLink title="Contato" href="/contato" footer />
            <NavLink title="Serviços" href="/servicos" footer />
          </ul>
        </div>
      </div>
    </footer>
  )
}
