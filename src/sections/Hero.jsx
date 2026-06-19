import React from 'react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';
import fotoProfil from '../assets/makan.jpeg'; // Pastikan nama file foto lu benar

const Hero = () => {
  // Variabel untuk mengatur animasi berurutan (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jarak waktu muncul antar elemen
        delayChildren: 0.3,   // Jeda sebelum animasi pertama mulai
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Teks dengan Animasi Berurutan */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.p variants={itemVariants} className="text-cyan-400 font-medium">
            Halo, selamat datang di portofolio saya.
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {personalInfo.name}
            </span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl text-slate-400 font-medium">
            {personalInfo.role}
          </motion.h2>
          
          {/* Teks Deskripsi yang Sudah Di-Update */}
          <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed max-w-lg">
            Fokus mendalami pengembangan aplikasi Web & Mobile, serta antusias mengeksplorasi keamanan data digital untuk menciptakan solusi yang inovatif.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
              Lihat Project
            </a>
            <a 
              href="/CV_Akmal_Shaum.pdf" 
              download="CV_Akmal_Shaum_Nadzirin_baru.pdf"
              className="px-6 py-3 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Foto dengan Animasi Zoom & Spring */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 60 }}
          className="relative flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-slate-800 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden relative group bg-slate-800">
             <img 
               src={fotoProfil} 
               alt={personalInfo.name} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             />
             <div className="absolute inset-0 bg-cyan-900/10 mix-blend-multiply rounded-full"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;