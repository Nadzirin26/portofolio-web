// Evidence-backed case studies. Roles confirmed by the portfolio owner.
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
      "Temukan ikan",
      "Susun keranjang",
      "Periksa checkout",
      "Simpan pesanan simulasi",
      "Lanjutkan atau batalkan"
    ],
    "architecture": [
      "Muat data",
      "Terima interaksi",
      "Proses aturan transaksi",
      "Render dan simpan"
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
    "caption": "Aset tampilan project yang sudah tersedia di portofolio.",
    "role": "Pembuat aplikasi.",
    "workflowExplanation": {
      "intro": "Alur pembeli dimulai dari pencarian ikan hingga pesanan simulasi. Portal penjual memakai data demo yang sama pada browser tersebut.",
      "steps": [
        {
          "title": "Temukan ikan",
          "input": "Kata pencarian, kategori, dan pilihan urutan.",
          "description": "Katalog disaring berdasarkan pilihan pengunjung. Detail produk membantu memeriksa harga, stok, dan ulasan sebelum memilih.",
          "output": "Daftar produk yang sesuai."
        },
        {
          "title": "Susun keranjang",
          "input": "Produk dan jumlah yang dipilih.",
          "description": "Pengunjung menambahkan barang dan mengatur jumlah. Keranjang menjadi masukan perhitungan checkout.",
          "output": "Daftar barang beserta jumlahnya."
        },
        {
          "title": "Periksa checkout",
          "input": "Keranjang, sesi demo, metode penerimaan, dan pembayaran.",
          "description": "Logika memeriksa jumlah serta stok. Barang dipisah per toko dan ongkir dihitung menurut metode penerimaan.",
          "output": "Rincian total dan pesanan per toko."
        },
        {
          "title": "Simpan pesanan simulasi",
          "input": "Checkout yang valid.",
          "description": "Sistem menyimpan salinan rincian produk pada pesanan, mengurangi stok, lalu mengosongkan keranjang. Pembayaran merupakan simulasi.",
          "output": "Riwayat pesanan dan stok terbaru."
        },
        {
          "title": "Lanjutkan atau batalkan",
          "input": "Pesanan dan status saat ini.",
          "description": "Pengunjung dapat mengikuti tahapan simulasi atau membatalkan pesanan yang belum diproses. Ulasan diberikan setelah pesanan selesai.",
          "output": "Status, riwayat perubahan, dan ulasan."
        }
      ],
      "branches": [
        "Keranjang tidak valid atau stok tidak cukup → checkout ditolak untuk diperbaiki.",
        "Ambil di toko → ongkir nol; pengiriman → ongkir per toko.",
        "Pembatalan yang valid → stok dikembalikan satu kali."
      ],
      "limitation": "Tidak ada pembayaran, kurir, akun server, atau komunikasi penjual sungguhan."
    },
    "pipelineExplanation": {
      "intro": "Pipeline berjalan di browser: data katalog dan state React diteruskan ke fungsi transaksi, kemudian hasilnya dirender serta disimpan lokal.",
      "steps": [
        {
          "title": "Muat data",
          "input": "Katalog awal dan data browser bila tersedia.",
          "description": "Aplikasi memuat state demo. Data yang rusak atau tidak dapat dibaca ditangani melalui fallback.",
          "output": "State awal katalog, keranjang, dan pesanan."
        },
        {
          "title": "Terima interaksi",
          "input": "Pencarian, klik produk, perubahan keranjang, atau aksi penjual.",
          "description": "Komponen React mengubah state atau memanggil fungsi logika marketplace sesuai tindakan.",
          "output": "Permintaan perubahan state."
        },
        {
          "title": "Proses aturan transaksi",
          "input": "State dan parameter checkout/pesanan.",
          "description": "Fungsi marketplace menghitung ongkir, memeriksa stok, membuat snapshot pesanan, atau memproses pembatalan.",
          "output": "State baru atau pesan penolakan."
        },
        {
          "title": "Render dan simpan",
          "input": "State yang sudah diperbarui.",
          "description": "React menampilkan hasil. Aplikasi menyimpan state pada localStorage dan menangani kegagalan penyimpanan.",
          "output": "UI terbaru dan salinan lokal untuk kunjungan berikutnya."
        }
      ],
      "branches": [
        "Data penyimpanan tidak tersedia → aplikasi memakai state demo yang dapat dimuat.",
        "Penyimpanan gagal → pengguna diberi pemberitahuan; tidak diasumsikan tersinkron ke server."
      ],
      "limitation": "Arsitektur ini mendokumentasikan demo frontend pada snapshot source, bukan backend CI4/MySQL."
    }
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
      "Masuk dan pilih menu",
      "Pilih barang",
      "Pilih pembayaran",
      "Catat transaksi",
      "Tinjau dan laporkan"
    ],
    "architecture": [
      "Tampilkan halaman Flutter",
      "Kelola state",
      "Akses repository",
      "Simpan dan gunakan cache"
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
    "caption": "Aset tampilan project yang sudah tersedia di portofolio.",
    "role": "Pembuat aplikasi.",
    "workflowExplanation": {
      "intro": "Alur POS menghubungkan pemilihan produk, pembayaran, pencatatan transaksi, dan pelaporan. Urutan ini ditelusuri dari source; belum diuji pada perangkat.",
      "steps": [
        {
          "title": "Masuk dan pilih menu",
          "input": "Akun serta profil pengguna.",
          "description": "Supabase Auth menangani sesi. Controller memuat profil dan peran untuk menentukan akses halaman.",
          "output": "Sesi dan halaman sesuai peran."
        },
        {
          "title": "Pilih barang",
          "input": "Daftar produk atau hasil pemindaian barcode.",
          "description": "Pengguna memilih barang dan jumlah. State keranjang menyediakan rincian untuk checkout.",
          "output": "Keranjang transaksi."
        },
        {
          "title": "Pilih pembayaran",
          "input": "Keranjang, total, dan metode pembayaran.",
          "description": "Repository menyiapkan data transaksi. Pembayaran QR diberi status pending, sedangkan jalur lain mengikuti aturan yang ada pada source.",
          "output": "Header transaksi dan daftar item."
        },
        {
          "title": "Catat transaksi",
          "input": "Data pembayaran dan item.",
          "description": "Repository menulis header serta item ke Supabase, lalu memperbarui cache transaksi lokal.",
          "output": "Catatan transaksi dengan statusnya."
        },
        {
          "title": "Tinjau dan laporkan",
          "input": "Transaksi yang tercatat.",
          "description": "Halaman verifikasi, analitik, dan ekspor mengolah catatan untuk kebutuhan pengelolaan warung.",
          "output": "Status pembayaran dan laporan."
        }
      ],
      "branches": [
        "Pembayaran QR → jalur verifikasi admin sebelum status ditandai paid.",
        "Akses halaman mengikuti profil/peran dari source."
      ],
      "limitation": "Pemindaian kamera, database aktif, dan cetak perangkat belum diverifikasi; tidak mengklaim peningkatan waktu transaksi."
    },
    "pipelineExplanation": {
      "intro": "Arsitektur memisahkan antarmuka Flutter, state Provider, repository data, dan cache perangkat.",
      "steps": [
        {
          "title": "Tampilkan halaman Flutter",
          "input": "State akun, produk, dan transaksi.",
          "description": "Widget menyusun halaman katalog, keranjang, inventori, dan laporan.",
          "output": "Kontrol yang dapat dipakai pengguna."
        },
        {
          "title": "Kelola state",
          "input": "Perubahan auth, produk, atau keranjang.",
          "description": "Provider/ChangeNotifier memberi notifikasi agar UI mengikuti perubahan data.",
          "output": "State yang dapat dibaca widget."
        },
        {
          "title": "Akses repository",
          "input": "Permintaan baca/tulis dari halaman atau state.",
          "description": "Repository membentuk operasi Supabase untuk resource produk, profil, dan transaksi.",
          "output": "Respons data atau kegagalan operasi."
        },
        {
          "title": "Simpan dan gunakan cache",
          "input": "Transaksi atau produk yang diperoleh.",
          "description": "Local store memakai SQLite untuk menyimpan salinan data tertentu. Ini tidak membuktikan semua fitur dapat bekerja offline.",
          "output": "Salinan data lokal dan hasil yang ditampilkan."
        }
      ],
      "branches": [
        "Repository transaksi menyimpan cache setelah pencatatan server.",
        "Jalur baca tertentu menggunakan penanganan kegagalan dan cache; cakupannya mengikuti implementasi masing-masing repository."
      ],
      "limitation": "Runtime terhambat cache Pub. Konsistensi database, kebijakan akses, dan skenario offline penuh belum diuji."
    }
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
      "Masuk ke aplikasi",
      "Buka data master",
      "Tambah atau ubah data",
      "Susun rencana studi"
    ],
    "architecture": [
      "Pilih route",
      "Kelola sesi dan query",
      "Kirim permintaan API",
      "Perbarui tampilan"
    ],
    "verification": "Build lokal lolos dan halaman masuk berhasil dibuka pada server Vite lokal. Lint repo menghasilkan 13 error; tidak tersedia script test. Alur backend dan akun belum diverifikasi saat runtime. Aset preview memperlihatkan halaman masuk, bukan dashboard setelah login.",
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
    "caption": "Aset tampilan project yang sudah tersedia di portofolio.",
    "role": "Pembuat aplikasi.",
    "workflowExplanation": {
      "intro": "Alur administrasi menggunakan halaman login demo, data master, lalu rencana studi. Operasi data ditelusuri dari source; integrasi backend belum diuji menyeluruh.",
      "steps": [
        {
          "title": "Masuk ke aplikasi",
          "input": "Isian login.",
          "description": "Lapisan autentikasi demo memuat pengguna dan menyimpan state sesi di browser. Ini bukan autentikasi JWT yang sudah diverifikasi.",
          "output": "State pengguna untuk navigasi admin."
        },
        {
          "title": "Buka data master",
          "input": "Pilihan mahasiswa, dosen, atau mata kuliah.",
          "description": "Halaman memanggil lapisan API untuk menampilkan data resource yang dipilih.",
          "output": "Daftar data dan kontrol pengelolaan."
        },
        {
          "title": "Tambah atau ubah data",
          "input": "Isian formulir dan identitas record.",
          "description": "Fungsi API membentuk permintaan penambahan, perubahan, atau penghapusan. UI memberikan umpan balik terhadap hasilnya.",
          "output": "Data yang dimuat ulang atau pesan kegagalan."
        },
        {
          "title": "Susun rencana studi",
          "input": "Data kelas, mahasiswa, dosen, dan mata kuliah.",
          "description": "Halaman memuat data master secara paralel dan menyediakan pilihan yang menghubungkan data akademik.",
          "output": "Tampilan pengelolaan rencana studi."
        }
      ],
      "branches": [
        "Sesi tidak tersedia → akses halaman admin diperiksa oleh ProtectedRoute.",
        "Permintaan data gagal → jalur error ditangani pada pemanggilan API/halaman; keberhasilan server belum diasumsikan."
      ],
      "limitation": "Halaman masuk lokal dan build berhasil; alur login, CRUD, serta penyimpanan backend belum diuji end-to-end."
    },
    "pipelineExplanation": {
      "intro": "Frontend berlapis: router memilih halaman, Context menyimpan sesi demo, hook/lapisan API mengambil data, lalu halaman merender hasil.",
      "steps": [
        {
          "title": "Pilih route",
          "input": "URL halaman.",
          "description": "React Router memasangkan URL dengan layout autentikasi atau admin. ProtectedRoute memeriksa akses sisi klien.",
          "output": "Halaman aktif."
        },
        {
          "title": "Kelola sesi dan query",
          "input": "State pengguna serta kebutuhan data halaman.",
          "description": "Context menyediakan sesi; hook React Query mengelola pemuatan/perubahan data pada resource yang menggunakan hook tersebut.",
          "output": "Status loading, data, atau error."
        },
        {
          "title": "Kirim permintaan API",
          "input": "Resource dan parameter operasi.",
          "description": "Axios menjalankan GET, POST, PUT, atau DELETE melalui fungsi API project.",
          "output": "Respons resource akademik."
        },
        {
          "title": "Perbarui tampilan",
          "input": "Respons server atau kegagalan.",
          "description": "State halaman dan query memperbarui tabel/formulir serta umpan balik pengguna.",
          "output": "UI akademik terbaru."
        }
      ],
      "branches": [
        "Script serve menyediakan API demo json-server. Hubungan deployment dengan backend aktif belum diverifikasi.",
        "Tidak semua halaman diasumsikan memakai React Query; halaman rencana studi juga memuat data melalui fungsi API secara langsung."
      ],
      "limitation": "Tidak menampilkan isi data akun, konfigurasi endpoint internal, atau mekanisme autentikasi sensitif."
    }
  },
  {
    "id": 4,
    "slug": "gotravel",
    "title": "UI/UX GoTravel: Sistem Tiket Travel",
    "image": "gotravel.png",
    "category": "UI/UX Design",
    "summary": "Eksplorasi antarmuka mobile untuk layanan perjalanan, dibuat melalui Figma.",
    "paragraphs": [
      "GoTravel adalah desain UI/UX mobile untuk layanan perjalanan. Homepage menampilkan banner, pencarian tempat, dan kartu kota. File Figma dapat diakses dalam mode lihat dan memuat variasi layar homepage, pemesanan, informasi tiket, serta tiket digital.",
      "Layar Pesan memuat kelas layanan, kota keberangkatan, kota tujuan, tanggal, waktu, jumlah penumpang, dan tombol pemilihan kursi. Layar Info Pemesanan menampilkan formulir kontak serta rincian harga dan tombol pembayaran. Overview canvas juga memperlihatkan variasi pemilihan kursi dan tiket dengan QR.",
      "Alur yang didokumentasikan adalah susunan layar desain: pencarian tujuan, pengisian perjalanan, informasi pemesanan, dan tiket. Ini bukan bukti pembayaran, backend, atau pemesanan sungguhan. Riset pengguna, proses wireframe, serta hasil pengujian usability belum diberikan sehingga tidak diklaim."
    ],
    "features": [
      "Homepage dengan pencarian dan kartu tujuan",
      "Form desain rute, tanggal, waktu, dan jumlah penumpang",
      "Variasi layar pemilihan kursi",
      "Informasi pemesanan serta rincian harga",
      "Layar tiket digital dengan QR pada canvas"
    ],
    "stack": [
      [
        "Figma",
        "Desain",
        "Media desain antarmuka dan akses file desain, bukan runtime aplikasi."
      ]
    ],
    "workflow": [
      "Jelajahi tujuan",
      "Isi perjalanan",
      "Pilih kursi",
      "Tinjau pemesanan",
      "Lihat tiket"
    ],
    "architecture": [
      "Homepage",
      "Frame perjalanan",
      "Frame konfirmasi",
      "Frame keluaran"
    ],
    "verification": "File Figma dibuka dalam mode lihat. Overview canvas dan layar setelah mengetik destinasi ditinjau langsung. Hubungan seluruh interaksi prototype belum diuji end-to-end. Tidak ada dependency, endpoint, database, atau build aplikasi untuk desain ini.",
    "links": [
      {
        "label": "Desain Figma",
        "href": "https://www.figma.com/design/TV8WImVbNcfBnTDvqfjNlF/Untitled?node-id=0-1"
      }
    ],
    "challenges": [],
    "status": "Desain Figma · screen ditinjau",
    "design": true,
    "alt": "Preview UI/UX GoTravel: Sistem Tiket Travel",
    "caption": "Aset tampilan project yang sudah tersedia di portofolio.",
    "role": "Desainer UI/UX.",
    "workflowExplanation": {
      "intro": "Workflow GoTravel adalah urutan layar desain Figma yang terlihat, bukan proses transaksi yang sudah berjalan di server.",
      "steps": [
        {
          "title": "Jelajahi tujuan",
          "input": "Homepage dengan pencarian dan kartu kota.",
          "description": "Desain memberi titik awal untuk memilih tujuan perjalanan melalui hierarki konten mobile.",
          "output": "Konteks tujuan perjalanan."
        },
        {
          "title": "Isi perjalanan",
          "input": "Layar Pesan.",
          "description": "Screen menampilkan kelas layanan, kota asal/tujuan, tanggal, waktu, serta jumlah penumpang.",
          "output": "Rincian perjalanan pada desain."
        },
        {
          "title": "Pilih kursi",
          "input": "Tombol Pilih Kursi dan variasi screen kursi.",
          "description": "Canvas menyediakan variasi pemilihan kursi. Validasi ketersediaan kursi sungguhan tidak dibuktikan oleh desain.",
          "output": "Representasi kursi yang dipilih."
        },
        {
          "title": "Tinjau pemesanan",
          "input": "Screen Info Pemesanan.",
          "description": "Desain menampilkan formulir kontak, rincian harga, metode pembayaran, dan tombol Bayar.",
          "output": "Ringkasan pemesanan pada desain."
        },
        {
          "title": "Lihat tiket",
          "input": "Screen tiket digital.",
          "description": "Frame tiket memperlihatkan informasi perjalanan dan QR. Tidak ada bukti penerbitan tiket oleh sistem backend.",
          "output": "Preview tiket digital."
        }
      ],
      "branches": [
        "Terdapat beberapa variasi frame pada canvas. Koneksi seluruh interaksi prototype belum diuji end-to-end."
      ],
      "limitation": "Tidak mengklaim pembayaran berhasil, kursi terpesan, atau QR dapat divalidasi oleh sistem nyata."
    },
    "pipelineExplanation": {
      "intro": "Pipeline di sini menjelaskan struktur artefak desain. Tahapan riset, wireframe, dan usability tidak ditambahkan karena belum ada buktinya.",
      "steps": [
        {
          "title": "Homepage",
          "input": "Frame homepage yang tersedia.",
          "description": "Banner, pencarian, dan pilihan kota membentuk titik masuk desain.",
          "output": "Arah menuju informasi perjalanan."
        },
        {
          "title": "Frame perjalanan",
          "input": "Screen setelah mengetik destinasi.",
          "description": "Elemen form disusun untuk merinci layanan, rute, tanggal, dan penumpang.",
          "output": "Layar pemesanan terstruktur."
        },
        {
          "title": "Frame konfirmasi",
          "input": "Variasi kursi dan Info Pemesanan.",
          "description": "Canvas memisahkan pilihan kursi dan ringkasan kontak/harga ke screen tersendiri.",
          "output": "Rangkaian screen konfirmasi."
        },
        {
          "title": "Frame keluaran",
          "input": "Variasi tiket digital.",
          "description": "Desain merepresentasikan keluaran yang diharapkan berupa tiket dengan QR.",
          "output": "Artefak visual tiket."
        }
      ],
      "branches": [
        "Figma dipakai sebagai alat desain dan prototype; tidak ada proses build kode, API, atau database yang terverifikasi."
      ],
      "limitation": "Susunan frame bukan bukti proses riset atau otomatisasi pemesanan."
    }
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
      "Isi identitas",
      "Nilai lima indikator",
      "Tambahkan evaluasi",
      "Hitung dan baca laporan",
      "Cetak atau revisi"
    ],
    "architecture": [
      "Masukan demo HTML",
      "Perhitungan demo",
      "Render laporan demo",
      "Ekspor demo",
      "Jalur asli PHP — terpisah"
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
    "caption": "Aset tampilan project yang sudah tersedia di portofolio.",
    "role": "Pembuat aplikasi.",
    "workflowExplanation": {
      "intro": "Alur berikut berlaku untuk demo HTML yang dapat dibuka dari portofolio. Versi ini berisi lima indikator dan berjalan seluruhnya di browser.",
      "steps": [
        {
          "title": "Isi identitas",
          "input": "Sekolah, pelajaran, kelas, semester, penilai, penyusun, tanggal, dan kota.",
          "description": "Form memvalidasi isian yang wajib. Tombol Isi Data Contoh menyediakan data fiktif untuk mencoba aplikasi.",
          "output": "Identitas laporan dalam memori halaman."
        },
        {
          "title": "Nilai lima indikator",
          "input": "Pilihan skor 1–3 untuk tiap indikator.",
          "description": "Kriteria dijelaskan sesuai pilihan dan indikator kemajuan diperbarui.",
          "output": "Lima skor yang sudah diisi."
        },
        {
          "title": "Tambahkan evaluasi",
          "input": "Catatan temuan dan saran.",
          "description": "Form mewajibkan catatan sebelum menampilkan hasil penilaian.",
          "output": "Catatan yang menyertai skor."
        },
        {
          "title": "Hitung dan baca laporan",
          "input": "Total skor maksimal 15 dan identitas.",
          "description": "Nilai dibulatkan dari total/15 × 100, lalu dipetakan ke predikat. Laporan memuat rekap kategori, catatan, dan bagian tanda tangan.",
          "output": "Nilai skala 100 dan laporan di layar."
        },
        {
          "title": "Cetak atau revisi",
          "input": "Laporan yang sudah ditampilkan.",
          "description": "Cetak / Simpan PDF membuka dialog browser. Edit Penilaian mengembalikan pengguna ke rubrik.",
          "output": "Dokumen cetak/PDF browser atau hasil revisi."
        }
      ],
      "branches": [
        "Isian wajib belum lengkap → form tidak dilanjutkan.",
        "Penilaian baru → meminta konfirmasi sebelum mengosongkan halaman."
      ],
      "limitation": "Data demo hilang saat reload. PDF demo berasal dari browser, bukan mPDF."
    },
    "pipelineExplanation": {
      "intro": "Ada dua implementasi berbeda: pipeline demo HTML dan pipeline aplikasi PHP asli. Keduanya tidak boleh disamakan.",
      "steps": [
        {
          "title": "Masukan demo HTML",
          "input": "Form identitas, lima skor, dan catatan.",
          "description": "Event form ditangani JavaScript tanpa request backend.",
          "output": "State sementara di memori halaman."
        },
        {
          "title": "Perhitungan demo",
          "input": "Skor setiap indikator.",
          "description": "JavaScript menjumlahkan skor dan menormalisasi ke 100 dengan maksimum 15.",
          "output": "Nilai dan predikat."
        },
        {
          "title": "Render laporan demo",
          "input": "Identitas, rekap, dan hasil perhitungan.",
          "description": "DOM laporan diisi kembali dengan data hasil penilaian.",
          "output": "Laporan yang terlihat di browser."
        },
        {
          "title": "Ekspor demo",
          "input": "Aksi Cetak / Simpan PDF.",
          "description": "window.print memanggil fasilitas cetak perangkat. Pengguna memilih menyimpan PDF pada dialog tersebut.",
          "output": "PDF yang dibuat browser."
        },
        {
          "title": "Jalur asli PHP — terpisah",
          "input": "Form identitas dan rubrik asli.",
          "description": "File PHP mengolah data formulir; generate_pdf.php menyusun HTML dan memanggil mPDF. Jalur ini tidak dijalankan oleh demo HTML.",
          "output": "PDF server pada implementasi asli, belum diuji penuh."
        }
      ],
      "branches": [
        "Demo memakai lima indikator. Rubrik serta rumus PHP asli berbeda dan memerlukan validasi tersendiri."
      ],
      "limitation": "Sintaks PHP dan homepage lokal telah diperiksa; pembuatan PDF asli belum terverifikasi end-to-end."
    }
  },
  {
    "id": 6,
    "slug": "kartu-ulang-tahun",
    "title": "Kartu Ucapan Ulang Tahun Interaktif",
    "image": "kartu-ulang-tahun.png",
    "category": "Web Development",
    "summary": "Kartu digital lima halaman dengan transisi, navigasi, dan perayaan confetti.",
    "paragraphs": [
      "Kartu ini menyampaikan ucapan secara bertahap. Pengunjung membuka layar sambutan, kemudian membaca lima halaman yang berisi ucapan, apresiasi, dan harapan.",
      "Seluruh markup, styling, serta logika berada dalam satu file HTML. JavaScript mengganti halaman aktif, memperbarui indikator, dan memindahkan fokus heading agar navigasi keyboard mengikuti konten baru.",
      "Tombol, panah keyboard, serta gestur horizontal ditangani oleh event listener. Halaman terakhir menampilkan confetti dan tombol baca ulang. Saat preferensi reduced motion aktif, efek gerak dinonaktifkan. Tidak ada backend, akun, atau database."
    ],
    "features": [
      "Layar pembuka dan lima halaman ucapan",
      "Navigasi tombol dan indikator halaman",
      "Tombol panah keyboard",
      "Listener gestur geser horizontal",
      "Confetti dan penghormatan preferensi reduced motion"
    ],
    "stack": [
      [
        "HTML5",
        "Struktur",
        "Menyusun halaman ucapan, heading, dan kontrol berlabel."
      ],
      [
        "CSS3",
        "Tampilan",
        "Mengatur breakpoint mobile, transisi, partikel, dan reduced motion."
      ],
      [
        "Vanilla JavaScript",
        "Interaksi",
        "Mengganti halaman, mengelola fokus, serta membuat confetti sementara."
      ]
    ],
    "workflow": [
      "Buka kartu",
      "Pilih cara navigasi",
      "Baca ucapan berikutnya",
      "Rayakan penutup",
      "Baca ulang"
    ],
    "architecture": [
      "Muat dokumen",
      "Terima event",
      "Ubah state halaman",
      "Jalankan efek seperlunya"
    ],
    "verification": "Demo dijalankan di browser: pembuka, tombol lanjut, panah keyboard, indikator halaman, serta penutup dengan 45 elemen confetti berhasil diperiksa. Tidak membutuhkan build atau dependency tambahan. Listener gestur dan reduced motion ditinjau statis. Gestur sentuh memerlukan uji perangkat nyata untuk memastikan perilaku browser spesifik.",
    "links": [
      {
        "label": "Buka kartu",
        "href": "/demos/kartu-ulang-tahun/index.html"
      }
    ],
    "challenges": [
      "Halaman yang tidak aktif disembunyikan dan fokus dipindahkan ke heading halaman baru.",
      "Confetti dihapus setelah animasi; reduced motion menonaktifkan efek."
    ],
    "status": "Demo HTML interaktif",
    "design": false,
    "alt": "Preview Kartu Ucapan Ulang Tahun Interaktif",
    "caption": "Aset tampilan project yang sudah tersedia di portofolio.",
    "role": "Pembuat aplikasi.",
    "workflowExplanation": {
      "intro": "Pengunjung membaca kartu secara bertahap. Semua navigasi mengubah halaman aktif dalam dokumen HTML yang sama.",
      "steps": [
        {
          "title": "Buka kartu",
          "input": "Tombol pada layar sambutan.",
          "description": "Interaksi membuka konten kartu dan memindahkan fokus ke heading pertama.",
          "output": "Halaman ucapan pertama."
        },
        {
          "title": "Pilih cara navigasi",
          "input": "Tombol lanjut/kembali, indikator, panah keyboard, atau geser horizontal.",
          "description": "Listener menerjemahkan tindakan menjadi indeks halaman yang ingin dibuka.",
          "output": "Permintaan perpindahan halaman."
        },
        {
          "title": "Baca ucapan berikutnya",
          "input": "Indeks halaman yang valid.",
          "description": "Halaman lama disembunyikan, halaman baru ditampilkan, counter diperbarui, dan fokus heading dipindahkan.",
          "output": "Satu halaman aktif dengan posisi baca yang jelas."
        },
        {
          "title": "Rayakan penutup",
          "input": "Halaman kelima.",
          "description": "Aplikasi menambahkan confetti sementara bila reduced motion tidak aktif. Tombol berubah menjadi Baca lagi.",
          "output": "Ucapan penutup dan pilihan mengulang."
        },
        {
          "title": "Baca ulang",
          "input": "Tombol Baca lagi.",
          "description": "Indeks dikembalikan ke awal dan kontrol navigasi diperbarui.",
          "output": "Halaman pertama tanpa memuat backend."
        }
      ],
      "branches": [
        "Kembali pada halaman pertama dinonaktifkan.",
        "Indeks di luar rentang atau sama dengan halaman aktif diabaikan."
      ],
      "limitation": "Gestur sentuh ditinjau dari listener source; perilaku tiap browser HP belum diuji pada perangkat nyata."
    },
    "pipelineExplanation": {
      "intro": "Pipeline bersifat event-driven: satu file memuat struktur, gaya, dan pengendali halaman. Tidak ada API, akun, atau database.",
      "steps": [
        {
          "title": "Muat dokumen",
          "input": "HTML, style, dan script dalam satu file.",
          "description": "Browser membentuk lima section, kontrol halaman, dan layar sambutan.",
          "output": "Tampilan pembuka dan referensi elemen DOM."
        },
        {
          "title": "Terima event",
          "input": "Klik, keydown, touchstart, atau touchend.",
          "description": "Script membaca arah/tujuan navigasi serta memeriksa kondisi yang perlu diabaikan.",
          "output": "Indeks halaman berikutnya."
        },
        {
          "title": "Ubah state halaman",
          "input": "Indeks yang diterima.",
          "description": "show(index) mengubah hidden, kelas aktif, indikator, dan fokus heading.",
          "output": "DOM yang sesuai halaman aktif."
        },
        {
          "title": "Jalankan efek seperlunya",
          "input": "Halaman penutup serta preferensi reduced motion.",
          "description": "Animasi dijalankan sesuai preferensi. Elemen confetti dihapus setelah waktunya selesai.",
          "output": "Efek visual sementara tanpa penyimpanan server."
        }
      ],
      "branches": [
        "Reduced motion → animasi dan partikel dinonaktifkan.",
        "Aksi navigasi keyboard tidak diproses sebelum kartu dibuka."
      ],
      "limitation": "Confetti merupakan efek DOM lokal; tidak ada proses generasi AI atau penyimpanan pesan."
    }
  },
  {
    "id": 7,
    "slug": "teduh",
    "title": "Teduh — Teman Cerita Berbasis AI",
    "image": "teduh.png",
    "category": "Web Development",
    "summary": "Ruang bercerita berbahasa Indonesia dengan mode percakapan, kata penyemangat, dan latihan napas.",
    "paragraphs": [
      "Teduh menyediakan ruang percakapan, koleksi kata penyemangat, serta latihan napas dan grounding. Pengunjung menggunakan aplikasi tanpa membuat akun. Aplikasi bukan pengganti layanan profesional.",
      "Frontend React berkomunikasi dengan pipeline chat di server. Pipeline memvalidasi masukan, melakukan pemeriksaan risiko, dan mengirim jawaban bertahap melalui Server-Sent Events. Implementasi Express dan Vercel Function memakai penanganan chat bersama.",
      "Dalam mode demo, jawaban berasal dari respons contoh lokal yang dikirim bertahap. Adapter penyedia AI kompatibel OpenAI tersedia pada source, tetapi koneksi model eksternal memerlukan konfigurasi server dan belum diverifikasi pada audit ini.",
      "Riwayat percakapan disimpan terbatas pada browser. Mode tanpa simpan menghapus riwayat lokal dan menjaga percakapan di memori halaman. Tidak ada database aplikasi pada snapshot yang diperiksa."
    ],
    "features": [
      "Tiga mode percakapan dan respons bertahap",
      "Kata penyemangat serta favorit",
      "Latihan napas dan grounding",
      "Riwayat lokal dan mode tanpa simpan",
      "Pemeriksaan risiko dan jalur bantuan pada pipeline"
    ],
    "stack": [
      [
        "React / TypeScript",
        "Frontend",
        "Mengelola halaman, mode chat, serta tipe pesan."
      ],
      [
        "Tailwind CSS",
        "Tampilan",
        "Menyusun styling bersama stylesheet aplikasi."
      ],
      [
        "Express",
        "Backend",
        "Melayani pipeline chat dan endpoint kesehatan pada server Node."
      ],
      [
        "Vercel Functions",
        "Deployment API",
        "Membungkus handler chat yang sama tanpa membuka port server."
      ],
      [
        "SSE",
        "Transport",
        "Mengirim status dan potongan jawaban secara bertahap ke browser."
      ],
      [
        "localStorage",
        "Penyimpanan",
        "Menyimpan riwayat terbatas, preferensi, dan favorit pada perangkat."
      ],
      [
        "Vitest / Testing Library",
        "Pengujian",
        "Menguji pipeline, storage, protokol SSE, dan komponen chat."
      ],
      [
        "Vite",
        "Build",
        "Menghasilkan bundle frontend untuk hosting."
      ]
    ],
    "workflow": [
      "Pilih ruang dan mode",
      "Tulis pesan",
      "Periksa permintaan",
      "Terima respons bertahap",
      "Tentukan penyimpanan"
    ],
    "architecture": [
      "Bangun UI dan konteks",
      "Masuk ke handler",
      "Pemeriksaan dan pemilihan jalur",
      "Hasilkan respons",
      "Kirim SSE dan render"
    ],
    "verification": "74 test lolos pada tujuh berkas; build dan lint lolos. Server demo lokal merespons health HTTP 200 dan chat HTTP 200 dengan text/event-stream serta 18 event SSE pada pesan pengujian. Test menggunakan mode demo dan mock, bukan bukti validasi klinis atau keberhasilan model eksternal. Status layanan AI pada deployment publik belum diuji dalam audit ini.",
    "links": [
      {
        "label": "Website",
        "href": "https://whay-no.vercel.app/"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/Nadzirin26/whay-no"
      }
    ],
    "challenges": [
      "Handler bersama dipakai Express dan Vercel sehingga pipeline tidak diduplikasi.",
      "Penyimpanan browser memiliki fallback saat data rusak atau tidak tersedia."
    ],
    "status": "Source ditinjau",
    "design": false,
    "alt": "Preview Teduh — Teman Cerita Berbasis AI",
    "caption": "Aset tampilan project yang sudah tersedia di portofolio.",
    "role": "Pembuat aplikasi.",
    "workflowExplanation": {
      "intro": "Alur percakapan menggabungkan pilihan mode, pemeriksaan masukan, respons bertahap, dan keputusan penyimpanan lokal.",
      "steps": [
        {
          "title": "Pilih ruang dan mode",
          "input": "Pilihan bercerita, saran, atau penyemangat.",
          "description": "Halaman chat memakai mode pilihan sebagai konteks untuk permintaan jawaban. Pengguna dapat memilih mode tanpa simpan.",
          "output": "Konteks percakapan dan preferensi penyimpanan."
        },
        {
          "title": "Tulis pesan",
          "input": "Teks yang diketik pengguna.",
          "description": "Client menyiapkan pesan dan konteks percakapan untuk handler chat. Tidak ada pembuatan akun pada aplikasi.",
          "output": "Permintaan percakapan."
        },
        {
          "title": "Periksa permintaan",
          "input": "Payload pesan dan mode.",
          "description": "Server memvalidasi masukan dan menjalankan pemeriksaan risiko sebelum menentukan jalur respons.",
          "output": "Status pemeriksaan dan pilihan jalur jawaban."
        },
        {
          "title": "Terima respons bertahap",
          "input": "Jawaban contoh demo atau keluaran adapter AI yang terkonfigurasi.",
          "description": "Event SSE membawa status dan potongan teks ke browser. UI menampilkan jawaban secara bertahap.",
          "output": "Pesan jawaban dan status percakapan."
        },
        {
          "title": "Tentukan penyimpanan",
          "input": "Percakapan dan preferensi pengguna.",
          "description": "Mode biasa menyimpan riwayat terbatas lokal. Mode tanpa simpan menghapus riwayat lokal dan mempertahankan pesan di memori halaman.",
          "output": "Riwayat perangkat atau percakapan sementara."
        }
      ],
      "branches": [
        "Risiko yang memerlukan bantuan → jalur respons terkurasi dan kartu bantuan; bukan diagnosis klinis.",
        "Mode tanpa simpan → riwayat lokal dihapus; ini bukan janji tentang retensi penyedia eksternal."
      ],
      "limitation": "Audit runtime memakai mode demo. Layanan model AI eksternal dan status deployment publik tidak diasumsikan aktif."
    },
    "pipelineExplanation": {
      "intro": "Frontend dan backend dihubungkan melalui handler chat bersama. Jalur demo dan adapter AI memiliki keluaran streaming yang dikonsumsi UI.",
      "steps": [
        {
          "title": "Bangun UI dan konteks",
          "input": "State React, mode, serta pesan.",
          "description": "Client TypeScript menyusun permintaan dan menyiapkan tampilan loading/streaming.",
          "output": "Payload untuk endpoint chat."
        },
        {
          "title": "Masuk ke handler",
          "input": "Permintaan /api/chat.",
          "description": "Express lokal atau Vercel Function menggunakan handler pipeline yang sama. Ini menghindari duplikasi logika chat.",
          "output": "Permintaan tervalidasi untuk pemrosesan."
        },
        {
          "title": "Pemeriksaan dan pemilihan jalur",
          "input": "Pesan dan hasil pemeriksaan risiko.",
          "description": "Pipeline menjalankan aturan pemeriksaan serta menentukan respons terkurasi, demo, atau adapter penyedia yang tersedia.",
          "output": "Jalur respons yang diizinkan."
        },
        {
          "title": "Hasilkan respons",
          "input": "Konteks dan mode percakapan.",
          "description": "Demo memakai teks contoh lokal. Adapter kompatibel OpenAI memakai konfigurasi server bila disediakan.",
          "output": "Potongan jawaban atau status kegagalan."
        },
        {
          "title": "Kirim SSE dan render",
          "input": "Event status serta potongan teks.",
          "description": "Browser membaca event dan memperbarui pesan. Preferensi privat mengatur apakah riwayat ditulis ke localStorage.",
          "output": "Jawaban di UI dan penyimpanan lokal sesuai pilihan."
        }
      ],
      "branches": [
        "Mode demo → tidak memanggil penyedia model eksternal.",
        "Jalur risiko tertentu → respons terkurasi tanpa generasi model.",
        "Penyimpanan browser ditolak/rusak → fallback dan pemberitahuan sesuai implementasi."
      ],
      "limitation": "Tidak mempublikasikan aturan deteksi sensitif, secret, atau isi percakapan nyata. Hasil test bukan bukti validasi klinis."
    }
  }
];
