import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingButton } from './FloatingButton'
import { ScrollToTopButton } from './scrollToTopButton'
import background from '../assets/background.jpg'

export function Layout() {
  return (
    <>
      <Header backgroundImage={background} />
      <main>
        <Outlet />
        <ScrollToTopButton />
        <FloatingButton />
      </main>
      <Footer />
    </>
  )
}
