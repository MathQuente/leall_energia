import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingButton } from './FloatingButton'
import { ScrollToTopButton } from './scrollToTopButton'

export function Layout() {
  return (
    <>
      <Header backgroundImage="../src/assets/background.jpg" />
      <main>
        <Outlet />
        <ScrollToTopButton />
        <FloatingButton />
      </main>
      <Footer />
    </>
  )
}
