import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Ask from './pages/Ask'
import Fit from './pages/Fit'
import Experiences from './pages/Experiences'
import Strengths from './pages/Strengths'
import FitEvaluation from './pages/FitEvaluation'
import Footer from './components/Footer'

// Use Vite's BASE_URL for GitHub Pages deployment
const basename = import.meta.env.BASE_URL

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/fit" element={<Fit />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:id" element={<Experiences />} />
        <Route path="/strengths" element={<Strengths />} />
        <Route path="/fit-evaluation" element={<FitEvaluation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
