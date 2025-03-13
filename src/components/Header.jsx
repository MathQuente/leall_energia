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
            <SlideInWhenVisible direction="left-header">
              <h1 className="text-4xl md:text-8xl text-white">Bem-vindo</h1>
            </SlideInWhenVisible>
            <SlideInWhenVisible direction="right-header">
              <p className="text-6xl leading-tight md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#1196bb] to-[#21256b] font-bold mb-4">
                Leall Energia
              </p>
            </SlideInWhenVisible>
          </div>
        )
      case '/about':
        return <h1 className="text-6xl text-white font-semibold">Sobre Nós</h1>
      case '/contato':
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-white font-semibold">Contato</h1>
            <p className="text-white font-semibold text-2xl">
              Tem um projeto para nós? Vamos conversar.
            </p>
          </div>
        )
      case '/nr10':
        return <h1 className="text-6xl text-white font-semibold">NR-10</h1>
      case '/servicos':
        return <h1 className="text-6xl text-white font-semibold">Serviços</h1>
      default:
        return <h1 className="text-6xl text-white font-semibold">Página</h1>
    }
  }

  return (
    <>
      <header
        className={`relative flex flex-col overflow-x-hidden ${
          isHomePage
            ? 'min-h-[750px] md:min-h-screen bg-cover bg-center bg-no-repeat'
            : 'min-h-[470px] bg-cover'
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
