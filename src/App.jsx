import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import PlanesInternacionales from './views/PlanesInternacionales/PlanesInternacionales'
import PlanesView from './views/Planes/PlanesView'
import CompatibilidadView from './views/Compatibilidad/CompatibilidadView'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes-internacionales" element={<PlanesInternacionales />} />
        <Route path="/planes" element={<PlanesView />} />
        <Route path="/compatibilidad" element={<CompatibilidadView />} />
      </Routes>
    </Router>
  )
}

export default App
