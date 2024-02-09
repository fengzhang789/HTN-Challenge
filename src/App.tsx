import './App.css'
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

      <div className='w-full h-full bg-slate-500'>

      </div>
    </>
  )
}

export default App
