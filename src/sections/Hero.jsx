import React from 'react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';
import fotoProfil from '../assets/makan.jpeg'; // Pastikan nama file foto lu benar

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.3,   
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
      {/* Diubah jadi grid-cols-2 khusus di layar kecil (HP) dan disesuaikan gap-nya */}
      <div className="w-full grid grid-cols-5 md:grid-cols-2 gap-4 md:gap-12 items-center">
        
        {/* Kolom Kiri: Teks (Ambil 3 dari 5 porsi layar di HP, full 1 kolom di laptop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-3 md:col-span-1 space-y-4 md:space-y-6"
        >
          <motion.p variants={itemVariants} className="text-cyan-400 font-medium text-sm md:text-base">
            Halo, selamat datang di portofolio saya.
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {personalInfo.name}
            </span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-lg md:text-2xl text-slate-400 font-medium">
            {personalInfo.role}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-slate-400 text-xs md:text-base leading-relaxed max-w-lg hidden sm:block">
            Fokus mendalami pengembangan aplikasi Web & Mobile, serta antusias mengeksplorasi keamanan data digital untuk menciptakan solusi yang inovatif.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-4">
            <a href="#projects" className="px-4 md:px-6 py-2 md:py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-sm md:text-base font-medium rounded-lg transition-colors text-center">
              Lihat Project
            </a>
            <a 
              href="/CV_Akmal_Shaum.pdf" 
              download="CV_Akmal_Shaum_Nadzirin.pdf"
              className="px-4 md:px-6 py-2 md:py-3 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-sm md:text-base font-medium rounded-lg transition-colors flex items-center justify-center text-center"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Foto (Ambil 2 dari 5 porsi layar di HP) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 60 }}
          className="col-span-2 md:col-span-1 relative flex justify-end md:justify-center"
        >
          {/* Ukuran foto diperkecil otomatis kalau di HP (w-32) biar muat bersandingan */}
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 rounded-full border-2 md:border-4 border-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden relative group bg-slate-800">
             <img 
               src={fotoProfil} 
               alt={personalInfo.name} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             />
             <div className="absolute inset-0 bg-cyan-900/10 mix-blend-multiply rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Deskripsi untuk HP ditaruh di bawah biar nggak sempit-sempitan di samping foto */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="col-span-5 text-slate-400 text-sm leading-relaxed block sm:hidden mt-4"
        >
            Fokus mendalami pengembangan aplikasi Web & Mobile, serta antusias mengeksplorasi keamanan data digital untuk menciptakan solusi yang inovatif.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;