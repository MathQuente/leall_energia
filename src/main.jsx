import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { App } from './App.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Contacts } from './pages/Contacts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contato" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
