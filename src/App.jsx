import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Proposal, Dashboard, Tools, Communication } from './pages';
import { Navbar, Sidebar, Footer } from './components/Common';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-qa-light flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proposal" element={<Proposal />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/communication" element={<Communication />} />
              <Route path="/tools" element={<Tools />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;