import React from 'react';
import { motion } from 'framer-motion';

// Datanya kita taruh langsung di sini biar gampang ngeditnya
const projectsData = [
  {
    id: 1,
    title: "Aplikasi Mobile POS: WarungKu",
    category: "Mobile App Development",
    // Kalau lu udah masukin screenshot WarungKu ke folder public, ganti jadi "/warungku.jpg" dsb.
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop", 
    description: "Berawal dari ngelihat warung konvensional yang pembukuannya sering berantakan, saya ngebangun aplikasi kasir (POS) ini dari nol. Nggak cuma buat nyatet stok dan scan barcode, aplikasi ini juga udah support pembayaran instan pakai QR Code buat ngebantu proses checkout jadi lebih sat-set.",
    tech: ["Flutter", "Provider", "Supabase", "PostgreSQL"],
    github: "https://github.com/Nadzirin26/warungku.git"
  },
  {
    id: 2,
    title: "Project Fish It",
    category: "Web App & Business",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
    description: "Pernah ngerasa susahnya nyari tempat jual-beli ikan hias yang aman? Nah, project web ini saya bikin khusus buat jadi wadah komunitas pecinta ikan hias. Fiturnya lumayan lengkap, mulai dari forum diskusi interaktif sampai skema sistem pengiriman logistik yang dirancang khusus biar hewannya selamat sampai tujuan.",
    tech: ["React", "Tailwind CSS", "CodeIgniter 4"],
    github: "#" // Ganti # ini sama link github Fish It lu kalau ada
  },
  {
    id: 3,
    title: "Kriptografi & Steganografi",
    category: "Data Security",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    description: "Ini hasil eksplorasi seru saya pas ngulik keamanan data digital. Saya bikin program buat nyembunyiin pesan rahasia ke dalam piksel gambar. Biar keamanannya ekstra dan nggak gampang dibobol, pesannya saya acak dulu pakai algoritma enkripsi berlapis (RSA & DES) sebelum diselipin ke gambarnya.",
    tech: ["Python", "RSA & DES", "LSB Steganography"],
    github: "#" // Ganti # ini sama link github steganografi lu kalau ada
  }
];

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
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
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