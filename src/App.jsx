import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Majors from './pages/Majors'
import MajorDetail from './pages/MajorDetail'
import Careers from './pages/Careers'
import CareerDetail from './pages/CareerDetail'
import Activities from './pages/Activities'
import Resources from './pages/Resources'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="site-shell">
      <NavBar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/majors" element={<Majors />} />
          <Route path="/majors/:id" element={<MajorDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
