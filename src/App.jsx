import './App.css'
import { HashRouter, Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Equipment from './pages/Equipment'
import Lessons from './pages/Lessons'
import Resources from './pages/Resources'
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/equipment" element={<Equipment/>} />
            <Route path="/lessons" element={<Lessons/>} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/about" element={<AboutMe/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App