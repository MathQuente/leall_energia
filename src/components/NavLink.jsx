import { useEffect, useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

export function NavLink({ title, href, footer = false, mobile = false }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (footer || mobile) return // Não aplica scroll effects no footer ou mobile

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [footer, mobile])

  return (
    <li>
      <RouterNavLink
        to={href}
        className={({ isActive }) => {
          let baseClass = 'text-xl font-medium relative'

          // Estilos específicos para footer
          if (footer) {
            return `
              ${baseClass}
              text-gray-100
              font-normal
              hover:text-transparent
              hover:bg-clip-text
              hover:bg-gradient-to-r
              hover:from-[#1196bb]
              hover:to-[#21256b]
              transition-colors
              ${
                isActive
                  ? '!text-transparent bg-clip-text bg-gradient-to-r from-[#1196bb] to-[#21256b] font-bold'
                  : ''
              }
            `
          }

          // Estilos para mobile
          if (mobile) {
            return `
              ${baseClass}
              text-black
              font-normal
              text-2xl
              ${
                isActive
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#1196bb] to-[#21256b] font-bold'
                  : 'after:bg-white after:scale-x-0 hover:after:scale-x-100'
              }
            `
          }

          // Estilos padrão para desktop
          return `
            ${baseClass}
            after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full
            after:origin-center after:transform after:transition-transform
            after:duration-300 after:ease-out
            ${
              isScrolled
                ? `
              bg-gradient-to-r from-[#1196bb] to-[#21256b] bg-clip-text text-transparent
              ${
                isActive
                  ? 'after:bg-gradient-to-r after:from-[#1196bb] after:to-[#21256b] after:scale-x-100'
                  : 'after:bg-gradient-to-r after:from-[#1196bb] after:to-[#21256b] after:scale-x-0 hover:after:scale-x-100'
              }
            `
                : `
              text-white
              ${
                isActive
                  ? 'after:bg-white after:scale-x-100'
                  : 'after:bg-white after:scale-x-0 hover:after:scale-x-100'
              }
            `
            }
          `
        }}
      >
        {title}
      </RouterNavLink>
    </li>
  )
}
