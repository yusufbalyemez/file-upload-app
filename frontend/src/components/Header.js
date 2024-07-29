import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Dosya Yükle
          </Link>
          <Link to="/gorseller" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Görseller
          </Link>
          <Link to="/galeri1" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Galeri 1
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Dosya Yükle
          </Link>
          <Link to="/gorseller" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Görseller
          </Link>
          <Link to="/galeri1" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Galeri 1
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;