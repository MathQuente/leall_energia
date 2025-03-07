import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Home } from './Home.jsx'
import { Contacts } from './pages/Contacts.jsx'
import { Layout } from './components/Layout.jsx'
import { Services } from './pages/Services.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contato" element={<Contacts />} />
          <Route path="Servicos" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
