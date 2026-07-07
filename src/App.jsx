import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import PlanesInternacionales from './views/PlanesInternacionales/PlanesInternacionales'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes-internacionales" element={<PlanesInternacionales />} />
      </Routes>
    </Router>
  )
}

export default App
