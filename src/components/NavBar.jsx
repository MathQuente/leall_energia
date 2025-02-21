import logo from '../assets/logo.png'

export function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-black">
        <div className="flex w-full justify-evenly">
          <div>
            <img src={logo} className="size-40" alt="" />
          </div>
          <ul className="flex gap-4 items-center">
            <li>
              <a href="" className="text-white font-bold">
                Inicio
              </a>
            </li>
            <li>
              <a href="" className="text-white font-bold un">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="" className="text-white font-bold">
                Clientes
              </a>
            </li>
            <li>
              <a href="" className="text-white font-bold">
                Serviços
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
