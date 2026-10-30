# Aplikasi Mobile POS: WarungKu

Audit: 30 Oktober 2026.

## Bukti source

- README.md dan pubspec.yaml: fitur serta dependency.
- lib/main.dart, lib/app.dart: inisialisasi dan struktur aplikasi.
- lib/features/auth/state/auth_controller.dart: Supabase Auth dan profil.
- lib/features/transactions/data/transaction_repository.dart: createOrder, markPaid, cache lokal.
- lib/core/local_db/transaction_local_store.dart dan app_db.dart: cache SQLite.
- docs/supabase_schema_full.sql: definisi skema tersedia; database aktif tidak diuji.
- Hasil runtime: gagal pada cache Pub sebelum build selesai; klaim efisiensi 40% tidak punya bukti benchmark.

## Verifikasi

Analisis statis. flutter pub get, flutter analyze, dan flutter build apk --debug dicoba; proses dependency gagal menulis active_roots pada cache Pub. Build/runtime perangkat belum diverifikasi. Tidak ditemukan test Dart pada repo yang diperiksa. Backend Supabase tidak dimodifikasi.

## Peran

BUTUH INPUT: pembagian kontribusi pribadi belum diberikan. Tidak dimasukkan ke konten publik.

## Batasan

Source lokal hasil audit tidak berarti sama persis dengan deployment publik. Klaim metrik tanpa benchmark tidak dipublikasikan. Tidak ada secret, data akun, isi basis data, atau foto pribadi baru dalam catatan ini.
