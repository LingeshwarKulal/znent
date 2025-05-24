import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import EquityTracker from './pages/EquityTracker'
import DealVault from './pages/DealVault'
import IntroducerLog from './pages/IntroducerLog'
import TroupDashboard from './pages/TroupDashboard'
import ImpactBoard from './pages/ImpactBoard'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/equity" element={<EquityTracker />} />
          <Route path="/deals" element={<DealVault />} />
          <Route path="/introducers" element={<IntroducerLog />} />
          <Route path="/troup" element={<TroupDashboard />} />
          <Route path="/impact" element={<ImpactBoard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
