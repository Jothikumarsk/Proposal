// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiFileText, FiBarChart2, FiMessageSquare, FiTool } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-qa-dark text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">QA Transformation</h1>
          <span className="px-3 py-1 bg-qa-primary rounded-full text-sm">
            v2.0
          </span>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center space-x-2 hover:text-blue-300">
            <FiHome /> <span>Home</span>
          </Link>
          <Link to="/proposal" className="flex items-center space-x-2 hover:text-blue-300">
            <FiFileText /> <span>Proposal</span>
          </Link>
          <Link to="/dashboard" className="flex items-center space-x-2 hover:text-blue-300">
            <FiBarChart2 /> <span>Dashboard</span>
          </Link>
          <Link to="/communication" className="flex items-center space-x-2 hover:text-blue-300">
            <FiMessageSquare /> <span>Communication</span>
          </Link>
          <Link to="/tools" className="flex items-center space-x-2 hover:text-blue-300">
            <FiTool /> <span>Tools</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;