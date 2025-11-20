import './App.css'
import { HashRouter, Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import Equipment from './components/Equipment'
import Lessons from './components/Lessons'
import Resources from './components/Resources'
import AboutMe from './components/AboutMe'

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