import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<div>About</div>} />
        <Route path="*" element={<div>404 Not Found :(</div>} />
      </Routes>
    </>
  )
}

export default App
