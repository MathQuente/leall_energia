// Layout.jsx
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingButton } from './FloatingButton'

export function Layout() {
  return (
    <>
      <Header backgroundImage="../src/assets/trabalhador.jpg" />
      <main>
        <Outlet />
        <FloatingButton />
      </main>
      <Footer />
    </>
  )
}
