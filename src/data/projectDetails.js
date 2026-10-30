// Evidence-backed case studies. Unknown contributions are intentionally omitted.
export const projectDetails = [
  {
    "id": 1,
    "slug": "fish-it",
    "title": "Platform Fish It",
    "image": "fish-it-live-20261023.png",
    "category": "Web Development",
    "summary": "Demo marketplace ikan hias untuk mencoba belanja dan pengelolaan toko dari dua sudut pandang.",
    "paragraphs": [
      "Fish It berawal dari project UAS Technopreneurship dan berkembang menjadi portofolio interaktif. Penghobi dapat mencari ikan, memeriksa detail produk, dan mencoba alur pesanan tanpa transaksi sungguhan.",
      "Katalog ditampilkan dari data lokal. Pengunjung menyaring kategori, mengurutkan produk, menyimpan favorit, lalu menambahkan barang ke keranjang. Saat checkout, sistem memeriksa stok dan memisahkan pesanan berdasarkan toko.",
      "Portal penjual mengelola produk dan pesanan demo. Perubahan disimpan di browser dan dapat direset. Tidak ada backend pembayaran, database bersama, atau pengiriman sungguhan pada versi source yang diaudit."
    ],
    "features": [
      "Pencarian, filter, pengurutan, dan favorit",
      "Checkout simulasi dengan validasi stok dan ongkir per toko",
      "Status pesanan, pembatalan, dan ulasan",
      "Portal penjual untuk pengelolaan produk",
      "Pemulihan data browser yang rusak"
    ],
    "stack": [
      [
        "React",
        "Frontend",
        "Mengelola katalog, dialog, halaman pesanan, dan state demo."
      ],
      [
        "JavaScript",
        "Logika",
        "Menghitung checkout, stok, ongkir, pembatalan, dan rating."
      ],
      [
        "CSS",
        "Tampilan",
        "Mengatur katalog responsif dan dialog."
      ],
      [
        "localStorage",
        "Penyimpanan",
        "Menyimpan state demo pada browser pengguna."
      ],
      [
        "Vite",
        "Build",
        "Menjalankan development dan menghasilkan bundle statis."
      ],
      [
        "Node.js test runner",
        "Pengujian",
        "Menguji logika transaksi dan pemulihan penyimpanan."
      ]
    ],
    "workflow": [
      "Jelajahi katalog",
      "Pilih produk & jumlah",
      "Checkout simulasi",
      "Pantau pesanan / ulasan"
    ],
    "architecture": [
      "Katalog lokal",
      "State React",
      "Fungsi marketplace",
      "localStorage"
    ],
    "verification": "15 test lokal lolos; build dan lint lolos pada 30 Oktober 2026. Source berjalan melalui server Vite lokal. Tidak menguji transaksi sungguhan karena versi ini merupakan demo frontend.",
    "links": [
      {
        "label": "Website",
        "href": "https://fishit-three.vercel.app/"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/Nadzirin26/Fishit"
      }
    ],
    "challenges": [
      "Harga produk disalin ke pesanan agar riwayat tetap konsisten ketika katalog diubah.",
      "Validasi stok dan pembatalan mencegah checkout tidak valid serta pengembalian stok berulang."
    ],
    "status": "Source ditinjau",
    "design": false,
    "alt": "Preview Platform Fish It",
    "caption": "Aset tampilan project yang sudah tersedia di portofolio."
  },
  {
    "id": 2,
    "slug": "warungku",
    "title": "Aplikasi Mobile POS: WarungKu",
    "image": "warungku.png",
    "category": "Mobile Development",
    "summary": "Aplikasi kasir Flutter untuk mengelola produk, transaksi, persediaan, dan laporan warung.",
    "paragraphs": [
      "WarungKu memusatkan aktivitas kasir dan pengelolaan warung dalam aplikasi mobile. Source memuat halaman produk, keranjang, transaksi, inventori, analitik, serta laporan.",
      "Provider menghubungkan state produk dan keranjang dengan antarmuka. Repository transaksi menulis header serta rincian barang ke Supabase dan menyimpan salinannya pada cache SQLite lokal.",
      "Alur akun menggunakan Supabase Auth dan profil dengan peran. Source juga menyediakan verifikasi pembayaran QR dan ekspor laporan. Operasi database, kamera, serta cetak belum diuji di perangkat pada audit ini."
    ],
    "features": [
      "Pengelolaan produk dan keranjang",
      "Login dan pemuatan peran dari profil",
      "Pencatatan transaksi dan item",
      "Cache transaksi lokal",
      "Pemindaian barcode serta ekspor laporan pada source"
    ],
    "stack": [
      [
        "Flutter / Dart",
        "Mobile",
        "Menyusun halaman kasir, katalog, inventori, dan laporan."
      ],
      [
        "Provider",
        "State",
        "Memberi notifikasi perubahan auth, produk, dan keranjang ke UI."
      ],
      [
        "Supabase Flutter",
        "Backend",
        "Mengakses autentikasi, profil, produk, dan transaksi melalui client Supabase."
      ],
      [
        "sqflite",
        "Cache lokal",
        "Menyimpan transaksi dan produk melalui local store."
      ],
      [
        "mobile_scanner",
        "Perangkat",
        "Mengakses pemindaian barcode pada halaman scanner."
      ],
      [
        "pdf / printing",
        "Laporan",
        "Menyusun dan mencetak laporan melalui halaman ekspor."
      ]
    ],
    "workflow": [
      "Masuk / pilih produk",
      "Isi keranjang",
      "Pilih pembayaran",
      "Simpan transaksi",
      "Lihat laporan"
    ],
    "architecture": [
      "UI Flutter",
      "Provider",
      "Repository",
      "Supabase + cache SQLite"
    ],
    "verification": "Analisis statis. flutter pub get, flutter analyze, dan flutter build apk --debug dicoba; proses dependency gagal menulis active_roots pada cache Pub. Build/runtime perangkat belum diverifikasi. Tidak ditemukan test Dart pada repo yang diperiksa. Backend Supabase tidak dimodifikasi.",
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/Nadzirin26/warungku"
      },
      {
        "label": "Video presentasi",
        "href": "https://youtu.be/HCL8jV37xwU"
      }
    ],
    "challenges": [
      "Repository menyimpan salinan transaksi lokal sehingga data yang berhasil diambil dapat dipakai sebagai cache."
    ],
    "status": "Analisis statis · runtime belum diverifikasi",
    "design": false,
    "alt": "Preview Aplikasi Mobile POS: WarungKu",
    "caption": "Aset tampilan project yang sudah tersedia di portofolio."
  },
  {
    "id": 3,
    "slug": "sistem-informasi-akademik",
    "title": "Sistem Informasi Akademik",
    "image": "academic-login.png",
    "category": "Web Development",
    "summary": "Dashboard pembelajaran untuk pengelolaan mahasiswa, dosen, mata kuliah, dan rencana studi.",
    "paragraphs": [
      "Project ini menggabungkan halaman autentikasi dan dashboard administrasi akademik. Pengguna yang melewati pemeriksaan sesi di sisi klien dapat mengakses halaman data master dan rencana studi.",
      "Komponen halaman menggunakan fungsi API berbasis Axios untuk mengambil dan mengubah data. Source menyediakan resource mahasiswa, dosen, mata kuliah, dan kelas; React Query membantu pemuatan serta pembaruan data pada hook yang tersedia.",
      "Rencana studi menggabungkan beberapa data master untuk memilih mahasiswa, dosen, dan mata kuliah. Login dalam source adalah mekanisme demo. Versi ini tidak dideskripsikan sebagai autentikasi JWT atau sistem produksi yang sudah teruji."
    ],
    "features": [
      "Halaman masuk dan registrasi demo",
      "Pengelolaan mahasiswa, dosen, dan mata kuliah",
      "Rencana studi dengan data master",
      "Navigasi halaman admin terproteksi di sisi klien"
    ],
    "stack": [
      [
        "React",
        "Frontend",
        "Merender halaman autentikasi dan administrasi."
      ],
      [
        "React Router",
        "Routing",
        "Mendefinisikan halaman dan layout melalui RouterProvider."
      ],
      [
        "Axios",
        "Akses data",
        "Mengirim permintaan resource akademik melalui lapisan API."
      ],
      [
        "TanStack Query",
        "Data frontend",
        "Mengelola query dan perubahan data melalui hook mahasiswa, dosen, kelas, dan mata kuliah."
      ],
      [
        "Tailwind CSS",
        "Tampilan",
        "Menyusun styling halaman aplikasi."
      ],
      [
        "json-server",
        "API demo",
        "Script serve menyediakan resource dari berkas data JSON."
      ]
    ],
    "workflow": [
      "Masuk demo",
      "Buka halaman admin",
      "Ambil data master",
      "Isi / ubah data",
      "Muat ulang daftar"
    ],
    "architecture": [
      "React Router + Context",
      "Halaman & hook query",
      "Axios API layer",
      "API resource demo"
    ],
    "verification": "Build lokal lolos. Lint repo menghasilkan 13 error; tidak tersedia script test. Alur backend dan akun belum diverifikasi saat runtime. Aset preview memperlihatkan halaman masuk, bukan dashboard setelah login.",
    "links": [
      {
        "label": "Website",
        "href": "https://tugas-akhir-pemsik.vercel.app/"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/Nadzirin26/Tugas-Akhir-PEMSIK"
      }
    ],
    "challenges": [],
    "status": "Build terverifikasi · integrasi belum diverifikasi",
    "design": false,
    "alt": "Preview Sistem Informasi Akademik",
    "caption": "Aset tampilan project yang sudah tersedia di portofolio."
  },
  {
    "id": 4,
    "slug": "gotravel",
    "title": "UI/UX GoTravel: Sistem Tiket Travel",
    "image": "gotravel.png",
    "category": "UI/UX Design",
    "summary": "Eksplorasi antarmuka mobile untuk layanan perjalanan, dibuat melalui Figma.",
    "paragraphs": [
      "GoTravel dipresentasikan sebagai desain UI/UX, bukan aplikasi dengan backend. Preview yang tersedia menampilkan homepage layanan travel dengan banner, kolom pencarian tempat, dan kartu kota tujuan.",
      "Desain berpusat pada pemilihan tujuan perjalanan. Screenshot memberi gambaran susunan konten dan hierarki visual pada layar mobile. Pada audit ini, interaksi prototipe lengkap, riset pengguna, dan proses iterasinya belum dapat diverifikasi dari source berkode.",
      "Halaman ini membatasi pembahasan pada layar yang tersedia. Alur pembayaran, pemilihan kursi, dan penerbitan tiket tidak dinyatakan telah diimplementasikan sebagai aplikasi web."
    ],
    "features": [
      "Homepage mobile",
      "Pencarian tempat pada desain",
      "Kartu kota tujuan perjalanan"
    ],
    "stack": [
      [
        "Figma",
        "Desain",
        "Media desain antarmuka dan akses file desain, bukan runtime aplikasi."
      ]
    ],
    "workflow": [
      "Lihat homepage",
      "Temukan pencarian tempat",
      "Lihat kartu tujuan"
    ],
    "architecture": [
      "Susunan homepage",
      "Hierarki pencarian",
      "Pilihan kota"
    ],
    "verification": "Desain nonkode. Aset screenshot yang sudah ada ditinjau; tidak ada dependency, endpoint, database, build, atau test aplikasi untuk desain ini. Hubungan seluruh frame/prototype dan proses desain masih perlu konfirmasi.",
    "links": [
      {
        "label": "Desain Figma",
        "href": "https://www.figma.com/design/TV8WImVbNcfBnTDvqfjNlF/Untitled?node-id=0-1"
      }
    ],
    "challenges": [],
    "status": "Desain UI/UX · dokumentasi terbatas",
    "design": true,
    "alt": "Preview UI/UX GoTravel: Sistem Tiket Travel",
    "caption": "Aset tampilan project yang sudah tersedia di portofolio."
  },
  {
    "id": 5,
    "slug": "penilaian-rencana-pembelajaran",
    "title": "Aplikasi Penilaian Rencana Pembelajaran",
    "image": "penilaian-pembelajaran.png",
    "category": "Web Development",
    "summary": "Instrumen evaluasi rencana pembelajaran dengan rubrik, rekap nilai, dan laporan.",
    "paragraphs": [
      "Aplikasi membantu penilai mencatat identitas rencana pembelajaran dan menilai indikator secara terstruktur. Source PHP menyediakan formulir identitas, rubrik, halaman hasil, dan generator laporan.",
      "Pada versi PHP, data formulir diteruskan ke proses penilaian dan pembuatan laporan. Generator menggunakan mPDF untuk menyusun dokumen dari HTML. Source menunjukkan Bootstrap pada halaman dan JavaScript pada interaksi formulir.",
      "Demo yang tersedia bagi pengunjung portofolio merupakan versi HTML tersendiri dengan lima indikator. Nilai dinormalisasi dari skor maksimal 15 ke skala 100. Catatan dan identitas ditampilkan kembali di laporan, lalu PDF disimpan melalui fasilitas cetak browser. Demo ini tidak menjalankan PHP atau mPDF."
    ],
    "features": [
      "Identitas sekolah, pelajaran, kelas, penilai, dan tanggal",
      "Rubrik demo dengan skor 1–3",
      "Nilai skala 100 serta predikat",
      "Catatan evaluasi dan rekap kategori",
      "Laporan demo yang dapat dicetak"
    ],
    "stack": [
      [
        "PHP",
        "Aplikasi asli",
        "Menangani formulir identitas dan menyusun laporan pada source asli."
      ],
      [
        "Bootstrap",
        "UI asli",
        "Mengatur layout formulir dan halaman PHP."
      ],
      [
        "mPDF",
        "Laporan asli",
        "Mengubah HTML laporan menjadi PDF di generate_pdf.php."
      ],
      [
        "HTML / CSS / JavaScript",
        "Demo publik",
        "Menjalankan alur ringkas identitas, lima indikator, hasil, dan cetak di browser."
      ]
    ],
    "workflow": [
      "Isi identitas contoh",
      "Pilih lima skor",
      "Tambahkan catatan",
      "Lihat nilai & predikat",
      "Cetak / simpan PDF"
    ],
    "architecture": [
      "Demo HTML",
      "State memori halaman",
      "Normalisasi skor",
      "DOM laporan + cetak browser"
    ],
    "verification": "Kelima file PHP lolos pemeriksaan sintaks dan homepage PHP lokal merespons HTTP 200. Demo HTML dijalankan memakai identitas contoh; lima skor 3 menghasilkan nilai 100 dan predikat Sangat Baik. Integrasi PDF PHP perlu pengujian menyeluruh; hasil cetak browser bergantung pada perangkat. Tidak mengklaim versi demo mencakup seluruh indikator aplikasi asli.",
    "links": [
      {
        "label": "Demo interaktif",
        "href": "/demos/penilaian-rencana-pembelajaran/index.html"
      }
    ],
    "challenges": [],
    "status": "Demo HTML · source PHP ditinjau",
    "design": false,
    "alt": "Preview Aplikasi Penilaian Rencana Pembelajaran",
    "caption": "Aset tampilan project yang sudah tersedia di portofolio."
  }
];
