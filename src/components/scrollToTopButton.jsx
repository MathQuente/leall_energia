import { useState, useEffect } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Verifica a posição do scroll para definir a visibilidade do botão
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Função que realiza o scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="fixed z-20 bottom-32 right-8 md:bottom-9 md:right-28">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-400/60 text-white shadow-lg hover:bg-gray-500 transition duration-300"
        >
          <FaArrowUpLong className="text-white" />
        </button>
      )}
    </div>
  )
}
