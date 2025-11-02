'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl hover:text-cyan-300 transition-colors drop-shadow-lg" style={{fontFamily: 'Silkscreen, monospace'}}>
          Beyond Binary
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-white/80 drop-shadow-lg">
          <Link href="/about" className="hover:text-white transition-colors text-lg font-bold" style={{fontFamily: 'Megrim, sans-serif'}}>About</Link>
          <Link href="/records" className="hover:text-white transition-colors text-lg font-bold" style={{fontFamily: 'Megrim, sans-serif'}}>Records</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-cyan-300 transition-colors p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full right-6 mt-2 bg-black/90 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="p-4 space-y-3">
          <Link 
            href="/about" 
            className="block text-white/80 hover:text-white transition-colors text-lg font-bold" 
            style={{fontFamily: 'Megrim, sans-serif'}}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/records" 
            className="block text-white/80 hover:text-white transition-colors text-lg font-bold" 
            style={{fontFamily: 'Megrim, sans-serif'}}
            onClick={() => setIsMenuOpen(false)}
          >
            Records
          </Link>
        </div>
      </div>
    </nav>
  );
}
