import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Bone as Drone, Menu, X } from "lucide-react";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage.tsx";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className='min-h-screen bg-industrial-100'>
      {/* Navigation */}
      <nav className='bg-industrial-950 text-white fixed w-full z-10 border-b-2 border-energy-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16 items-center'>
            <div className='flex items-center'>
              <Link to='/' className='flex items-center'>
                <Drone className='h-8 w-8 text-energy-500' />
                <span className='ml-2 text-xl font-bold text-white'>
                  UAS | Valdres
                </span>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className='hidden md:flex space-x-1'>
              <Link
                to='/'
                className='px-4 py-2 text-white hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200'>
                Hjem
              </Link>
              <Link
                to='/services'
                className='px-4 py-2 text-white hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200'>
                Tjenester
              </Link>
              <Link
                to='/gallery'
                className='px-4 py-2 text-white hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200'>
                Galleri
              </Link>
              <Link
                to='/contact'
                className='px-4 py-2 text-white hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200'>
                Kontakt Oss
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button
                onClick={toggleMenu}
                className='p-2 rounded-md hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200'>
                {mobileMenuOpen ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-64 opacity-100 border-b-2 border-energy-500"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}>
          <div className='px-4 pt-2 pb-4 space-y-1 bg-industrial-950'>
            <Link
              to='/'
              className='block px-4 py-3 text-white hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200 border-2 border-industrial-800'
              onClick={closeMenu}>
              Hjem
            </Link>
            <Link
              to='/services'
              className='block px-4 py-3 text-white hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200 border-2 border-industrial-800'
              onClick={closeMenu}>
              Tjenester
            </Link>
            <Link
              to='/gallery'
              className='block px-4 py-3 text-white hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200 border-2 border-industrial-800'
              onClick={closeMenu}>
              Galleri
            </Link>
            <Link
              to='/contact'
              className='block px-4 py-3 text-white hover:bg-industrial-800 hover:text-energy-500 transition-colors duration-200 border-2 border-industrial-800'
              onClick={closeMenu}>
              Kontakt Oss
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className='bg-industrial-950 text-white py-12 border-t-2 border-energy-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center'>
              <Drone className='h-8 w-8 text-energy-500' />
              <span className='ml-2 text-xl font-bold'>UAS | Valdres</span>
            </div>
            <div className='mt-4 md:mt-0'>
              <p className='text-industrial-300'>
                &copy; 2025 UAS Valdres. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
