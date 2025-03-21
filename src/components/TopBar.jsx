import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export function TopBar() {
  return (
    <div className="w-full md:flex items-center justify-end md:px-32 lg:px-36 xl:px-44 2xl:px-50 gap-4 pt-2 hidden">
      <div className="flex items-center gap-2">
        <MdOutlineEmail className="text-white size-5" />
        <p className="text-white text-sm">testes@leallenergia.com</p>
      </div>
      <div className="flex items-center gap-2">
        <FaWhatsapp className="text-white size-5" />
        <p className="text-white text-sm">(85) 98430-0302</p>
      </div>
    </div>
  )
}
