import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Home } from './Home.jsx'
import { Contacts } from './pages/Contacts.jsx'
<<<<<<< HEAD
import { Services } from './pages/Services.jsx'
=======
import { Layout } from './components/Layout.jsx'
>>>>>>> 1b8c6ed3d35b0c98bb63dd17e7964af48dce25d7

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/Contato" element={<Contacts />} />
        <Route path="/Servicos" element={<Services />} />
=======
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contato" element={<Contacts />} />
        </Route>
>>>>>>> 1b8c6ed3d35b0c98bb63dd17e7964af48dce25d7
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
