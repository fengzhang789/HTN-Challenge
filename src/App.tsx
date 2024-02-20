import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import EventsPage from './views/Events/EventsPage'
import EventDetailsPage from './views/Events/EventDetailsPage'

function App() {
  
  return (
    <>
      {/* MAIN CONTENT OF THE PAGE DYNAMICALLY CHANGES WITH PAGE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
        <Route path="*" element={<div>404 Not Found :(</div>} />
      </Routes>
    </>
  )
}

export default App
