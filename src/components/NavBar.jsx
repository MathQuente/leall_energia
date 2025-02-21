import { MdOutlineEmail } from 'react-icons/md'
import logo from '../assets/logo.png'
import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from './NavLink'

export function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col bg-black">
        <div className="flex w-full gap-8 justify-end pr-20 mt-4">
          <p className="text-white text-sm flex items-center gap-2">
            <MdOutlineEmail className="size-5" /> comercial@teclab.com.br
          </p>
          <p className="text-white text-sm flex items-center gap-2">
            <FaWhatsapp className="size-5" /> (85) 8430-0302
          </p>
        </div>
        <div className="flex w-full justify-evenly">
          <div>
            <img src={logo} className="size-40" alt="" />
          </div>
          <ul className="flex gap-4 items-center relative">
            <NavLink title="Inicio" href="/" />
            <NavLink title="Contato" href="/contato" />
            <NavLink title="Serviços" href="/servicos" />
          </ul>
        </div>
      </div>
    </>
  )
}
