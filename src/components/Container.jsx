export function Container({ children, className = '' }) {
  return (
    <div
      className={`max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-10 md:px-10 ${className}`}
    >
      {children}
    </div>
  )
}
