# Aplikasi Penilaian Rencana Pembelajaran

Audit: 30 Oktober 2026.

## Bukti source

- Source asli ditemukan pada folder Gajian/Gajian: composer.json, index.php, identitas.php, penilaian.php, hasil.php, generate_pdf.php.
- composer.json: mpdf/mpdf dan dompdf/dompdf; generate_pdf.php secara nyata memakai Mpdf.
- Bootstrap 5.3.3 dirujuk pada halaman PHP.
- public/demos/penilaian-rencana-pembelajaran/index.html: lima indikator, perhitungan 15 -> 100, textContent laporan, window.print.
- php -l: lima file lolos. Demo HTML tidak memiliki dependency atau test runner.
- Perlu konfirmasi: kepemilikan/kontribusi terhadap source PHP dan validasi rumus seluruh rubrik.

## Verifikasi

Kelima file PHP lolos pemeriksaan sintaks. Demo HTML ditinjau dari source yang dipublikasikan. Integrasi PDF PHP perlu pengujian menyeluruh; hasil cetak browser bergantung pada perangkat. Tidak mengklaim versi demo mencakup seluruh indikator aplikasi asli.

## Peran

BUTUH INPUT: pembagian kontribusi pribadi belum diberikan. Tidak dimasukkan ke konten publik.

## Batasan

Source lokal hasil audit tidak berarti sama persis dengan deployment publik. Klaim metrik tanpa benchmark tidak dipublikasikan. Tidak ada secret, data akun, isi basis data, atau foto pribadi baru dalam catatan ini.
`nVerifikasi tambahan: homepage PHP HTTP 200. Demo HTML di browser: isi data contoh, lima skor 3, catatan, hasil 100 / Sangat Baik. PDF asli belum diuji end-to-end.
