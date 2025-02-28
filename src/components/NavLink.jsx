import { useEffect, useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

export function NavLink({ title, href }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <li>
      <RouterNavLink
        to={href}
        className={({ isActive }) => {
          // Classes base com posicionamento relativo
          let baseClass = `
            font-semibold text-lg relative
            after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full
            after:origin-center after:transform after:transition-transform
            after:duration-300 after:ease-out
          `

          if (isScrolled) {
            // Quando scrollado
            baseClass +=
              ' bg-gradient-to-r from-[#06b3c2] to-[#0e6bae] bg-clip-text text-transparent'

            if (isActive) {
              baseClass +=
                ' after:bg-gradient-to-r after:from-[#06b3c2] after:to-[#0e6bae] after:scale-x-100' // Cor mais visível
            } else {
              baseClass +=
                ' after:bg-gradient-to-r after:from-[#06b3c2] after:to-[#0e6bae] after:scale-x-0 hover:after:scale-x-100'
            }
          } else {
            // Quando não scrollado
            baseClass += ' text-white'

            if (isActive) {
              baseClass += ' after:bg-white after:scale-x-100' // Mesma cor para consistência
            } else {
              baseClass +=
                ' after:bg-white after:scale-x-0 hover:after:scale-x-100'
            }
          }

          return baseClass
        }}
      >
        {title}
      </RouterNavLink>
    </li>
  )
}
