import React from 'react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';
import fotoProfil from '../assets/makan.jpeg'; // Sesuaikan namanya dengan file foto lu

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Teks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-cyan-400 font-medium">Halo, selamat datang di portofolio saya.</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {personalInfo.name}
            </span>
          </h1>
          <h2 className="text-2xl text-slate-400 font-medium">{personalInfo.role}</h2>
          <p className="text-slate-400 leading-relaxed max-w-lg">
            {personalInfo.tagline}
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
              Lihat Project
            </button>
            <button className="px-6 py-3 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-lg transition-colors">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Kolom Kanan: Foto/Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
           {/* Ini tempat placeholder foto lu nanti, sementara pakai kotak gradient */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 border-4 border-slate-800 shadow-2xl overflow-hidden relative">
             <img 
               src={fotoProfil} 
               alt="Akmal Profile" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
             />
             {/* Overlay tipis biar fotonya makin nyatu sama tema dark mode */}
             <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;