import React from 'react';
import { projects } from '../data';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      {/* Judul Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
        <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
      </div>
      
      {/* Grid Etalase Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 group flex flex-col"
          >
            {/* Bagian Gambar */}
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            {/* Bagian Teks */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
              
              {/* Tags Teknologi */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-900/80 text-slate-300 text-xs rounded-full border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              {/* Tombol ke GitHub */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="mt-6 inline-block text-center w-full py-2 bg-slate-800 hover:bg-cyan-900/40 text-cyan-400 text-sm font-medium border border-cyan-900/50 hover:border-cyan-400 rounded-lg transition-all"
              >
                Lihat di GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;