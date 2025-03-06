import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export function TopBar() {
  return (
    <div className="w-full flex items-center justify-end px-50 gap-4 pt-2">
      <div className="flex items-center gap-2">
        <MdOutlineEmail className="text-white size-5" />
        <p className="text-white text-sm">comercial@teclab.com.br</p>
      </div>
      <div className="flex items-center gap-2">
        <FaWhatsapp className="text-white size-5" />
        <p className="text-white text-sm">(85) 8430-0302</p>
      </div>
    </div>
  )
}
