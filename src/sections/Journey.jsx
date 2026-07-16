import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data Pendidikan
const educationData = [
  {
    school: "Universitas Dian Nuswantoro (UDINUS)",
    degree: "S1 Teknik Informatika",
    year: "Sekarang",
    desc: "Fokus pada pengembangan perangkat lunak, Web Development, IoT, dan penelitian berbasis Machine Learning."
  },
  {
    school: "SMA Kesatrian 01 Semarang",
    degree: "Jurusan IPA / MIPA",
    year: "Lulus",
    desc: "Aktif dalam kegiatan akademik dan membangun fondasi logika matematika serta sains."
  }
];

// Data Sertifikasi - Menggunakan dynamic origin untuk bypass hash/anchor routing (#)
const baseOrigin = window.location.origin;

const certificationData = [
  {
    title: "Machine Learning with Python",
    organization: "IBM | Coursera",
    year: "Apr 2026",
    desc: "Berhasil lulus dengan nilai akhir 98%. Menguasai pemisahan data, Regresi Polinomial, teknik regularisasi (Ridge, LASSO), dan Cross-Validation.",
    image: `${baseOrigin}/Machine Learning With python.jpg`
  },
  {
    title: "Data Analysis with Python",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Mendalami mekanisme analisis data tingkat lanjut, rekayasa fitur data (Feature Engineering), manipulasi data terstruktur, dan pemodelan statistik.",
    image: `${baseOrigin}/Coursera AZEAA6OBGR3I.jpg`
  },
  {
    title: "Supervised Machine Learning: Classification",
    organization: "IBM | Coursera",
    year: "Okt 2025",
    desc: "Mempelajari algoritma klasifikasi data terarah (Supervised Learning), evaluasi performa model, serta penanganan ketidakseimbangan kelas data.",
    image: `${baseOrigin}/Coursera Classification.jpg`
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM | Coursera",
    year: "Okt 2025",
    desc: "Fokus pada pembersihan data (Data Cleaning), statistik inferensial, pengujian hipotesis, dan visualisasi distribusi data sebelum melatih model AI.",
    image: `${baseOrigin}/Coursera EDA_page-0001.jpg`
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    organization: "IBM | Coursera",
    year: "Okt 2025",
    desc: "Berhasil lulus dengan nilai sempurna 100%. Memahami konsep dasar, terminologi esensial, domain aplikasi, serta transformasi bisnis lewat AI.",
    image: `${baseOrigin}/Coursera AI_page-0001.jpg`
  },
  {
    title: "Supervised Machine Learning: Regression",
    organization: "IBM | Coursera",
    year: "Okt 2025",
    desc: "Mempelajari konsep pembelajaran mesin terarah (Supervised Learning) khusus pemodelan regresi (Linear, Multi-variabel, Non-linear) dan evaluasi performa model.",
    image: `${baseOrigin}/Coursera Regression.jpg`
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    organization: "IBM | Coursera",
    year: "Apr 2026",
    desc: "Menguasai teknik rekayasa prompt (Prompt Engineering) tingkat dasar untuk mengarahkan respon model AI Generatif agar menghasilkan output yang relevan dan akurat.",
    image: `${baseOrigin}/Coursera JTF5TOQV0UKP.jpg`
  },
  {
    title: "Generative AI: Introduction and Applications",
    organization: "IBM | Coursera",
    year: "Apr 2026",
    desc: "Memahami dasar-dasar kecerdasan buatan generatif, konsep Large Language Models (LLM), serta berbagai skenario aplikasi praktis di industri modern.",
    image: `${baseOrigin}/Coursera Z7YEQCMT0OIP.jpg`
  },
  {
    title: "Introduction to Cybersecurity Careers",
    organization: "IBM | Coursera",
    year: "Apr 2026",
    desc: "Memahami lanskap karir di bidang keamanan siber (Cybersecurity), konsep dasar keamanan informasi, ancaman digital, serta praktik kepatuhan keamanan data.",
    image: `${baseOrigin}/Coursera Z1EFFT89216X.jpg`
  },
  {
    title: "Python for Data Science, AI & Development",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Memperdalam pemrograman Python dasar hingga tingkat lanjut, struktur data, manipulasi file, serta pemrograman berorientasi objek (OOP) untuk Data Science dan AI.",
    image: `${baseOrigin}/Coursera NAGPN2JNTLRG.jpg`
  },
  {
    title: "Building Generative AI-Powered Applications with Python",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Mengembangkan aplikasi cerdas berbasis AI Generatif menggunakan Python, memanfaatkan API model bahasa besar untuk integrasi fitur generatif yang interaktif.",
    image: `${baseOrigin}/Coursera MQD7V7M2F7CS.jpg`
  },
  {
    title: "Developing AI Applications with Python and Flask",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Membangun dan men-deploy aplikasi web berbasis kecerdasan buatan menggunakan bahasa Python dan mikro-framework Flask secara end-to-end.",
    image: `${baseOrigin}/Coursera JPCTVUW4MDPS.jpg`
  },
  {
    title: "Generative AI and LLMs: Architecture and Data Preparation",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Mempelajari arsitektur model bahasa besar (LLM), pemrosesan awal data teks (text preprocessing), tokenisasi, serta teknik persiapan data untuk pelatihan model AI Generatif.",
    image: `${baseOrigin}/Coursera GVD7LWP8G9MD.jpg`
  },
  {
    title: "Generative AI Language Modeling with Transformers",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Memahami arsitektur Transformer (Self-Attention, Encoder-Decoder) dan mekanisme pemodelan bahasa alami (NLP) untuk pembuatan konten generatif.",
    image: `${baseOrigin}/Coursera I9F9E687MGXX.jpg`
  },
  {
    title: "Gen AI Foundational Models for NLP & Language Understanding",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Mengeksplorasi model-model dasar AI Generatif untuk pemahaman bahasa alami (NLP), ekstraksi informasi, dan pemrosesan teks tingkat lanjut.",
    image: `${baseOrigin}/Coursera S8OBLCB1KGOZ.jpg`
  },
  {
    title: "Generative AI Engineering and Fine-Tuning Transformers",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Menguasai rekayasa AI Generatif dan tuning halus model Transformer untuk menyesuaikan perilaku model dengan tugas-tugas NLP spesifik.",
    image: `${baseOrigin}/Coursera VEYBJG9R40J9.jpg`
  },
  {
    title: "Generative AI Advanced Fine-Tuning for LLMs",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Mempelajari teknik tuning halus tingkat lanjut (Advanced Fine-Tuning) untuk menyesuaikan Model Bahasa Besar (LLM) dengan domain data spesifik secara efisien.",
    image: `${baseOrigin}/Coursera JOZ3AHVCLY0V.jpg`
  },
  {
    title: "Fundamentals of AI Agents Using RAG and LangChain",
    organization: "IBM | Coursera",
    year: "Mei 2026",
    desc: "Menguasai dasar-dasar pengembangan agen AI menggunakan teknik Retrieval-Augmented Generation (RAG) dan framework LangChain untuk meningkatkan akurasi respon LLM.",
    image: `${baseOrigin}/Coursera HD2VE7E1NQVD.jpg`
  }
];

