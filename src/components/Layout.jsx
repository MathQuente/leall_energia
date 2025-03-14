// Layout.jsx
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingButton } from './FloatingButton'
import { ScrollToTopButton } from './scrollToTopButton'
import { ScrollToTop } from './returnToTop'

export function Layout() {
  return (
    <>
      <Header backgroundImage="../src/assets/trabalhador.jpg" />
      <main>
        <ScrollToTop />
        <Outlet />
        <ScrollToTopButton />
        <FloatingButton />
      </main>
      <Footer />
    </>
  )
}
