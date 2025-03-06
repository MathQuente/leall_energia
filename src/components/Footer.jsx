import { MdOutlineEmail } from 'react-icons/md'
import logo from '../assets/logo.png'
import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from './NavLink'

export function Footer() {
  return (
    <div className="w-full h-80 bg-black flex justify-around items-center">
      <div>
        <img src={logo} className="size-40" alt="" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-white">Faça Contato</h1>
        <p className="text-white text-sm flex items-center gap-2">
          <MdOutlineEmail size={20} /> comercial@teclab.com.br
        </p>
        <p className="text-white text-sm flex items-center gap-2">
          <FaWhatsapp size={20} /> (85) 8430-0302
        </p>
      </div>
      <div>
        <h1 className="text-white">Navegação Rápida</h1>
        <ul className="flex flex-col">
          <a className="text-white" href="">
            Inicio
          </a>
          <a className="text-white" href="">
            Contato
          </a>
          <a className="text-white" href="">
            Serviço
          </a>
        </ul>
      </div>
    </div>
  )
}
