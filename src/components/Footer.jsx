import { MdEmail } from 'react-icons/md'
import logo from '../assets/logo.png'
import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from './NavLink'

export function Footer() {
  return (
    <footer
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(19,68,111,0.9) 80%, rgba(150,150,150,1) 60%), url('../src/assets/trabalhador.jpg')"
      }}
    >
      {/* Conteúdo do footer */}
      <div className="flex flex-col gap-10 md:h-[300px] md:flex-row md:justify-around md:items-center">
        {/* Coluna 1 - Logo e CNPJ */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="TecLab Logo" className="w-60 h-72" />
          {/* <p className="text-sm">Priorizando a Qualidade</p>
          <p className="text-sm mt-4">CNPJ: 41.766.131/0001-61</p> */}
        </div>

        {/* Coluna 2 - Informações de contato */}
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
          </div>
          <p className="text-center text-white text-md">
            R. Antônio Pereira do Nascimento, 160
            <br />
            Luzardo Viana. Maracanaú - CE.
          </p>
        </div>

        {/* Coluna 3 - Navegação Rápida */}
        <div className="flex flex-col items-center md:items-center select-none mb-14 md:mb-0">
          <h3 className="text-xl font-semibold text-white">Navegação Rápida</h3>
          <ul className="text-center">
            <NavLink title="Inicio" href="/" footer />

            <NavLink title="NR-10" href="/nr10" footer />

            <NavLink title="Contato" href="/contato" footer />

            <NavLink title="Serviços" href="/servicos" footer />
          </ul>
        </div>
      </div>
    </footer>
  )
}
