-- ====================================================================
-- SEED DATA AWAL: WEBSITE GERABAH MELIKAN - PASEBAN (PKM 2026)
-- Target: MySQL 8.0 (Laragon phpMyAdmin) / PostgreSQL
-- ====================================================================

-- 1. Insert 6 Kategori Produk Induk
INSERT INTO product_categories (id, nama_kategori, slug, deskripsi, icon_svg) VALUES
(1, 'Peralatan Makan & Minum (Tableware)', 'tableware', 'Peralatan makan tanah liat alami yang memberikan aroma khas, sejuk, dan estetika etnik.', 'utensils'),
(2, 'Kendi Tradisional & Kreasi (30+ Ragam)', 'kendi-tradisional-kreasi', 'Kendi putaran miring khas Melikan dengan 30+ varian, termasuk Kendi Maling legendaris.', 'wine-bottle'),
(3, 'Peralatan Masak & Dapur (Cookware)', 'cookware-tradisional', 'Kuali, kendil gudeg, anglo, dan wajan serabi tahan panas pembakaran tinggi.', 'flame'),
(4, 'Dekorasi Interior, Eksterior & Furnitur', 'dekorasi-dan-furnitur', 'Vas botol, guci artistik, patung kriya terakota, dan bangku taman tanah liat.', 'palette'),
(5, 'Wadah Air Besar & Pot Tanaman', 'wadah-air-dan-pot', 'Gentong jembangan, pot tanaman hias, dan padasan air wudu relief naga.', 'flower'),
(6, 'Suvenir, Edukasi & Tradisi Adat', 'suvenir-dan-edukasi', 'Celengan hewan karakter, media praktik lukis anak sekolah, dan suvenir custom.', 'gift')
ON DUPLICATE KEY UPDATE nama_kategori = VALUES(nama_kategori);

-- 2. Insert Katalog Master Produk (Menghindari Redundansi Katalog)
INSERT INTO master_products (id, category_id, nama_produk, nama_lokal_jawa, slug, klasifikasi_pasar, fungsi_kegunaan, sejarah_filosofi, is_published) VALUES
(1, 2, 'Kendi Maling Melikan', 'Kendi Maling', 'kendi-maling', 'Unggulan', 
 'Menyimpan air minum agar tetap dingin alami tanpa pendingin listrik.', 
 'Diciptakan dengan kecerdasan mekanika kuno abad ke-15 di mana air diisi dari corong bawah dan tidak tumpah saat dibalik. Memiliki filosofi bahwa kebaikan harus diserap dari dasar hati.', TRUE),

(2, 1, 'Cobek Tanah Liat & Ulekan', 'Cowek / Layah Melikan', 'cobek-tanah-liat', 'Paling Dibutuhkan', 
 'Menghaluskan bumbu dapur, sambal terasi penyetan, dan penyajian kuliner langsung di atas meja.', 
 'Menjadi tulang punggung perputaran harian ekonomi pengrajin desa dengan kapasitas ribuan unit per hari.', TRUE),

(3, 1, 'Poci Set Teko & Cangkir Terakota', 'Poci Set Tanah Liat', 'poci-set-teko-cangkir', 'Paling Dicari', 
 'Menyeduh teh poci tubruk melati gula batu khas Jawa dengan aroma tanah liat yang sedap.', 
 'Sangat digemari kalangan kafe etnik, hotel butik, dan pecinta tradisi minum teh nusantara.', TRUE),

(4, 3, 'Kuali Sayur & Soto Tradisional', 'Kuali Soto', 'kuali-sayur-soto', 'Paling Dibutuhkan', 
 'Memasak kuah soto, rawon, dan rebusan jamu herbal agar cita rasa rempah meresap sempurna.', 
 'Dibuat dari campuran lempung Wedi dan pasir Sungai Ujung yang tahan api langsung.', TRUE),

(5, 4, 'Vas Bunga Botol Minimalis', 'Vas Botol Melikan', 'vas-bunga-botol-minimalis', 'Paling Dicari', 
 'Elemen dekorasi bunga kering (*dried flower*) atau meja hunian modern berkonsep Japandi/Scandinavian.', 
 'Representasi modernisasi cinderamata Melikan yang menjuarai Juara 1 API Award 2025.', TRUE),

(6, 6, 'Celengan Tanah Liat Karakter', 'Celengan Jago & Semar', 'celengan-tanah-liat', 'Populer', 
 'Media menabung tradisional untuk anak-anak dan cinderamata ikonik wisatawan.', 
 'Menjadi produk terpopuler yang paling banyak dibeli wisatawan keluarga dan peziarah makam.', TRUE)
ON DUPLICATE KEY UPDATE nama_produk = VALUES(nama_produk);

-- 3. Insert Profil Pengrajin Nyata di Melikan & Paseban Bayat
INSERT INTO artisans (id, nama_usaha, nama_pemilik, dusun, tipe_lokasi, alamat_lengkap, koordinat_latitude, koordinat_longitude, no_whatsapp, generasi_ke, tahun_mulai, jumlah_pengrajin, terima_wisata_edukasi, terima_custom_order, cerita_profil) VALUES
(1, 'Yani Keramik', 'Ibu Yani', 'Dusun I Paseban (Bayat)', 'Showroom Jalan Utama (Jl. Bayat-Wedi)', 
 'Jl. Raya Wedi - Bayat, Dusun I, Paseban, Kec. Bayat, Kab. Klaten 57461', -7.755120, 110.639140, '6281234567801', 3, 1996, 6, TRUE, TRUE, 
 'Spesialis kriya halus dan gerabah hitam pengasapan daun munggur berkualitas ekspor. Menguasai warisan putaran miring turun-temurun.'),

