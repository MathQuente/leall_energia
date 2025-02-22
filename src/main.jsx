import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Home } from './Home.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Contacts } from './pages/Contacts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contato" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
