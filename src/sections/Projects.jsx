import React from 'react';
import { motion } from 'framer-motion';

// Data proyek yang disinkronkan 1-ke-1 dengan CV 10/10 dan dilengkapi tautan demo langsung
const projectsData = [
  {
    id: 1,
    title: "Platform Fish It (E-Commerce & Komunitas)",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
    description: "Platform e-commerce dan wadah diskusi interaktif yang dirancang khusus bagi komunitas pecinta ikan hias. Saya membangun antarmuka frontend responsif menggunakan React.js dan Tailwind CSS, serta CodeIgniter 4 (PHP) untuk RESTful API backend, lengkap dengan perencanaan kelayakan bisnis SWOT. (Project Kolaboratif / UAS)",
    tech: ["React.js", "Tailwind CSS", "PHP / CI4", "MySQL"],
    github: "https://github.com/Nadzirin26",
    demo: "https://fishit-three.vercel.app/",
    labelGithub: "Lihat di GitHub",
    labelDemo: "Kunjungi Website"
  },
  {
    id: 2,
    title: "Aplikasi Mobile POS: WarungKu",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop", 
    description: "Aplikasi kasir (Point of Sale) berbasis mobile untuk membantu digitalisasi dan pembukuan warung konvensional. Mengintegrasikan Supabase (database cloud) dan PostgreSQL, scanner barcode perangkat, serta sistem pembayaran instan simulasi QR Code untuk meningkatkan efisiensi waktu transaksi sebesar 40%. (Project Kolaboratif / Capstone)",
    tech: ["Flutter", "Provider", "Supabase", "PostgreSQL"],
    github: "https://github.com/Nadzirin26/warungku.git",
    demo: "https://youtu.be/HCL8jV37xwU?si=a-JArhm0oY6i5me8",
    labelGithub: "Lihat di GitHub",
    labelDemo: "Tonton Demo Video"
  },
  {
    id: 3,
    title: "Sistem Informasi Akademik (Admin Dashboard)",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    description: "Dashboard admin manajemen data akademik kampus terintegrasi. Mengimplementasikan autentikasi JWT dan rute terproteksi (Protected Route) menggunakan React Router, serta optimasi caching data menggunakan React Query untuk mempercepat responsivitas dan pemrosesan data hingga 30%. (Project Individu)",
    tech: ["React.js", "React Router", "TanStack Query", "Context API"],
    github: "https://github.com/Nadzirin26", 
    demo: "https://tugas-akhir-pemsik.vercel.app/",
    labelGithub: "Lihat di GitHub",
    labelDemo: "Kunjungi Website"
  },
  {
    id: 4,
    title: "UI/UX GoTravel: Sistem Tiket Travel",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    description: "Desain antarmuka (Hi-Fi) aplikasi pemesanan tiket travel berbasis mobile. Merancang arsitektur informasi dan user flow yang sangat detail, mulai dari pencarian rute, alur pemilihan kursi interaktif secara visual, pengisian manifes, hingga penerbitan tiket digital ber-QR Code di Figma. (Project Eksplorasi)",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    github: "https://www.figma.com/design/TV8WImVbNcfBnTDvqfjNlF/Untitled?node-id=0-1",
    labelButton: "Lihat Desain Figma"
  },
  {
    id: 5,
    title: "Kriptografi & Steganografi",
    category: "Data Security",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    description: "Program berbasis Python untuk menyembunyikan pesan rahasia ke dalam piksel gambar (Steganografi LSB). Untuk keamanan berlapis, pesan diacak terlebih dahulu menggunakan algoritma enkripsi hibrida RSA dan DES sebelum disisipkan ke dalam media gambar. (Project Akhir Mata Kuliah)",
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
              <div className="flex gap-3 mt-6">
                {project.demo ? (
                  <>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 text-center py-2 bg-slate-900/60 hover:bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium border border-slate-700 rounded-lg transition-all"
                    >
                      {project.labelGithub}
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 text-center py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm font-medium rounded-lg transition-all shadow-md shadow-cyan-500/10"
                    >
                      {project.labelDemo}
                    </a>
                  </>
                ) : (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full text-center py-2 bg-slate-800 hover:bg-cyan-900/40 text-cyan-400 text-sm font-medium border border-cyan-900/50 hover:border-cyan-400 rounded-lg transition-all"
                  >
                    {project.labelButton || project.labelGithub}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;