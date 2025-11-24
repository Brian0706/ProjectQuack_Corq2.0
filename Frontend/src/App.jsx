import { useState } from 'react'
import Home from './pages/home'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RequestTester from './pages/RequestTester.jsx';

function App() {
  return (
    <Router>
      <div>
        <RequestTester />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App