const Journey = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education" className="py-24 bg-transparent relative">
      {/* Judul Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">My <span className="text-cyan-400">Journey</span></h2>
        <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Kolom Pendidikan */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            📚 Riwayat Pendidikan
          </h3>
          <div className="border-l-2 border-cyan-900/60 ml-3 space-y-8">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative pl-8 group"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full group-hover:bg-cyan-500 transition-colors duration-300 shadow-[0_0_8px_rgba(34,211,238,0.4)]"></div>
                <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">{item.school}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm mb-2">
                  <span className="text-cyan-400 font-medium">{item.degree}</span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-slate-400 bg-slate-800/40 border border-slate-700/40 px-2 py-0.5 rounded text-xs w-fit">{item.year}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kolom Pengalaman / Sertifikasi */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            🏆 Pengalaman & Sertifikasi
          </h3>
          {/* Kontainer Scrollable agar tinggi seimbang dengan kolom pendidikan */}
          <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {/* Wrapper konten scrollable dengan relative positioning dan padding-left */}
            <div className="relative pl-11 space-y-8">
              {/* Garis vertikal timeline independen di dalam wrapper agar merentang penuh mengikuti tinggi scroll content */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-emerald-500/30"></div>
              
              {certificationData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedCert(item)}
                >
                  {/* Dot diposisikan -left-10 (-40px) dari item (yang di-offset pl-11), sehingga berada di left=4px dan tidak terpotong */}
                  <div className="absolute -left-10 top-1 w-4 h-4 bg-slate-950 border-2 border-emerald-500 rounded-full group-hover:bg-emerald-500 transition-colors duration-300 shadow-[0_0_8px_rgba(52,211,153,0.4)]"></div>
                  
                  <h4 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 group-hover:underline transition-all duration-300 flex items-center gap-2">
                    {item.title} 
                    <span className="text-xs opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity font-normal">(Klik untuk lihat)</span>
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm mb-2">
                    <span className="text-emerald-400 font-medium">{item.organization}</span>
                    <span className="hidden sm:block text-slate-600">•</span>
                    <span className="text-slate-400 bg-slate-800/40 border border-slate-700/40 px-2 py-0.5 rounded text-xs w-fit">{item.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ================= MODAL INTERAKTIF POP-UP SERTIFIKAT ================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-slate-900 border border-slate-800 p-4 rounded-xl max-w-3xl w-full relative shadow-[0_0_50px_rgba(16,185,129,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Silang Keluar */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg transition-colors z-10"
              >
                ✕
              </button>

              <div className="mb-3 text-left">
                <h4 className="text-md sm:text-lg font-bold text-white leading-tight">{selectedCert.title}</h4>
                <p className="text-xs text-emerald-400 font-medium">{selectedCert.organization} • {selectedCert.year}</p>
              </div>

              {/* Tempat Tampilan Gambar Sertifikat */}
              <div className="w-full overflow-hidden rounded-lg bg-slate-950 flex justify-center border border-slate-800">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Journey;