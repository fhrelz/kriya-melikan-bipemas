-- ====================================================================
-- SKEMA DATABASE WEBSITE GERABAH MELIKAN - PASEBAN (PKM 2026)
-- Program: "Melestarikan Warisan Tanah Liat: Membangun Ekonomi Kreatif"
-- Arsitektur: Master Product - Artisan Offer - Product Variants
-- Kompatibel: PostgreSQL (Supabase) / MySQL 8.0+
-- ====================================================================

-- 1. Tabel Kategori Produk
CREATE TABLE IF NOT EXISTS product_categories (
    id SERIAL PRIMARY KEY,
    nama_kategori VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    deskripsi TEXT,
    icon_svg VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Master Produk (Katalog Induk Terpadu Desa)
-- Menghindari duplikasi produk yang sama dari banyak pengrajin
CREATE TABLE IF NOT EXISTS master_products (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL REFERENCES product_categories(id) ON DELETE CASCADE,
    nama_produk VARCHAR(150) NOT NULL,
    nama_lokal_jawa VARCHAR(100),
    slug VARCHAR(150) NOT NULL UNIQUE,
    klasifikasi_pasar VARCHAR(50) NOT NULL CHECK (
        klasifikasi_pasar IN ('Unggulan', 'Paling Dicari', 'Populer', 'Paling Dibutuhkan')
    ),
    fungsi_kegunaan TEXT,
    sejarah_filosofi TEXT,
    foto_hero_url VARCHAR(255),
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabel Profil Pengrajin Mandiri
CREATE TABLE IF NOT EXISTS artisans (
    id SERIAL PRIMARY KEY,
    nama_usaha VARCHAR(150) NOT NULL,
    nama_pemilik VARCHAR(100) NOT NULL,
    dusun VARCHAR(100) NOT NULL CHECK (
        dusun IN ('Sayangan (Wedi)', 'Pagerjurang (Wedi)', 'Dusun I Paseban (Bayat)', 'Melikan Lainnya')
    ),
    tipe_lokasi VARCHAR(100) NOT NULL CHECK (
        tipe_lokasi IN ('Showroom Jalan Utama (Jl. Bayat-Wedi)', 'Workshop Rumah Warga')
    ),
    alamat_lengkap TEXT NOT NULL,
    koordinat_latitude DECIMAL(10, 8),
    koordinat_longitude DECIMAL(11, 8),
    no_whatsapp VARCHAR(25) NOT NULL,
    generasi_ke INT DEFAULT 1,
    tahun_mulai INT,
    jumlah_pengrajin INT DEFAULT 1,
    terima_wisata_edukasi BOOLEAN DEFAULT FALSE,
    terima_custom_order BOOLEAN DEFAULT TRUE,
    cerita_profil TEXT,
    foto_profil_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Tabel Penawaran Produk per Pengrajin (Pembeda Kualitas & Kapasitas)
-- Menghubungkan Master Product ke Artisan dengan spesifikasi kualitas & kapasitas
CREATE TABLE IF NOT EXISTS artisan_products (
    id SERIAL PRIMARY KEY,
    artisan_id INT NOT NULL REFERENCES artisans(id) ON DELETE CASCADE,
    master_product_id INT NOT NULL REFERENCES master_products(id) ON DELETE CASCADE,
    grade_kualitas VARCHAR(50) NOT NULL CHECK (
        grade_kualitas IN ('Standar Reguler', 'Halus Pilihan', 'Premium Ekspor')
    ),
    teknik_pembuatan VARCHAR(50) NOT NULL CHECK (
        teknik_pembuatan IN ('Putaran Miring Asli', 'Putaran Tegak', 'Cetak Gypsum', 'Toreh/Tempel Manual')
    ),
    deskripsi_keunggulan TEXT,
    stok_ready INT DEFAULT 0,
    kapasitas_bulanan INT DEFAULT 100,
    min_order_grosir INT DEFAULT 10,
    lead_time_hari INT DEFAULT 7,
    status_tersedia BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_artisan_master_grade UNIQUE (artisan_id, master_product_id, grade_kualitas)
);

-- 5. Tabel Variasi Produk (Pembeda Ukuran, Finishing, & Harga)
CREATE TABLE IF NOT EXISTS artisan_product_variants (
    id SERIAL PRIMARY KEY,
    artisan_product_id INT NOT NULL REFERENCES artisan_products(id) ON DELETE CASCADE,
    nama_varian VARCHAR(150) NOT NULL,
    ukuran_label VARCHAR(50) CHECK (
        ukuran_label IN ('Mini', 'Kecil (S)', 'Sedang (M)', 'Besar (L)', 'Jumbo (XL)', 'Custom')
    ),
    dimensi_detail VARCHAR(100), -- contoh: 'Diameter 24 cm, Tinggi 6 cm'
    berat_gram INT DEFAULT 500,
    warna_finishing VARCHAR(100) NOT NULL CHECK (
        warna_finishing IN (
            'Merah Terakota Alami (Engobe)',
            'Hitam Pengasapan Daun Munggur',
            'Polos Natural Kasar',
            'Lukis Cat Akrilik',
            'Glasir Mengkilap',
            'Lapis Semen Anti-Rembes'
        )
    ),
    motif_ornamen VARCHAR(100) DEFAULT 'Polos',
    harga_eceran DECIMAL(12, 2) NOT NULL,
    harga_grosir DECIMAL(12, 2) NOT NULL,
    foto_varian_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Tabel Pesanan (Direct Order Logging & B2B Custom Request)
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    kode_pesanan VARCHAR(50) NOT NULL UNIQUE,
    artisan_id INT NOT NULL REFERENCES artisans(id),
    nama_pembeli VARCHAR(100) NOT NULL,
    no_wa_pembeli VARCHAR(25) NOT NULL,
    alamat_pengiriman TEXT,
    kota_tujuan VARCHAR(100),
    tipe_pesanan VARCHAR(50) CHECK (
        tipe_pesanan IN ('Beli Langsung / Ready Stock', 'Partai Besar / Grosir', 'Pre-Order Desain Custom')
    ),
    catatan_khusus TEXT,
    total_estimasi DECIMAL(12, 2),
    status_pesanan VARCHAR(50) DEFAULT 'Menunggu Konfirmasi Pengrajin' CHECK (
        status_pesanan IN (
            'Menunggu Konfirmasi Pengrajin',
            'Dikonfirmasi / Dalam Pengerjaan',
            'Siap Kirim',
            'Selesai',
            'Dibatalkan'
        )
    ),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Tabel Rincian Item Pesanan
CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    variant_id INT NOT NULL REFERENCES artisan_product_variants(id),
    jumlah INT NOT NULL CHECK (jumlah > 0),
    harga_satuan DECIMAL(12, 2) NOT NULL,
    subtotal DECIMAL(12, 2) NOT NULL
);

-- 8. Tabel Paket Wisata Edukasi Gerabah
CREATE TABLE IF NOT EXISTS edu_tourism_packages (
    id SERIAL PRIMARY KEY,
    nama_paket VARCHAR(150) NOT NULL,
    penyelenggara VARCHAR(150) NOT NULL, -- Nama Paguyuban / Pokdarwis / Pengrajin
    artisan_id INT REFERENCES artisans(id) ON DELETE SET NULL,
    harga_per_orang DECIMAL(12, 2) NOT NULL,
    min_peserta INT DEFAULT 5,
    durasi_jam INT DEFAULT 2,
    fasilitas TEXT,
    kontak_reservasi VARCHAR(25) NOT NULL,
    foto_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indeks untuk optimasi pencarian katalog dan filter website
CREATE INDEX IF NOT EXISTS idx_master_products_category ON master_products(category_id);
CREATE INDEX IF NOT EXISTS idx_master_products_klasifikasi ON master_products(klasifikasi_pasar);
CREATE INDEX IF NOT EXISTS idx_artisans_dusun ON artisans(dusun);
CREATE INDEX IF NOT EXISTS idx_artisan_products_master ON artisan_products(master_product_id);
CREATE INDEX IF NOT EXISTS idx_artisan_products_artisan ON artisan_products(artisan_id);
CREATE INDEX IF NOT EXISTS idx_variants_artisan_prod ON artisan_product_variants(artisan_product_id);

