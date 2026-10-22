export const personalInfo = {
  name: "Akmal Shaum Nadzirin",
  role: "Mahasiswa S1 Teknik Informatika",
  tagline: "Mengkombinasikan Web Development, IoT, dan Machine Learning untuk menciptakan solusi inovatif.",
  contact: {
    email: "email.lu@gmail.com",
    github: "https://github.com/Nadzirin26",
    instagram: "https://www.instagram.com/akmalshaum_/",
    linkedin: "https://www.linkedin.com/in/akmal-shaum-nadzirin-6335ba343?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  }
};

export const techSkills = [
  "React", "Tailwind CSS", "CodeIgniter 4", "Flutter", "Python", "YOLOv8", "ResNet50"
];


export const projects = [
  {
    id: 1,
    title: "Platform Fish It (E-Commerce & Komunitas)",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
    description: "Platform e-commerce dan wadah diskusi interaktif yang dirancang khusus bagi komunitas pecinta ikan hias. Saya membangun antarmuka frontend responsif menggunakan React.js dan Tailwind CSS, serta CodeIgniter 4 (PHP) untuk RESTful API backend, lengkap dengan perencanaan kelayakan bisnis SWOT. (Project Kolaboratif / UAS)",
    tech: ["React.js", "Tailwind CSS", "PHP / CI4", "MySQL"],
    github: "https://github.com/Nadzirin26",
    instagram: "https://www.instagram.com/akmalshaum_/",
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
    instagram: "https://www.instagram.com/akmalshaum_/",
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
    title: "Aplikasi Penilaian Rencana Pembelajaran",
    category: "Web Development",
    image: "projects/penilaian-pembelajaran.png",
    description: "Mengembangkan aplikasi web penilaian rencana pembelajaran dengan rubrik terstruktur, perhitungan nilai otomatis, catatan evaluasi, dan laporan PDF. Project asli dibangun menggunakan PHP, Bootstrap, JavaScript, dan mPDF, dengan demo interaktif berbasis HTML, CSS, dan JavaScript.",
    tech: ["PHP", "Bootstrap", "JavaScript", "mPDF", "HTML", "CSS"],
    demo: `${import.meta.env.BASE_URL}demos/penilaian-rencana-pembelajaran/index.html`,
    labelDemo: "Coba Demo Interaktif",
    demoNote: "Demo ringkas: 5 indikator. Data hanya tersimpan selama halaman terbuka; PDF melalui Cetak / Simpan PDF pada browser."
  },
  {
    id: 6,
    title: "Kartu Ucapan Ulang Tahun Interaktif",
    category: "Web Development",
    description: "Website kartu ucapan digital dengan lima halaman ucapan, animasi transisi, dan efek confetti. Tampilannya responsif untuk HP maupun desktop, dengan navigasi melalui tombol, keyboard, atau geser layar.",
    tech: ["HTML5", "CSS3", "JavaScript (Vanilla JS)"],
    demo: `${import.meta.env.BASE_URL}demos/kartu-ulang-tahun/index.html`,
    labelDemo: "Buka Kartu Ucapan",
    demoNote: "Tanpa framework atau library tambahan. Seluruh kode dikemas dalam satu file HTML."
  }
];

export const education = [
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

const baseOrigin = import.meta.env.BASE_URL.replace(/\/$/, "");

export const certifications = [
  {
    title: "Panitia Dinus Badminton Cup VIII — DINUSFEST 2026",
    organization: "Universitas Dian Nuswantoro",
    year: "Jan–Feb 2026",
    desc: "Menjadi panitia Dinus Badminton Cup VIII dalam rangka DINUSFEST 2026, acara antar SMA/SMK tingkat nasional yang diselenggarakan Universitas Dian Nuswantoro pada 18 Januari–14 Februari 2026.",
    image: `${baseOrigin}/sertifikat-acara-nasional.png`,
    pdf: `${baseOrigin}/sertifikat-dinus-badminton-cup-viii.pdf`
  },
  {
    title: "Koordinator Kepelatihan UKM Bulutangkis",
    organization: "UKM Bulutangkis — Universitas Dian Nuswantoro",
    year: "2025/2026",
    desc: "Menjabat sebagai koordinator kepelatihan UKM Bulutangkis Universitas Dian Nuswantoro periode 2025/2026. Mendapatkan sertifikat penghargaan bidang Kepelatihan yang diterbitkan pada 17 September 2026.",
    image: `${baseOrigin}/sertifikat-kepelatihan-ukm.png`
  },
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

export const aboutParagraphs = [
  "Halo! Saya Akmal, mahasiswa S1 Teknik Informatika di Universitas Dian Nuswantoro (UDINUS), Semarang. Saya sangat menikmati proses kreatif di balik layar, terutama yang berkaitan dengan Web dan Mobile Development. Bagi saya, ngoding itu bukan sekadar menulis sintaks, tapi tentang bagaimana menciptakan solusi digital yang praktis dan beneran ngebantu masalah orang lain.",
  "Selain asyik ngebangun aplikasi, saya juga lumayan sering ngulik hal-hal berbau keamanan data dan kriptografi. Nah, biar hidup nggak melulu dihabiskan menatap layar monitor, saya rutin meluangkan waktu buat aktif di UKM Bulutangkis. Intinya, harus ada keseimbangan antara ngasah logika dan jaga fisik!"
];
