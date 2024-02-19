import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Navbar from './components/Navbar'
import Events from './views/Events'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Navbar />

      {/* MAIN CONTENT OF THE PAGE DYNAMICALLY CHANGES WITH PAGE */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<div>404 Not Found :(</div>} />
        </Routes>
      </main>
      
      <Footer />
    </>
  )
}

export default App
