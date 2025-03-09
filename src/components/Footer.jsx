import { MdOutlineEmail } from 'react-icons/md'
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
      <div className="flex flex-col gap-10 md:flex-row md:justify-around md:items-center">
        {/* Coluna 1 - Logo e CNPJ */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="TecLab Logo" className="size-60" />
          {/* <p className="text-sm">Priorizando a Qualidade</p>
          <p className="text-sm mt-4">CNPJ: 41.766.131/0001-61</p> */}
        </div>

        {/* Coluna 2 - Informações de contato */}
        <div className="flex flex-col items-center justify-center md:items-center select-none">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Faça contato
          </h3>
          <div className="flex items-center mb-2">
            <MdOutlineEmail />
            <p className="hover:underline text-white">
              comercial@teclab.com.br
            </p>
          </div>
          <div className="flex items-center mb-2">
            <FaWhatsapp />
            <p className="hover:underline text-white">(31) 9 7501 - 4130</p>
          </div>
          <p className="text-center text-white">
            R. Antônio Pereira do Nascimento, 160
            <br />
            Luzardo Viana. Maracanaú - CE.
          </p>
        </div>

        {/* Coluna 3 - Navegação Rápida */}
        <div className="flex flex-col items-center md:items-center select-none mb-10">
          <h3 className="text-xl font-semibold text-white">Navegação Rápida</h3>
          <ul className="text-center">
            <NavLink title="Inicio" href="/" footer />

            <NavLink title="Contato" href="/contato" footer />

            <NavLink title="Serviços" href="/servicos" footer />
          </ul>
        </div>
      </div>
    </footer>
  )
}
