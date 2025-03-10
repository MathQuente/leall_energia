import { FaWhatsapp } from 'react-icons/fa'

export function FloatingButton({
  phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER,
  message = 'Olá, gostaria de mais informações!',
  countryCode = '55'
}) {
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

  return (
    <button
      className="fixed bottom-8 right-8 z-40 p-4 bg-[#25d366] text-white rounded-full shadow-lg hover:bg-[#25d322] transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 flex items-center justify-center"
      aria-label="Botão de ação flutuante"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={32} />
      </a>
    </button>
  )
}
