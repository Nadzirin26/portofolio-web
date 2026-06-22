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
    <section className="min-h-screen flex items-center pt-20 pb-10">
      
      {/* Container utama: Flex-col di HP, Grid di Desktop */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col md:grid md:grid-cols-2 gap-y-6 md:gap-x-12"
      >
        
        {/* 1. BLOK HEADER (Nama & Role) - Urutan 1 di HP | Kiri Atas di Laptop */}
        <div className="order-1 md:col-start-1 md:row-start-1 space-y-4 md:space-y-6 mt-8 md:mt-0">
          <motion.p variants={itemVariants} className="text-cyan-400 font-medium text-sm md:text-base">
            Halo, selamat datang di portofolio saya.
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {personalInfo.name}
            </span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-slate-400 font-medium">
            {personalInfo.role}
          </motion.h2>
        </div>

        {/* 2. BLOK FOTO - Urutan 2 di HP (Di Bawah Role) | Kanan Full di Laptop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 60 }}
          className="order-2 md:col-start-2 md:row-start-1 md:row-span-3 relative flex justify-center py-4 md:py-0 md:self-center"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-4 border-slate-800 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden relative group bg-slate-800">
             <img 
               src={fotoProfil} 
               alt={personalInfo.name} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             />
             <div className="absolute inset-0 bg-cyan-900/10 mix-blend-multiply rounded-full"></div>
          </div>
        </motion.div>

        {/* 3. BLOK DESKRIPSI - Urutan 3 di HP | Kiri Tengah di Laptop */}
        <motion.p 
          variants={itemVariants} 
          className="order-3 md:col-start-1 md:row-start-2 text-slate-400 leading-relaxed max-w-lg text-sm md:text-base text-justify md:text-left"
        >
          Fokus mendalami pengembangan aplikasi Web & Mobile, serta antusias mengeksplorasi keamanan data digital untuk menciptakan solusi yang inovatif.
        </motion.p>

        {/* 4. BLOK TOMBOL - Urutan 4 di HP | Kiri Bawah di Laptop */}
        <motion.div 
          variants={itemVariants} 
          className="order-4 md:col-start-1 md:row-start-3 flex gap-3 md:gap-4 flex-row w-full md:w-auto md:justify-start pt-2 md:pt-0"
        >
          <a 
            href="#projects" 
            className="flex-1 md:flex-none px-4 py-3 md:px-6 bg-cyan-500 hover:bg-cyan-600 text-white text-sm md:text-base font-medium rounded-lg transition-colors text-center shadow-lg shadow-cyan-500/20"
          >
            Lihat Project
          </a>
          <a 
            href="/CV_Akmal_Shaum.pdf" 
            download="CV_Akmal_Shaum_Nadzirin.pdf"
            className="flex-1 md:flex-none px-4 py-3 md:px-6 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-sm md:text-base font-medium rounded-lg transition-colors text-center inline-flex items-center justify-center bg-slate-800/50 md:bg-transparent"
          >
            Download CV
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;