# Audit portofolio dan metode

- React 19 / Vite 8 / Tailwind CSS 4, JavaScript ESM; Framer Motion untuk reveal.
- Data kartu: src/data/index.js. Renderer: src/sections/Projects.jsx.
- Tidak ada router sebelumnya. Detail memakai path /projects/<slug> dan tautan browser biasa; satu template, satu file data; refresh dilayani rewrite Vercel khusus /projects/:slug agar demo HTML tetap berfungsi.
- Warna aktual di override CSS: charcoal #202523, sage #c4d2b0, copper #dbab88, panel krem. Font sistem dan Georgia pada nama. Spacing shell responsif dan tombol yang sama dipakai ulang.
- Source yang diunduh berada dalam tmp/ yang diabaikan Git dan ESLint. Tidak ada file .env, data akun, isi database, konfigurasi credential, atau foto pribadi baru yang dimasukkan ke dokumentasi.
- Tanggal audit: 30 Oktober 2026. Hasil perintah adalah hasil lokal snapshot source saat audit, bukan jaminan status deployment eksternal.
- Peran pribadi belum dikonfirmasi pengguna; tidak mengarang pembagian kontribusi. Konten peran disiapkan sebagai field opsional.
