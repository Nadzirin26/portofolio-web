import React from 'react';
import { motion } from 'framer-motion';

// Data proyek yang sudah disinkronkan dengan CV terbaru (Termasuk Fish It Vercel Demo)
const projectsData = [
  {
    id: 1,
    title: "Platform Fish It (E-Commerce & Komunitas)",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
    description: "Platform e-commerce dan forum diskusi interaktif yang dirancang khusus bagi komunitas pecinta ikan hias. Di project ini, saya ngebangun sisi frontend menggunakan React.js dan Tailwind CSS, serta CodeIgniter 4 (PHP) sebagai RESTful API backend, lengkap dengan analisis SWOT bisnis.",
    tech: ["React.js", "Tailwind CSS", "PHP / CI4"],
    github: "https://fishit-three.vercel.app/",
    labelButton: "Kunjungi Website"
  },
  {
    id: 2,
    title: "Aplikasi Mobile POS: WarungKu",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop", 
    description: "Berawal dari melihat warung konvensional yang pembukuannya sering berantakan, saya ngebangun aplikasi kasir (POS) ini dari nol. Nggak cuma buat nyatet stok dan scan barcode, aplikasi ini juga udah support pembayaran instan pakai QR Code buat ngebantu proses checkout jadi lebih sat-set.",
    tech: ["Flutter", "Provider", "Supabase", "PostgreSQL"],
    github: "https://github.com/Nadzirin26/warungku.git",
    labelButton: "Lihat di GitHub"
  },
  {
    id: 3,
    title: "Sistem Informasi Akademik (Admin Dashboard)",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    description: "Project dashboard admin manajemen data akademik kampus. Di sini saya ngimplementasin sistem autentikasi login/register yang dikunci ketat pakai Protected Route, serta optimasi penarikan data dari server menggunakan React Query biar aplikasi kerasa enteng dan responsif.",
    tech: ["React.js", "React Router", "TanStack Query", "Context API"],
    github: "https://github.com/Nadzirin26/Tugas-Akhir-PEMSIK.git", 
    labelButton: "Lihat di GitHub"
  },
  {
    id: 4,
    title: "UI/UX GoTravel: Sistem Tiket Travel",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    description: "Desain antarmuka (Hi-Fi) aplikasi pemesanan travel berbasis mobile. Saya merancang arsitektur informasi dan user flow yang sangat detail dari awal, mulai dari penentuan rute armada, alur pemilihan kursi interaktif secara visual, hingga penerbitan tiket digital ber-QR Code.",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    github: "https://www.figma.com/design/TV8WImVbNcfBnTDvqfjNlF/Untitled?node-id=0-1",
    labelButton: "Lihat Desain Figma"
  },
  {
    id: 5,
    title: "Kriptografi & Steganografi",
    category: "Data Security",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    description: "Ini hasil eksplorasi seru saya pas ngulik keamanan data digital. Saya bikin program buat nyembunyiin pesan rahasia ke dalam piksel gambar. Biar keamanannya ekstra dan nggak gampang dibobol, pesannya saya acak dulu pakai algoritma enkripsi berlapis (RSA & DES) sebelum diselipin ke gambarnya.",
    tech: ["Python", "RSA & DES", "LSB Steganography"],
    github: "https://colab.research.google.com/drive/1TrBjo8GJzR6Sq2StNsYYd3lr7lNeV2EL",
    labelButton: "Buka Google Colab"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              <p className="text-slate-400 text-sm mb-6 flex-grow text-justify">{project.description}</p>
              
              {/* Tags Teknologi */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-900/80 text-slate-300 text-xs rounded-full border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Tombol Aksi Langsung Dinamis */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="mt-6 inline-block text-center w-full py-2 bg-slate-800 hover:bg-cyan-900/40 text-cyan-400 text-sm font-medium border border-cyan-900/50 hover:border-cyan-400 rounded-lg transition-all"
              >
                {project.labelButton}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;