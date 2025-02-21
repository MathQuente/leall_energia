import { NavBar } from './components/NavBar'
import { MdOutlineEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export function App() {
  return (
    <>
      <div>
        <div className="flex w-full gap-8 bg-black justify-end pr-20 mt-4">
          <p className="text-white text-sm flex items-center gap-2">
            <MdOutlineEmail className="size-5" /> comercial@teclab.com.br
          </p>
          <p className="text-white text-sm flex items-center gap-2">
            <FaWhatsapp className="size-5" /> (85) 8430-0302
          </p>
        </div>
        <NavBar />
      </div>
    </>
  )
}
