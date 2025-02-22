import { NavLink as RouterNavLink } from 'react-router-dom'

export function NavLink({ title, href }) {
  return (
    <li>
      <RouterNavLink
        to={href}
        className={({ isActive }) =>
          `text-white font-bold relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-center after:transform after:bg-white after:transition-transform after:duration-300 after:ease-out 
          ${
            isActive
              ? 'after:scale-x-100'
              : 'after:scale-x-0 hover:after:scale-x-100'
          }`
        }
      >
        {title}
      </RouterNavLink>
    </li>
  )
}