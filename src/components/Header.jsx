import { useLocation } from 'react-router'
import { NavBar } from './NavBar'
import { TopBar } from './TopBar'
import { SlideInWhenVisible } from './SlideInWhenVisible'

export function Header({ backgroundImage }) {
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  // Função para determinar o conteúdo dinâmico com base na rota
  const renderHeaderContent = () => {
    switch (location.pathname) {
      case '/':
        return (
          <div className="text-center text-white">
            <SlideInWhenVisible direction="left">
              <h1 className="text-8xl text-[#06b3c2] font-bold mb-4">
                Bem-vindo
              </h1>
            </SlideInWhenVisible>
            <SlideInWhenVisible direction="right">
              <p className="text-5xl font-medium">Leall Energia</p>
            </SlideInWhenVisible>
          </div>
        )
      case '/about':
        return <h1 className="text-4xl text-white">Sobre Nós</h1>
      case '/contato':
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-white font-semibold">Contato</h1>
            <p className="text-[#06b3c2] font-semibold text-2xl">
              Tem um projeto para nós? Vamos conversar.
            </p>
          </div>
        )
      default:
        return <h1 className="text-4xl text-white">Página</h1>
    }
  }

  return (
    <>
      <header
        className={`relative flex flex-col overflow-x-hidden ${
          isHomePage
            ? 'min-h-screen bg-cover bg-center bg-no-repeat'
            : 'min-h-[350px] bg-cover'
        }`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
        }}
      >
        <TopBar />
        <NavBar />

        <div className="flex-1 flex items-center justify-center p-4">
          {renderHeaderContent()}
        </div>
      </header>
    </>
  )
}
