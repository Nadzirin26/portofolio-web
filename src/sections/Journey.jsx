import React from 'react';
import { education, experience } from '../data';
import { motion } from 'framer-motion';

const Journey = () => {
  return (
    <section id="education" className="py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">My <span className="text-cyan-400">Journey</span></h2>
        <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Kolom Pendidikan */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            📚 Riwayat Pendidikan
          </h3>
          <div className="border-l-2 border-cyan-900 ml-3 space-y-8">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Bulatan di garis timeline */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-900 border-2 border-cyan-500 rounded-full"></div>
                
                <h4 className="text-lg font-bold text-slate-100">{item.school}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm mb-2">
                  <span className="text-cyan-400 font-medium">{item.degree}</span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded text-xs">{item.year}</span>
                </div>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kolom Pengalaman / Sertifikasi */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            🏆 Pengalaman & Sertifikasi
          </h3>
          <div className="border-l-2 border-emerald-900 ml-3 space-y-8">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-900 border-2 border-emerald-500 rounded-full"></div>
                
                <h4 className="text-lg font-bold text-slate-100">{item.title}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm mb-2">
                  <span className="text-emerald-400 font-medium">{item.organization}</span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded text-xs">{item.year}</span>
                </div>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;