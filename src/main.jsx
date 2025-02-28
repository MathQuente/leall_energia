import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Home } from './Home.jsx'
import { Contacts } from './pages/Contacts.jsx'
import { Layout } from './components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contato" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
