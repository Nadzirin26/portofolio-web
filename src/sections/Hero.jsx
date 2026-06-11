import React from 'react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';
import fotoProfil from '../assets/makan.jpeg'; // Pastikan nama file foto lu benar

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* === BARIS 1 DI HP: TEKS (KIRI) & FOTO (KANAN) SEJAJAR === */}
          <div className="w-full flex justify-between items-center md:contents">
            
            {/* BLOK TEKS UTAMA */}
            <motion.div 
              variants={containerVariants} initial="hidden" animate="visible"
              className="w-[60%] md:w-full space-y-2 md:space-y-6 md:col-start-1"
            >
              <motion.p variants={itemVariants} className="text-cyan-400 font-medium text-xs md:text-base">
                Halo, selamat datang di portofolio saya.
              </motion.p>
              
              <motion.h1 variants={itemVariants} className="text-[26px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  {personalInfo.name}
                </span>
              </motion.h1>
              
              <motion.h2 variants={itemVariants} className="text-sm sm:text-base md:text-2xl text-slate-400 font-medium leading-snug">
                {personalInfo.role}
              </motion.h2>

              {/* DESKRIPSI & TOMBOL (KHUSUS TAMPIL DI LAPTOP) */}
              <motion.div variants={itemVariants} className="hidden md:block space-y-6 pt-4">
                <p className="text-slate-400 leading-relaxed max-w-lg">
                  Fokus mendalami pengembangan aplikasi Web & Mobile, serta antusias mengeksplorasi keamanan data digital untuk menciptakan solusi yang inovatif.
                </p>
                <div className="flex gap-4">
                  <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                    Lihat Project
                  </a>
                  <a href="/CV_Akmal_Shaum.pdf" download="CV_Akmal_Shaum_Nadzirin.pdf" className="px-6 py-3 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-lg transition-colors inline-flex items-center justify-center">
                    Download CV
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* BLOK FOTO */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 60 }}
              className="w-[35%] md:w-full flex justify-end md:justify-center md:col-start-2"
            >
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-96 md:h-96 rounded-full border-2 md:border-4 border-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden relative group bg-slate-800 flex-shrink-0">
                 <img src={fotoProfil} alt={personalInfo.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-cyan-900/10 mix-blend-multiply rounded-full"></div>
              </div>
            </motion.div>

          </div>

          {/* === BARIS 2 DI HP: DESKRIPSI & TOMBOL (FULL WIDTH KE SAMPING) === */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="w-full md:hidden flex flex-col gap-5 mt-4"
          >
            <p className="text-slate-400 text-sm leading-relaxed text-justify">
              Fokus mendalami pengembangan aplikasi Web & Mobile, serta antusias mengeksplorasi keamanan data digital untuk menciptakan solusi yang inovatif.
            </p>
            <div className="flex flex-row gap-3 w-full">
              <a href="#projects" className="flex-1 px-2 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-colors text-center shadow-lg shadow-cyan-500/20">
                Lihat Project
              </a>
              <a href="/CV_Akmal_Shaum.pdf" download="CV_Akmal_Shaum_Nadzirin.pdf" className="flex-1 px-2 py-3 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-sm font-medium rounded-lg transition-colors text-center bg-slate-800/50">
                Download CV
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;