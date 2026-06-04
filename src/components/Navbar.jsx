import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import ikon hamburger dan silang

const Navbar = () => {
  // State untuk mengontrol menu HP terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.a 
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-bold text-cyan-400 tracking-tighter hover:text-white transition-colors z-50"
        >
          ASN.
        </motion.a>

        {/* Tampilan Desktop & Tablet (Disembunyikan di layar HP) */}
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

        {/* Tombol Hamburger Khusus Layar HP (Disembunyikan di Laptop) */}
        <button 
          className="md:hidden text-slate-300 hover:text-cyan-400 text-2xl z-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Dropdown Khusus HP dengan Animasi Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col px-6 py-6 space-y-4 text-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Otomatis nutup menu pas link diklik
                    className="block text-slate-300 hover:text-cyan-400 font-medium py-2 text-lg transition-colors"
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