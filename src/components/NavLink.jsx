export function NavLink({ title, href }) {
  return (
    <li>
      <a
        href={href}
        className="text-white font-bold relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-center after:transform after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
      >
        {title}
      </a>
    </li>
  )
}
