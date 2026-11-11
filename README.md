# Platform Digital Sentra Kriya Gerabah Melikan & Paseban (PkM 2026)
### Program Kemitraan Masyarakat (PkM) Hibah BIPEMAS 2026 — Tim PkM UBSI

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/fhrelz/kriya-melikan-bipemas)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template?template=https://github.com/fhrelz/kriya-melikan-bipemas)

---

## 📌 Ringkasan Program
Platform ekosistem terpadu kriya gerabah tradisional Desa Melikan & Paseban (Kecamatan Wedi, Kabupaten Klaten, Jawa Tengah). Platform ini dibangun sebagai hilirisasi program Pengabdian Kemitraan Masyarakat (PkM) 2026 dengan dukungan Hibah BIPEMAS, menghubungkan **258 keluarga pengrajin** lintas 3 dusun sentra langsung dengan pasar kriya nasional, pasar industri perhotelan/restoran (HoReKa), serta pariwisata edukatif seni putaran miring 35° peninggalan Ki Depok (abad ke-15).

---

## ✨ Fitur Unggulan Sistem
1. **E-Katalog 29 Ragam Produk Kriya Terpadu:**
   - Meliputi gerabah fungsional (cobek layah lempung halus, gentong air minum penyejuk alami, kendil jamu, wajan sangrai, piring ceper rustic, cangkir kopi sloki), hingga gerabah artistik (kendi maling hidrolik, patung macan Jawa, poci teh sangrai, vas japandi, pot tanaman terakota).
2. **Dual-View Modal Produk:**
   - Calon pembeli dapat beralih antara *Foto Studio / Render AI* untuk visualisasi katalog modern dan *Dokumentasi Asli Sanggar Lapangan* untuk melihat detail tekstur lempung nyata di bengkel kerja pengrajin.
3. **Pilihan Mandiri Profil Pengrajin (Custom Artisan Selector):**
   - Menghubungkan pembeli langsung ke sanggar maestro pilihan:
     - **Ibu Suparmi** (Dusun Sayangan — Spesialis Cobek Layah Lempung Halus)
     - **Ibu Yani** (Dusun Pagerjurang — Spesialis Kuali, Poci Teh & Bejana Tahan Api Kompor)
     - **Pak Suhirno** (Dusun Paseban — Laboratorium Kendi Maling & Black Pottery Reduksi)
   - Pembeli dapat memasukkan nomor telepon WhatsApp sanggar pengrajin tujuan secara manual maupun memilih dari profil pengrajin yang tersedia.
4. **Kalkulator Ongkir & Jarak Nyata (GPS Coordinates Geolocation):**
   - Mengambil titik koordinat presisi pembeli secara instan via HTML5 Geolocation API.
   - Menghitung jarak rute jalan sebenarnya dari Titik Nol Sentra Melikan (-7.7651, 110.5843) menggunakan formula *Great-Circle Distance (Haversine)* dengan faktor deviasi rute darat (1.28x).
   - Menyediakan tarif ekspedisi kargo nyata: J&T Cargo, Dakota Cargo, dan Indah Logistik Kargo, lengkap dengan proteksi peti kayu standar kriya.
5. **Checkout Terintegrasi WhatsApp Paguyuban:**
   - Format pesanan otomatis terstruktur dengan rincian barang, sanggar pembuat, titik koordinat pengiriman, tautan Google Maps rute kurir, serta estimasi ongkir.
6. **Ensiklopedia Warisan Budaya Takbenda (WBTb):**
   - Edukasi teknik langka di dunia: **Putaran Miring 35° (Tilted Wheel)** yang diciptakan Ki Depok untuk postur kerja ergonomis dan menjaga martabat pengrajin wanita.
   - Teknik pewarnaan alami *Black Pottery* menggunakan asap daun munggur kering (100% Food-Grade tanpa zat kimia timbal).

---

## 🚀 Panduan Deployment Cloud (1-Klik Aktif Permanen 24 Jam)

### Opsi 1: Render.com (Direkomendasikan)
1. Klik tombol **Deploy to Render** di atas atau buka tautan:
   👉 **[Deploy on Render](https://render.com/deploy?repo=https://github.com/fhrelz/kriya-melikan-bipemas)**
2. Login menggunakan akun GitHub Anda (`fhrelz`).
3. Render akan otomatis mendeteksi [`render.yaml`](render.yaml) dan [`Dockerfile`](Dockerfile):
   - Server: PHP 8.2 + Apache + SQLite bawaan.
   - Region: Singapore (Latency tercepat untuk Indonesia).
   - Biaya: **100% Gratis (Free Tier)** dengan SSL / HTTPS resmi.
4. Klik **"Apply" / "Create Web Service"**. Website akan live dalam ~2 menit.

---

### Opsi 2: Menjalankan di Lingkungan Lokal
```bash
# Clone repositori
git clone https://github.com/fhrelz/kriya-melikan-bipemas.git
cd kriya-melikan-bipemas

# Salin konfigurasi environment
cp .env.example .env

# Jalankan server
php artisan serve
```

---

## 👥 Tim Pelaksana PkM
- **Program:** Program Kemitraan Masyarakat (PkM) 2026
- **Skema Hibah:** BIPEMAS 2026
- **Institusi:** Universitas Bina Sarana Informatika (UBSI)
- **Lokasi Mitra:** Sentra Gerabah Dusun Sayangan, Dusun Pagerjurang, & Dusun Paseban, Desa Melikan & Paseban, Kec. Wedi, Kab. Klaten, Jawa Tengah.
