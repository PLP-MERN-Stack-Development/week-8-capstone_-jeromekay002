import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          RealEase
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Register</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-gray-700">About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block text-gray-700">Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700">Contact</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-blue-600">Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="block bg-blue-600 text-white text-center py-2 rounded">Register</Link>
        </div>
      )}
    </header>
  );
}
