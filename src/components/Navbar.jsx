import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex justify-between items-center relative">
        
        <motion.a 
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 text-xl font-bold tracking-tighter z-50 group"
        >
          <svg className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            {/* Hexagon Outline */}
            <polygon points="50,12 88,32 88,68 50,88 12,68 12,32" stroke="url(#logo-grad)" strokeWidth="5" fill="none" />
            {/* Inner Stylized ASN Monogram */}
            <path d="M35,65 L50,32 L65,65 M42,52 L58,52" stroke="url(#logo-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="32" r="5.5" fill="#34d399" />
          </svg>
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-400 transition-all duration-300">ASN.</span>
        </motion.a>

        {/* Tampilan Desktop */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          {navLinks.map((link, index) => (
            <li key={index}>
              <motion.a 
                href={link.href}
                whileHover={{ scale: 1.1, color: '#22d3ee' }}
                whileTap={{ scale: 0.9 }}
                className="inline-block transition-colors"
              >
                {link.name}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger HP */}
        <button 
          className="md:hidden text-slate-300 hover:text-cyan-400 text-2xl z-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Dropdown HP (Diperbaiki jadi melayang / absolute) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            // Tambahan absolute top-full biar jatuhnya pas di bawah navbar tanpa dorong konten
            className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)} 
                    // Desain tombolnya dibikin lebih rapi & ada efek klik
                    className="block w-full text-center text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 active:bg-cyan-900/30 rounded-lg py-3 font-medium transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;