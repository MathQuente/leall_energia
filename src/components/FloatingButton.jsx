import { useState } from 'react'
import { FaTimes, FaWhatsapp } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

export function FloatingButton({
  phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER,
  message = 'Olá, gostaria de mais informações!',
  countryCode = '55',
  popupMessage = 'Entre em contato para tirar as suas dúvidas e fazer uma cotação.'
}) {
  const [isOpen, setIsOpen] = useState(false)
  if (!phoneNumber) {
    console.error('Número de WhatsApp não fornecido')
    return null
  }

  const formatPhoneForWhatsApp = phone => {
    let cleaned = phone.replace(/\D/g, '')

    if (!cleaned.startsWith('55') && countryCode) {
      cleaned = countryCode + cleaned
    }

    return cleaned
  }

  const formattedNumber = formatPhoneForWhatsApp(phoneNumber)

  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(
    message
  )}`

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCloseClick = e => {
    e.stopPropagation()
    setIsOpen(false)
  }

  const handleOpenWhatsApp = e => {
    e.stopPropagation()
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-10 right-5 md:bottom-8 md:right-8 z-40 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-[#f7fdf9] rounded-3xl shadow-lg overflow-hidden w-64 md:w-[400px] h-[272px] relative z-50">
          <div className="bg-[#25d366] py-4 px-6 flex justify-between items-center">
            <div className="flex items-center gap-1">
              <FaWhatsapp className="text-white size-8" />
              <span className="text-white text-lg font-medium">WhatsApp</span>
            </div>
            <button
              onClick={handleCloseClick}
              className="text-white bg-black/50 hover:bg-black/80 p-2 rounded-full cursor-pointer"
            >
              <FaTimes size={14} />
            </button>
          </div>

          <div className="p-4">
            <div className="bg-white p-4 rounded-2xl shadow-md text-gray-700 text-md">
              {popupMessage}
            </div>
          </div>

          <div className="p-4 pt-0 flex justify-center">
            <button
              onClick={handleOpenWhatsApp}
              className="bg-[#25d366] text-white py-3 px-6 rounded-full font-medium flex items-center justify-between shadow-md w-full md:w-auto md:min-w-[200px] hover:brightness-125 cursor-pointer"
            >
              <span className="text-base">Abrir no WhatsApp</span>
              <div className="bg-[#1eb959] rounded-full p-1 ml-2 flex items-center justify-center">
                <IoIosArrowForward className="text-white" size={18} />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleButtonClick}
          className="p-4 bg-[#25d366] text-white rounded-full shadow-lg hover:bg-[#25d322] transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 flex items-center justify-center relative cursor-pointer"
          aria-label="Botão de ação flutuante"
        >
          <div className="absolute z-10 top-2 left-2 size-12 rounded-full bg-[#25d366] animate-ping"></div>
          <div className="relative z-20">
            <FaWhatsapp size={32} />
          </div>
        </button>
      )}
    </div>
  )
}
