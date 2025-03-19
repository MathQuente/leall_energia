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
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px' // Adjusts detection area
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // Configuração responsiva
  const getTransformClasses = () => {
    let baseHidden = 'opacity-0'
    let baseVisible = 'opacity-100'

    switch (direction) {
      case 'left':
        return {
          hidden: `${baseHidden} -translate-x-20 md:-translate-x-48 lg:-translate-x-64`,
          visible: `${baseVisible} translate-x-0`
        }
      case 'right':
        return {
          hidden: `${baseHidden} translate-x-20 md:translate-x-48 lg:translate-x-64`,
          visible: `${baseVisible} translate-x-0`
        }
      case 'left-header':
      return {
        hidden: `${baseHidden} -translate-x-20 md:-translate-x-32 lg:-translate-x-40`,
        visible: `${baseVisible} translate-x-0`
      }
      case 'right-header':
      return {
        hidden: `hidden: ${baseHidden} translate-x-20 md:translate-x-32 lg:translate-x-40`,
        visible: `${baseVisible} translate-x-0`
      }
      default:
        return {
          hidden: baseHidden,
          visible: baseVisible
        }
    }
  }

  const { hidden, visible } = getTransformClasses()

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-1000 ease-out
        ${isVisible ? visible : hidden}
      `}
    >
      {children}
    </div>
  )
}
