import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="events" element={<div>About</div>} />
        <Route path="*" element={<div>404 Not Found :(</div>} />
      </Routes>
    </>
  )
}

export default App
