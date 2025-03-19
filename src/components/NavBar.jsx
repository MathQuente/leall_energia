import { MdOutlineEmail } from 'react-icons/md'
import logo from '../assets/logo.png'

import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from './NavLink'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLocation } from 'react-router'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      if (scrolled !== isScrolled) setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  useEffect(() => {
    setIsSidebarOpen(false)
  }, [location])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = e => {
    if (e.target.id === 'sidebar-overlay') {
      setIsSidebarOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed w-full z-40  h-40 flex flex-row items-center justify-between md:justify-evenly select-none ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div>
          <a href="/">
            <img
              src={logo}
              className="w-52 h-64 transition-all duration-75"
              alt="Logo"
            />
          </a>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-4 items-center">
            <NavLink title="Empresa" href="/" />
            <div className="bg-gray-500 w-[1px] h-6"></div>
            <NavLink title="NR-10" href="/nr10" />
            <div className="bg-gray-500 w-[1px] h-6"></div>
            <NavLink title="Serviços" href="/servicos" />
            <div className="bg-gray-500 w-[1px] h-6"></div>
            <NavLink title="Contato" href="/contato" />
          </ul>
        </div>

        <div
          className={`md:hidden flex items-center p-2 mr-4 ${
            isScrolled
              ? 'bg-gradient-to-b from-[#1196bb] to-[#21256b]'
              : 'bg-gray-200/30'
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="text-white text-4xl font-bold hover:text-gray-900 focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          id="sidebar-overlay"
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 md:hidden"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-end items-center mb-6">
            <button
              onClick={toggleSidebar}
              className="text-white bg-gradient-to-b from-[#1196bb] to-[#21256b] p-1 hover:text-gray-900 focus:outline-none"
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <ul className="py-2 border-b border-gray-200">
              <NavLink title="Empresa" mobile href="/" />
            </ul>
            <ul className="py-2 border-b border-gray-200">
              <NavLink title="NR-10" mobile href="/nr10" />
            </ul>
            <ul className="py-2 border-b border-gray-200">
              <NavLink title="Serviços" mobile href="/servicos" />
            </ul>
            <ul className="py-2 border-b border-gray-200">
              <NavLink title="Contato" mobile href="/contato" />
            </ul>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <MdOutlineEmail size={20} className="text-green-500" />
              <span>testes@leallenergia.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaWhatsapp size={20} className="text-green-500" />
              <span>(85) 98430-0302</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
