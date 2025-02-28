import { MdOutlineEmail } from 'react-icons/md'
import logo from '../assets/logo.png'

import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from './NavLink'
import { useEffect, useState } from 'react'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`fixed flex justify-evenly w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div>
          <a href="/">
            <img src={logo} className="size-40" alt="" />
          </a>
        </div>
        <ul className="flex gap-4 items-center relative">
          <NavLink title="Inicio" href="/" />
          <div className="bg-gray-500 w-[1px] h-6"></div>
          <NavLink title="Contato" href="/contato" />
          <div className="bg-gray-500 w-[1px] h-6"></div>
          <NavLink title="Serviços" href="/servicos" />
        </ul>
      </nav>
    </>
  )
}
