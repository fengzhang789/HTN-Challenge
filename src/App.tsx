import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Events from './views/Events/Events'

function App() {
  
  return (
    <>
      {/* MAIN CONTENT OF THE PAGE DYNAMICALLY CHANGES WITH PAGE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<div>404 Not Found :(</div>} />
      </Routes>
    </>
  )
}

export default App
