import { MdOutlineEmail } from 'react-icons/md'
import logo from '../assets/logo.png'

import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from './NavLink'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Fechar o menu se clicar fora dele
  const closeSidebar = e => {
    if (e.target.id === 'sidebar-overlay') {
      setIsSidebarOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <a href="/">
                <img src={logo} className="size-40" alt="Logo" />
              </a>
            </div>

            {/* Menu para desktop */}
            <div className="hidden md:flex">
              <ul className="flex gap-4 items-center">
                <NavLink title="Inicio" href="/" />
                <div className="bg-gray-500 w-[1px] h-6"></div>
                <NavLink title="Contato" href="/contato" />
                <div className="bg-gray-500 w-[1px] h-6"></div>
                <NavLink title="Serviços" href="/servicos" />
              </ul>
            </div>

            {/* Botão do menu lateral para mobile */}
            <div
              className={`md:hidden flex items-center p-2 mr-2 ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#06b3c2] to-[#0e6bae]'
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
          </div>
        </div>
      </nav>

      {/* Overlay do menu lateral */}
      {isSidebarOpen && (
        <div
          id="sidebar-overlay"
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 md:hidden"
        />
      )}

      {/* Menu lateral para mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* Cabeçalho do menu lateral */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">NR 10</h2>
            <button
              onClick={toggleSidebar}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Links do menu */}
          <div className="space-y-4">
            <div className="py-2 border-b border-gray-200">
              <a
                href="/sobre"
                className="block text-gray-800 hover:text-blue-600"
              >
                Sobre Nós
              </a>
            </div>
            <div className="py-2 border-b border-gray-200">
              <a
                href="/clientes"
                className="block text-gray-800 hover:text-blue-600"
              >
                Clientes
              </a>
            </div>
            <div className="py-2 border-b border-gray-200">
              <a
                href="/servicos"
                className="block text-gray-800 hover:text-blue-600"
              >
                Serviços
              </a>
            </div>
            <div className="py-2 border-b border-gray-200">
              <a
                href="/orcamento"
                className="block text-gray-800 hover:text-blue-600"
              >
                Orçamento
              </a>
            </div>
            <div className="py-2 border-b border-gray-200">
              <a
                href="/contato"
                className="block text-gray-800 hover:text-blue-600"
              >
                Contato
              </a>
            </div>
            <div className="py-2 border-b border-gray-200">
              <a
                href="/trabalhe-conosco"
                className="block text-gray-800 hover:text-blue-600"
              >
                Trabalhe Conosco
              </a>
            </div>
            <div className="py-2 border-b border-gray-200">
              <a
                href="/blog"
                className="block text-gray-800 hover:text-blue-600"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Informações de contato no final do menu */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <MdOutlineEmail size={20} className="text-green-500" />
              <span>comercial@teclab.com.br</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaWhatsapp size={20} className="text-green-500" />
              <span>(31) 97501-4130</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
