# Sistem Informasi Akademik

Audit: 30 Oktober 2026.

## Bukti source

- package.json: react-router-dom, @tanstack/react-query, axios, Tailwind, json-server; tidak ada script test.
- src/main.jsx: RouterProvider dan definisi route.
- src/Utils/Contexts/AuthContext.jsx: state sesi demo.
- src/Utils/Helpers/Apis/MahasiswaApi.jsx: GET/POST/PUT/DELETE resource mahasiswa.
- src/Utils/Helpers/Hooks/: hook React Query.
- src/Pages/Admin/RencanaStudi/RencanaStudi.jsx: pemuatan master secara paralel.
- npm run build exit 0; npm run lint: 13 error. Klaim JWT dan peningkatan 30% tidak didukung bukti snapshot.

## Verifikasi

Build lokal lolos. Lint repo menghasilkan 13 error; tidak tersedia script test. Alur backend dan akun belum diverifikasi saat runtime. Aset preview memperlihatkan halaman masuk, bukan dashboard setelah login.

## Peran

BUTUH INPUT: pembagian kontribusi pribadi belum diberikan. Tidak dimasukkan ke konten publik.

## Batasan

Source lokal hasil audit tidak berarti sama persis dengan deployment publik. Klaim metrik tanpa benchmark tidak dipublikasikan. Tidak ada secret, data akun, isi basis data, atau foto pribadi baru dalam catatan ini.
