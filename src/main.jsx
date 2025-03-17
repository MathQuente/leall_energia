import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Home } from '../src/pages/Home.jsx'
import { Contacts } from './pages/Contacts.jsx'
import { Layout } from './components/Layout.jsx'
import { Services } from './pages/Services.jsx'
import { NR10 } from './pages/NR10.jsx'
import { ScrollToTop } from './components/returnToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contato" element={<Contacts />} />
          <Route path="Servicos" element={<Services />} />
          <Route path="NR10" element={<NR10 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
