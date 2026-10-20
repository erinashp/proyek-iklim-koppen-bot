# Deployment Laravel ke Vercel dengan Supabase

Panduan ini menjelaskan deployment project ke Vercel dan penggunaan PostgreSQL Supabase. Tidak ada URL deployment, password, atau API key yang disimpan di repository.

## 1. Persiapan lokal

Pastikan PHP, Composer, Node.js, dan Vercel CLI tersedia. Dari root project, jalankan:

```bash
composer install
npm ci
npm run build
php artisan test
```

Jangan commit file `.env`, `.vercel`, token, password database, atau service-role key.

## 2. Membuat database Supabase

1. Buat project di Supabase.
2. Buka **Connect** pada dashboard project.
3. Pilih **Direct connection** untuk migrasi dari komputer yang mendukung IPv6, atau **Session pooler** bila koneksi langsung tidak tersedia.
4. Salin connection string PostgreSQL dan ganti placeholder password dengan password database project.

Tambahkan ke `.env` lokal:

```dotenv
DB_CONNECTION=pgsql
DB_URL=postgresql://USER:PASSWORD@HOST:PORT/postgres
DB_SSLMODE=require
```

Connection string bersifat rahasia. Jangan menaruh nilainya di `vercel.json` atau file yang masuk Git.

Uji koneksi dan jalankan migrasi:

```bash
php artisan migrate:status
php artisan migrate --force
```

Jalankan seeder hanya jika isinya memang aman untuk Production:

```bash
php artisan db:seed --force
```

## 3. Menghubungkan project ke Vercel

Login dan hubungkan folder lokal:

```bash
npx vercel login
npx vercel link
```

Pilih akun/team serta project yang benar. Konfigurasi build dan route serverless sudah tersedia di `vercel.json`.

## 4. Environment variables Vercel

Buka **Project → Settings → Environment Variables** dan tambahkan nilai berikut untuk environment **Production**:

| Nama | Nilai |
| --- | --- |
| `APP_KEY` | Hasil `php artisan key:generate --show` |
| `APP_URL` | URL Production milik deployment atau custom domain |
| `DB_URL` | Connection string Session Pooler Supabase |
| `UPLOAD_DISK` | Gunakan `s3` untuk Supabase Storage |
| `AWS_ACCESS_KEY_ID` | S3 access key dari Supabase Storage |
| `AWS_SECRET_ACCESS_KEY` | S3 secret key dari Supabase Storage |
| `AWS_DEFAULT_REGION` | Region yang ditampilkan Supabase |
| `AWS_BUCKET` | Nama bucket untuk upload aplikasi |
| `AWS_URL` | Kosongkan; file disajikan melalui route Laravel |
| `AWS_ENDPOINT` | Endpoint S3 Supabase yang berakhir dengan `/storage/v1/s3` |
| `AWS_USE_PATH_STYLE_ENDPOINT` | Gunakan `true` |

`APP_URL` sengaja tidak ditulis permanen di repository. Nilainya berbeda untuk setiap akun, project, atau custom domain.

Konfigurasi non-rahasia seperti `APP_ENV`, `DB_CONNECTION`, `DB_SSLMODE`, cache, session, dan lokasi cache Laravel sudah didefinisikan di `vercel.json`.

Environment variable juga dapat ditambahkan melalui CLI:

```bash
npx vercel env add APP_KEY --environment production
npx vercel env add APP_URL --environment production
npx vercel env add DB_URL --environment production
```

Pilih tipe **Secret** untuk `APP_KEY`, `DB_URL`, `AWS_ACCESS_KEY_ID`, dan
`AWS_SECRET_ACCESS_KEY`.

## 5. Deployment Production

Jalankan:

```bash
npx vercel deploy --prod
```

Setelah selesai, periksa URL dan log deployment:

```bash
npx vercel inspect URL_DEPLOYMENT --logs
```

Jika memakai alias yang lebih singkat:

```bash
npx vercel alias set URL_DEPLOYMENT NAMA-PROJECT.vercel.app
```

