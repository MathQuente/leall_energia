import { useState, useEffect, useRef } from 'react'

export function SlideInWhenVisible({ children, direction = 'left' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // se quiser que anime só uma vez e não repita, descomente a linha abaixo:
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1 // 0.1 = 10% do elemento visível para disparar
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // Classes de Tailwind de "antes" e "depois" da animação
  let hiddenClass = 'opacity-0'
  let visibleClass = 'opacity-100'

  // Ajusta a direção do slide
  if (direction === 'left') {
    hiddenClass += ' -translate-x-160'
    visibleClass += ' translate-x-0'
  } else if (direction === 'right') {
    hiddenClass += ' translate-x-160'
    visibleClass += ' translate-x-0'
  } else if (direction === 'up') {
    hiddenClass += ' translate-y-10'
    visibleClass += ' translate-y-0'
  } else if (direction === 'down') {
    hiddenClass += ' -translate-y-10'
    visibleClass += ' translate-y-0'
  }

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-[1.5s] ease-in-out
        transform
        ${isVisible ? visibleClass : hiddenClass}
      `}
    >
      {children}
    </div>
  )
}
