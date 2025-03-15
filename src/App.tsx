import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Bone as Drone } from "lucide-react";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage.tsx";

function App() {
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
                Kontakt
              </Link>
            </div>
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
