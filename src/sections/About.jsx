import React from 'react';
import { techSkills } from '../data';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">About <span className="text-cyan-400">Me</span></h2>
        <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
      </div>

      {/* Container Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Kotak 1: Intro Diri (Lebar 2 Kolom) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:col-span-2 bg-slate-800/40 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400/30 transition-colors"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Mahasiswa & <span className="text-cyan-400">Tech Enthusiast</span></h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Halo! Saya Akmal, mahasiswa S1 Teknik Informatika di Universitas Dian Nuswantoro (UDINUS), Semarang. Saya sangat menikmati proses kreatif di balik layar, terutama yang berkaitan dengan <b>Web</b> dan <b>Mobile Development</b>. Bagi saya, <i>ngoding</i> itu bukan sekadar menulis sintaks, tapi tentang bagaimana menciptakan solusi digital yang praktis dan beneran ngebantu masalah orang lain.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Selain asyik ngebangun aplikasi, saya juga lumayan sering <i>ngulik</i> hal-hal berbau keamanan data dan kriptografi. Nah, biar hidup nggak melulu dihabiskan menatap layar monitor, saya rutin meluangkan waktu buat aktif di UKM Bulutangkis. Intinya, harus ada keseimbangan antara ngasah logika dan jaga fisik!
          </p>
        </motion.div>

        {/* Kotak 2: Tech Arsenal (Lebar 1 Kolom) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 hover:border-emerald-400/30 transition-colors flex flex-col justify-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">Tech <span className="text-emerald-400">Arsenal</span></h3>
          <div className="flex flex-wrap gap-2">
            {techSkills.map((skill, index) => (
              <span key={index} className="px-3 py-1.5 bg-slate-900/80 text-slate-300 text-sm rounded-lg border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;