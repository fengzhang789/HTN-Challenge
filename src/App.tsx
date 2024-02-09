import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<div>About</div>} />
        <Route path="*" element={<div>404 Not Found :(</div>} />
      </Routes>
    </>
  )
}

export default App
