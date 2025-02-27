import React
  from 'react'
import Home 
  from './pages/Home'
import Sobre
  from './pages/Sobre'
import Contato
  from './pages/Contato'

import {BrowserRouter, Route, Routes} 
  from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sobre' element={<Sobre />}></Route>
      <Route path='/contato' element={<Contato />}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
