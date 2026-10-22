# Akmal Shaum Nadzirin — Portfolio

Portofolio responsif berbasis React, Vite, dan Tailwind CSS, mengikuti desain Figma dengan warna charcoal–sage. Satu website melayani desktop, tablet, dan HP.

## Menjalankan lokal

```sh
npm install
npm run dev
```

## Pemeriksaan dan produksi

```sh
npm run lint
npm run build
npm run preview
```

## Struktur

- `src/data/index.js`: profil, skill, 5 proyek, 2 pendidikan, dan 18 sertifikat.
- `src/sections/`: Home, Projects, About, dan Journey.
- `src/components/`: navigasi responsif dan kontak.
- `src/index.css`: sistem visual, breakpoint, dan dialog sertifikat.
- `public/`: CV dan gambar sertifikat asli.

Foto menggunakan file asli 1200 × 1600, rasio tetap 3:4, dan `object-fit: contain`. Dialog sertifikat mendukung keyboard, Escape, pembatasan fokus bawaan browser, serta pengembalian fokus ke tombol pembuka.

## Deployment

Build command: `npm run build`. Output directory: `dist`. Deploy dari akar repository, bukan subfolder `portfolio-akmal/` yang merupakan salinan lama. Website: https://portofolio-web-azure-phi.vercel.app/.

Konten dan tautan mengikuti portofolio sebelumnya. Email masih placeholder `email.lu@gmail.com`; dua tautan proyek GitHub masih menuju profil pengguna sesuai data sumber.
