import { useEffect, useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

export function NavLink({ title, href, footer = false }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    if (!footer) {
      // Só adiciona scroll listener se não for footer
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [footer]) // Adiciona footer como dependência

  return (
    <li>
      <RouterNavLink
        to={href}
        className={({ isActive }) => {
          // Classes base comuns
          let baseClass = 'font-semibold text-lg relative'

          // Apenas adiciona o pseudo-elemento after se não for footer
          if (!footer) {
            baseClass += `
              after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full
              after:origin-center after:transform after:transition-transform
              after:duration-300 after:ease-out
            `
          }

          if (footer) {
            // Estilos específicos para footer
            baseClass += ' text-gray-100 hover:text-[#06abbb] transition-colors'
            if (isActive) {
              baseClass += ' !text-[#06abbb] font-bold'
            }
          } else if (isScrolled) {
            // Estilos para quando está scrollado (não footer)
            baseClass +=
              ' bg-gradient-to-r from-[#06b3c2] to-[#0e6bae] bg-clip-text text-transparent'
            baseClass += isActive
              ? ' after:bg-gradient-to-r after:from-[#06b3c2] after:to-[#0e6bae] after:scale-x-100'
              : ' after:bg-gradient-to-r after:from-[#06b3c2] after:to-[#0e6bae] after:scale-x-0 hover:after:scale-x-100'
          } else {
            // Estilos padrão (não footer, não scrollado)
            baseClass += ' text-white'
            baseClass += isActive
              ? ' after:bg-white after:scale-x-100'
              : ' after:bg-white after:scale-x-0 hover:after:scale-x-100'
          }

          return baseClass
        }}
      >
        {title}
      </RouterNavLink>
    </li>
  )
}
