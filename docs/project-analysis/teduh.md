# Teduh — Teman Cerita Berbasis AI

Audit: 30 Oktober 2026.

## Bukti source

- package.json: React, TypeScript, Express, Tailwind, Vitest, Testing Library, Vite.
- src/App.tsx: navigasi hash dan halaman.
- src/pages/Chat.tsx dan src/lib/storage.ts: chat, riwayat, preferensi privat.
- server/chat.ts, server/providers/index.ts: handler bersama, demo dan adapter streaming.
- api/chat.ts dan api/health.ts: pembungkus Vercel.
- tests/: 74 test dalam 7 file lolos; build dan lint exit 0.
- Konfigurasi rahasia tidak dibaca atau disalin. Koneksi AI eksternal tidak diuji.

## Verifikasi

74 test lolos pada tujuh berkas; build dan lint lolos. Test menggunakan mode demo dan mock, bukan bukti validasi klinis atau keberhasilan model eksternal. Status layanan AI pada deployment publik belum diuji dalam audit ini.

## Peran

BUTUH INPUT: pembagian kontribusi pribadi belum diberikan. Tidak dimasukkan ke konten publik.

## Batasan

Source lokal hasil audit tidak berarti sama persis dengan deployment publik. Klaim metrik tanpa benchmark tidak dipublikasikan. Tidak ada secret, data akun, isi basis data, atau foto pribadi baru dalam catatan ini.
Runtime API demo: health HTTP 200; chat HTTP 200, text/event-stream, 18 event SSE untuk pesan pengujian fiktif. Tidak mengirim ke penyedia AI eksternal.
