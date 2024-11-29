import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-sm shadow-lg px-4 border-b border-primary/20 sticky top-0 z-50">
      {/* Logo Section */}
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Togel Logo" 
            className="h-10 w-10 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/40x40?text=LT';
            }}
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LAPAKTOTO
            </span>
            <span className="text-xs opacity-70">Prediksi & Jadwal</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button 
          className="btn btn-ghost btn-circle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
          <li><a href="https://japin.xyz/promosi" rel='noreferrer' target='_blank' className="hover:text-primary transition-colors">Promosi</a></li>
          <li><a href="https://japin.xyz/menang" rel='noreferrer' target='_blank' className="hover:text-primary transition-colors">Bukti JP</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end gap-2">
        <a href="https://japin.xyz/gass" rel='noreferrer' target='_blank' className="btn btn-ghost btn-sm hover:text-primary transition-colors">Login</a>
        <a href="https://japin.xyz/gass" rel='noreferrer' target='_blank' className="btn btn-primary btn-sm hover:btn-secondary transition-all duration-300">Daftar</a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-base-100 border-b border-primary/20 shadow-lg">
          <ul className="menu menu-vertical px-4 py-2">
            <li><a href="/home" className="hover:text-primary py-2">Home</a></li>
            <li><a href="https://japin.xyz/pola" rel='noreferrer' target='_blank' className="hover:text-primary py-2">Slot Gacor</a></li>
            <li><a href="https://japin.xyz/promosi" rel='noreferrer' target='_blank' className="hover:text-primary py-2">Promosi</a></li>
            <li><a href="https://japin.xyz/menang" rel='noreferrer' target='_blank' className="hover:text-primary py-2">Bukti JP</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