(2, 'Barokah Keramik', 'Bapak Muh Nawawi', 'Pagerjurang (Wedi)', 'Workshop Rumah Warga', 
 'Dukuh Pagerjurang RT 02 / RW 01, Desa Melikan, Kec. Wedi, Kab. Klaten 57461', -7.757300, 110.636400, '6281234567802', 2, 1992, 12, FALSE, TRUE, 
 'Sentra produksi massal cobek, kuali, dan kendi kebutuhan rumah makan dengan kapasitas pembakaran tungku besar hingga 2.000 pcs per bulan.'),

(3, 'Elvi Keramik (EK)', 'Bapak Tri Wiyono', 'Sayangan (Wedi)', 'Showroom Jalan Utama (Jl. Bayat-Wedi)', 
 'Dukuh Sayangan, Desa Melikan, Kec. Wedi, Kab. Klaten 57461 (Dekat Tugu Gerabah)', -7.754800, 110.634200, '6281234567803', 2, 2004, 5, TRUE, TRUE, 
 'Pusat wisata edukasi gerabah dan poci set kreasi. Rutin menerima kunjungan studi sekolah dan perguruan tinggi untuk belajar teknik putaran miring.')
ON DUPLICATE KEY UPDATE nama_usaha = VALUES(nama_usaha);

-- 4. Hubungkan Produk Induk ke Pengrajin (Pembeda Grade Kualitas & Kapasitas)
INSERT INTO artisan_products (id, artisan_id, master_product_id, grade_kualitas, teknik_pembuatan, deskripsi_keunggulan, stok_ready, kapasitas_bulanan, min_order_grosir, lead_time_hari, status_tersedia) VALUES
-- Kendi Maling di Yani Keramik (Grade Ekspor)
(1, 1, 1, 'Premium Ekspor', 'Putaran Miring Asli', 'Permukaan super halus dipoles kain kelambu 3 kali, lempung merah pekat tanpa pori bocor.', 15, 250, 10, 10, TRUE),
-- Kendi Maling di Barokah Keramik (Grade Standar)
(2, 2, 1, 'Standar Reguler', 'Putaran Miring Asli', 'Kendi tradisional dengan dinding kokoh dan ketahanan tinggi untuk kebutuhan harian.', 40, 600, 20, 7, TRUE),
-- Cobek di Barokah Keramik (Grade Standar Grosir)
(3, 2, 2, 'Standar Reguler', 'Putaran Miring Asli', 'Tekstur kesat pas untuk mengulek bumbu, kapasitas produksi ribuan unit per bulan.', 200, 2500, 50, 3, TRUE),
-- Poci Set di Elvi Keramik (Grade Halus Edukasi)
(4, 3, 3, 'Halus Pilihan', 'Putaran Miring Asli', 'Dilengkapi saringan daun teh di dalam corot dan nampan terakota estetik.', 25, 400, 10, 7, TRUE)
ON DUPLICATE KEY UPDATE grade_kualitas = VALUES(grade_kualitas);

-- 5. Masukkan Variasi Ukuran, Warna Finishing, dan Harga
INSERT INTO artisan_product_variants (id, artisan_product_id, nama_varian, ukuran_label, dimensi_detail, berat_gram, warna_finishing, motif_ornamen, harga_eceran, harga_grosir) VALUES
-- Varian Kendi Maling Yani Keramik
(1, 1, 'Kendi Maling Terakota Halus', 'Sedang (M)', 'Tinggi 24 cm, Diameter 16 cm', 950, 'Merah Terakota Alami (Engobe)', 'Polos Halus', 65000, 48000),
(2, 1, 'Kendi Maling Hitam Daun Munggur', 'Sedang (M)', 'Tinggi 24 cm, Diameter 16 cm', 950, 'Hitam Pengasapan Daun Munggur', 'Polos Reduksi', 75000, 55000),

-- Varian Kendi Maling Barokah Keramik
(3, 2, 'Kendi Maling Natural Kasar', 'Sedang (M)', 'Tinggi 22 cm, Diameter 15 cm', 900, 'Polos Natural Kasar', 'Polos', 45000, 32000),

-- Varian Cobek Barokah Keramik
(4, 3, 'Cobek Layah Ukuran 20 cm', 'Kecil (S)', 'Diameter 20 cm, Tinggi 4 cm', 650, 'Merah Terakota Alami (Engobe)', 'Ulir Lingkar', 9000, 6500),
(5, 3, 'Cobek Layah Ukuran 24 cm', 'Sedang (M)', 'Diameter 24 cm, Tinggi 5 cm', 900, 'Merah Terakota Alami (Engobe)', 'Ulir Lingkar', 14000, 10000),

-- Varian Poci Set Elvi Keramik
(6, 4, 'Poci Set Tradisional (1 Teko + 3 Cangkir + Nampan)', 'Sedang (M)', 'Teko 600 ml, Cangkir 150 ml', 1800, 'Merah Terakota Alami (Engobe)', 'Sulur Daun', 85000, 65000)
ON DUPLICATE KEY UPDATE nama_varian = VALUES(nama_varian);

