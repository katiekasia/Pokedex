import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css'

import About from './components/About.jsx'
import Pokemon from './components/Pokemon.jsx'
import Pokedex from './components/Pokedex.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <div className="page">
  <StrictMode>
    <BrowserRouter>
    <div className="app-wrapper">
    <Navbar />
    <main className="page-content">
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />        
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
      </Routes>
      </main>
    <Footer />
    </div>
    </BrowserRouter>
  </StrictMode>
  </div>
)
