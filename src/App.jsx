import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HashRouter>
      <header className="p-4 bg-gray-100 shadow-md flex justify-center gap-6 text-lg">
        <Link to="/">🏠 Home</Link>
        <Link to="/about">📘 About</Link>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
