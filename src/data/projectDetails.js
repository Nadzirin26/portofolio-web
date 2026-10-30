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
  }
];
