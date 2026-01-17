import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Ask from './pages/Ask'
import Fit from './pages/Fit'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/fit" element={<Fit />} />
      </Routes>
    </BrowserRouter>
  )
}
