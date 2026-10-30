# Laporan implementasi Detail Project

Tanggal: 30 Oktober 2026. Belum dipush / belum dideploy.

## Hasil fitur

Tujuh kartu memiliki Lihat Detail, satu template di src/pages/ProjectDetail.jsx, konten terstruktur di src/data/projectDetails.js, parser URL di src/lib/projectRoutes.js, tabel teknologi, dua diagram alur yang dapat digeser, gambar lama, peran yang dikonfirmasi, metadata unik, dan tombol kembali. Konfigurasi vercel.json membatasi rewrite ke halaman project. Demo HTML tetap berupa file statis.

## Analisis dan runtime

| Project | Hasil |
| --- | --- |
| Fish It | Source repo, 15 test lolos, build/lint lolos, homepage Vite lokal tampil. |
| WarungKu | Source Flutter dan SQL dianalisis statis. pub get/analyze/build dicoba; gagal pada cache Pub sebelum runtime. Database/perangkat tidak diuji. |
| Akademik | Build lolos, halaman login lokal tampil, 13 error lint bawaan source; tidak ada script test; CRUD backend belum diverifikasi. |
| GoTravel | Desain nonkode; file Figma diakses view-only dan screen perjalanan/pemesanan serta overview kursi/tiket ditinjau. Proses riset dan prototype end-to-end belum diverifikasi. |
| Penilaian | Lima file PHP lolos syntax check, homepage PHP HTTP 200. Demo HTML dijalankan sampai nilai 100 / Sangat Baik. PDF PHP belum diuji menyeluruh. |
| Kartu ulang tahun | Demo browser: pembuka, tombol, ArrowRight, counter halaman 5, dan confetti diverifikasi. Gestur sentuh baru ditinjau statis. |
| Teduh | 74 test lolos, build/lint lolos. API demo health/chat HTTP 200, chat SSE 18 event. Penyedia AI eksternal tidak diuji. |

## BUTUH INPUT / perlu konfirmasi

- GoTravel: jelaskan proses desain (brief, wireframe, iterasi) dan alur prototype yang ingin dipublikasikan. Tidak mengarang riset atau pengujian pengguna.
- WarungKu: lingkungan Flutter/cache yang sehat dan backend uji dengan data fiktif untuk verifikasi perangkat, kamera, dan laporan.
- Akademik: backend uji/data fiktif untuk memverifikasi alur CRUD dan rencana studi.
- Penilaian: perhitungan seluruh rubrik PHP dan hasil PDF perlu uji end-to-end. Demo publik secara eksplisit dijelaskan sebagai versi ringkas berbeda.
- Peran sudah dikonfirmasi: Pembuat aplikasi (keenam project kode), Desainer UI/UX (GoTravel).
- Klaim JWT akademik, peningkatan 30%, efisiensi WarungKu 40%, dan backend CI4/MySQL pada demo Fish It tidak didukung snapshot; sudah dikoreksi pada kartu dan tidak diterbitkan sebagai fakta di detail.

## Berkas

- src/pages/ProjectDetail.jsx: satu template detail dan diagram ringan.
- src/data/projectDetails.js: konten tujuh studi kasus.
- src/lib/projectRoutes.js: validasi URL slug.
- src/App.jsx: memilih home/detail/halaman tidak ditemukan.
- src/sections/Projects.jsx: tombol detail.
- src/data/index.js: koreksi klaim kartu yang tidak didukung source.
- src/index.css: styling detail yang terisolasi.
- vercel.json: deep-link rewrite.
- tests/project-details.test.js dan package.json: pengujian route, kecocokan seluruh kartu, aset, dan konten.
- .gitignore dan eslint.config.js: mengabaikan source audit sementara.
- docs/project-analysis/*.md: bukti per project dan laporan ini.

## Menjalankan portofolio

npm ci
npm run dev -- --host 0.0.0.0 --port 5190
npm test
npm run lint
npm run build

Preview pada http://localhost:5190/ dan misalnya /projects/teduh. Refresh deep link diuji lokal; perilaku rewrite Vercel perlu diverifikasi sesudah deployment yang diizinkan pengguna.

## Batasan

Repo sumber tidak dimodifikasi atau dipush. Dependency dipasang ke folder audit yang diabaikan Git. Peringatan audit dependency muncul pada repo yang ditinjau; tidak dilakukan upgrade otomatis karena di luar cakupan. Tidak ada secret, isi database akun, data wajah baru, atau detail eksploitasi yang ditambahkan ke dokumen/konten.

## Verifikasi akhir portofolio

- npm test: 3 test lolos (route invalid/deep link, cakupan semua kartu + aset + field peran, dan rewrite tanpa menangkap preview PNG/demo).
- npm run lint dan npm run build: lolos.
- Browser: tujuh URL detail dibuka langsung, title unik dan gambar berhasil dimuat, serta bagian peran hadir setelah konfirmasi pengguna.
- Refresh detail, kembali ke home, tujuh tombol Lihat Detail: lolos.
- Viewport desktop 1280 dan mobile 390/320: tidak ada overflow horizontal halaman. Tabel dan diagram lebar memiliki scroll di container yang fokusable.
- Dua demo HTML tetap dapat diakses dan dijalankan. Riwayat commit menyimpan fondasi, tujuh project secara terpisah, dan finalisasi hasil audit.
- Belum mengklaim deep link produksi teruji; perlu pemeriksaan Vercel setelah push/deploy diizinkan.
