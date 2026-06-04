import React from 'react';
import { personalInfo } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Mari Berkolaborasi!</h3>
          <p className="text-slate-400 text-sm">Terbuka untuk diskusi project, riset, atau peluang kerja.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 text-3xl transition-transform hover:scale-110">
            <FaGithub />
          </a>
          <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 text-3xl transition-transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.contact.email}`} className="text-slate-400 hover:text-cyan-400 text-3xl transition-transform hover:scale-110">
            <FaEnvelope />
          </a>
        </div>

      </div>
      
      <div className="py-6 text-center text-slate-600 text-xs border-t border-slate-800/50 bg-slate-950">
        © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;