Setelah mengganti domain atau alias, perbarui `APP_URL` di dashboard Vercel dan lakukan redeploy. Repository tetap tidak perlu diubah.

## 6. Membuat situs dapat diakses publik

Jika pengunjung diarahkan ke halaman login Vercel:

1. Buka **Project → Settings → Deployment Protection**.
2. Nonaktifkan **Vercel Authentication** untuk Production, atau pilih proteksi yang tidak mencakup Production domain.
3. Biarkan route privat dilindungi oleh autentikasi dan middleware role Laravel.

## 7. Pemeriksaan setelah deployment

Periksa hal berikut:

- halaman utama memberikan status `200`;
- file di `/build/assets/` memberikan status `200`;
- registrasi dan login menggunakan autentikasi Laravel;
- akun siswa, guru, dan admin tidak dapat membuka halaman role lain;
- operasi create, read, update, dan delete tersimpan di Supabase;
- tidak ada referensi `127.0.0.1:5173` pada HTML Production;
- `.env` dan kredensial tidak tersedia dari URL publik.

## 8. Upload gambar pada Vercel

Filesystem Vercel bersifat sementara. Avatar dan gambar tantangan harus
disimpan di Supabase Storage agar tidak hilang setelah deployment baru atau
perpindahan instance.

1. Buka **Storage** di dashboard Supabase dan buat bucket, misalnya `uploads`.
2. Buka **Storage → S3 Configuration**, aktifkan protokol S3, lalu buat access
   key dan secret key.
3. Salin endpoint, region, bucket, dan kredensial S3 ke environment variable
   Vercel sesuai tabel di atas.
4. Set `UPLOAD_DISK=s3` dan `AWS_USE_PATH_STYLE_ENDPOINT=true`.
5. Redeploy aplikasi setelah seluruh environment variable tersimpan.

Untuk menguji konfigurasi yang sama secara lokal, isi `.env` tanpa memasukkan
nilainya ke Git:

```dotenv
UPLOAD_DISK=s3
AWS_ACCESS_KEY_ID=access-key-dari-supabase
AWS_SECRET_ACCESS_KEY=secret-key-dari-supabase
AWS_DEFAULT_REGION=region-dari-supabase
AWS_BUCKET=uploads
AWS_ENDPOINT=https://project-ref.storage.supabase.co/storage/v1/s3
AWS_USE_PATH_STYLE_ENDPOINT=true
AWS_URL=
```

Gunakan endpoint, region, dan nama bucket persis seperti yang ditampilkan oleh
dashboard Supabase. Setelah mengubah environment variable, bersihkan cache
konfigurasi dengan `php artisan config:clear`.

Kredensial S3 hanya digunakan oleh backend Laravel. Jangan menaruhnya di
frontend atau Git. File dibaca melalui route aplikasi `/uploads/...`, sehingga
bucket tidak perlu diekspos langsung kepada browser. Route tersebut dilindungi
middleware autentikasi Laravel; pengguna yang belum login tidak dapat membaca
upload privat.

Perubahan disk tidak memindahkan file lama secara otomatis. Upload yang dahulu
tersimpan di `storage/app/public` perlu diunggah kembali atau dipindahkan ke
bucket Supabase. Untuk memeriksa perilaku upload aplikasi, jalankan:

```bash
php artisan test tests/Feature/UploadStorageTest.php
```

## 9. Troubleshooting singkat

- **Halaman blank:** periksa Network tab browser; file JavaScript/CSS harus berstatus `200`.
- **Database gagal terhubung:** gunakan Session Pooler, pastikan password benar, dan gunakan `DB_SSLMODE=require`.
- **Error 500:** periksa Function Logs Vercel dan pastikan `APP_KEY` serta `DB_URL` tersedia pada environment yang sedang dideploy.
- **Perubahan env belum terbaca:** lakukan deployment ulang setelah mengubah environment variable.
- **Upload hilang:** pindahkan penyimpanan dari disk lokal ke Supabase Storage atau object storage lain.
