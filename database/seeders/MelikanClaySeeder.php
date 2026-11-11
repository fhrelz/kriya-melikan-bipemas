<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MelikanClaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Kategori
        DB::table('product_categories')->insertOrIgnore([
            ['id' => 1, 'nama_kategori' => 'Peralatan Makan & Minum (Tableware)', 'slug' => 'tableware', 'deskripsi' => 'Peralatan makan tanah liat alami yang memberikan aroma khas, sejuk, dan estetika etnik.', 'icon_svg' => 'utensils'],
            ['id' => 2, 'nama_kategori' => 'Kendi Tradisional & Kreasi (30+ Ragam)', 'slug' => 'kendi-tradisional-kreasi', 'deskripsi' => 'Kendi putaran miring khas Melikan dengan 30+ varian, termasuk Kendi Maling legendaris.', 'icon_svg' => 'wine-bottle'],
            ['id' => 3, 'nama_kategori' => 'Peralatan Masak & Dapur (Cookware)', 'slug' => 'cookware-tradisional', 'deskripsi' => 'Kuali, kendil gudeg, anglo, dan wajan serabi tahan panas pembakaran tinggi.', 'icon_svg' => 'flame'],
            ['id' => 4, 'nama_kategori' => 'Dekorasi Interior, Eksterior & Furnitur', 'slug' => 'dekorasi-dan-furnitur', 'deskripsi' => 'Vas botol, guci artistik, patung kriya terakota, dan bangku taman tanah liat.', 'icon_svg' => 'palette'],
            ['id' => 5, 'nama_kategori' => 'Wadah Air Besar & Pot Tanaman', 'slug' => 'wadah-air-dan-pot', 'deskripsi' => 'Gentong jembangan, pot tanaman hias, dan padasan air wudu relief naga.', 'icon_svg' => 'flower'],
            ['id' => 6, 'nama_kategori' => 'Suvenir, Edukasi & Tradisi Adat', 'slug' => 'suvenir-dan-edukasi', 'deskripsi' => 'Celengan hewan karakter, media praktik lukis anak sekolah, dan suvenir custom.', 'icon_svg' => 'gift'],
        ]);

        // 2. Master Produk
        DB::table('master_products')->insertOrIgnore([
            [
                'id' => 1,
                'category_id' => 2,
                'nama_produk' => 'Kendi Maling Melikan',
                'nama_lokal_jawa' => 'Kendi Maling',
                'slug' => 'kendi-maling',
                'klasifikasi_pasar' => 'Unggulan',
                'fungsi_kegunaan' => 'Menyimpan air minum agar sejuk dingin alami tanpa kulkas listrik.',
                'sejarah_filosofi' => 'Mekanika hidrolika kuno abad 15 di mana air diisi dari corong bawah dan tertahan di dalam saat ditegakkan. Mengajarkan menyerap kebaikan dari lubuk hati terdalam.',
                'is_published' => true
            ],
            [
                'id' => 2,
                'category_id' => 1,
                'nama_produk' => 'Cobek Tanah Liat & Layah',
                'nama_lokal_jawa' => 'Cowek / Layah Melikan',
                'slug' => 'cobek-tanah-liat',
                'klasifikasi_pasar' => 'Paling Dibutuhkan',
                'fungsi_kegunaan' => 'Menghaluskan bumbu dapur dan sambal penyetan.',
                'sejarah_filosofi' => 'Tulang punggung perputaran harian ekonomi desa dengan produksi mencapai 3.000 pcs per hari.',
                'is_published' => true
            ],
            [
                'id' => 3,
                'category_id' => 1,
                'nama_produk' => 'Poci Set Terakota Jawa',
                'nama_lokal_jawa' => 'Poci Set Tanah Liat',
                'slug' => 'poci-set-terakota-jawa',
                'klasifikasi_pasar' => 'Paling Dicari',
                'fungsi_kegunaan' => 'Menyeduh teh tubruk melati gula batu dengan aroma tanah liat harum nasgitel.',
                'sejarah_filosofi' => 'Tradisi minum teh poci masyarakat Jawa yang digemari kalangan kafe dan restoran etnik.',
                'is_published' => true
            ],
            [
                'id' => 4,
                'category_id' => 4,
                'nama_produk' => 'Vas Bunga Botol Minimalis',
                'nama_lokal_jawa' => 'Vas Botol Melikan',
                'slug' => 'vas-bunga-botol-minimalis',
                'klasifikasi_pasar' => 'Paling Dicari',
                'fungsi_kegunaan' => 'Dekorasi bunga kering meja hunian, hotel, dan kafe modern.',
                'sejarah_filosofi' => 'Inovasi cinderamata modern yang memenangkan Juara 1 API Award 2025.',
                'is_published' => true
            ],
        ]);

        // 3. Pengrajin Mandiri
        DB::table('artisans')->insertOrIgnore([
            [
                'id' => 1,
                'nama_usaha' => 'Yani Keramik',
                'nama_pemilik' => 'Ibu Yani',
                'dusun' => 'Dusun I Paseban (Bayat)',
                'tipe_lokasi' => 'Showroom Jalan Utama (Jl. Bayat-Wedi)',
                'alamat_lengkap' => 'Jl. Raya Wedi - Bayat, Dusun I, Paseban, Kec. Bayat, Kab. Klaten 57461',
                'no_whatsapp' => '6281234567801',
                'generasi_ke' => 3,
                'tahun_mulai' => 1996,
                'jumlah_pengrajin' => 6,
                'terima_wisata_edukasi' => true,
                'terima_custom_order' => true,
                'cerita_profil' => 'Spesialis kriya halus kendi kreasi dan gerabah hitam pengasapan daun munggur kualitas ekspor.'
            ],
            [
                'id' => 2,
                'nama_usaha' => 'Barokah Keramik',
                'nama_pemilik' => 'Bapak Muh Nawawi',
                'dusun' => 'Pagerjurang (Wedi)',
                'tipe_lokasi' => 'Workshop Rumah Warga',
                'alamat_lengkap' => 'Dukuh Pagerjurang RT 02 / RW 01, Desa Melikan, Kec. Wedi, Kab. Klaten 57461',
                'no_whatsapp' => '6281234567802',
                'generasi_ke' => 2,
                'tahun_mulai' => 1992,
                'jumlah_pengrajin' => 12,
                'terima_wisata_edukasi' => false,
                'terima_custom_order' => true,
                'cerita_profil' => 'Pusat produksi massal cobek layah dan kuali soto untuk pasokan rumah makan penyetan kapasitas 2.500 pcs/bulan.'
            ],
            [
                'id' => 3,
                'nama_usaha' => 'Elvi Keramik (EK)',
                'nama_pemilik' => 'Bapak Tri Wiyono',
                'dusun' => 'Sayangan (Wedi)',
                'tipe_lokasi' => 'Showroom Jalan Utama (Jl. Bayat-Wedi)',
                'alamat_lengkap' => 'Dukuh Sayangan, Desa Melikan, Kec. Wedi, Kab. Klaten 57461 (Dekat Tugu Gerabah)',
                'no_whatsapp' => '6281234567803',
                'generasi_ke' => 2,
                'tahun_mulai' => 2004,
                'jumlah_pengrajin' => 5,
                'terima_wisata_edukasi' => true,
                'terima_custom_order' => true,
                'cerita_profil' => 'Pusat wisata edukasi gerabah dan poci set kreasi untuk rombongan sekolah dan universitas.'
            ],
        ]);

        // 4. Penawaran Produk per Pengrajin
        DB::table('artisan_products')->insertOrIgnore([
            [
                'id' => 1,
                'artisan_id' => 1,
                'master_product_id' => 1,
                'grade_kualitas' => 'Premium Ekspor',
                'teknik_pembuatan' => 'Putaran Miring Asli',
                'deskripsi_keunggulan' => 'Permukaan dipoles kain kelambu 3 kali, lempung merah pekat tanpa pori bocor.',
                'stok_ready' => 15,
                'kapasitas_bulanan' => 250,
                'min_order_grosir' => 10,
                'lead_time_hari' => 10,
                'status_tersedia' => true
            ],
            [
                'id' => 2,
                'artisan_id' => 2,
                'master_product_id' => 1,
                'grade_kualitas' => 'Standar Reguler',
                'teknik_pembuatan' => 'Putaran Miring Asli',
                'deskripsi_keunggulan' => 'Dinding tebal dan kokoh dengan tungku pembakaran tradisional cepat.',
                'stok_ready' => 40,
                'kapasitas_bulanan' => 600,
                'min_order_grosir' => 20,
                'lead_time_hari' => 7,
                'status_tersedia' => true
            ],
            [
                'id' => 3,
                'artisan_id' => 2,
                'master_product_id' => 2,
                'grade_kualitas' => 'Standar Reguler',
                'teknik_pembuatan' => 'Putaran Miring Asli',
                'deskripsi_keunggulan' => 'Tekstur kesat pas untuk mengulek bumbu, kapasitas produksi ribuan unit per bulan.',
                'stok_ready' => 200,
                'kapasitas_bulanan' => 2500,
                'min_order_grosir' => 50,
                'lead_time_hari' => 3,
                'status_tersedia' => true
            ],
            [
                'id' => 4,
                'artisan_id' => 3,
                'master_product_id' => 3,
                'grade_kualitas' => 'Halus Pilihan',
                'teknik_pembuatan' => 'Putaran Miring Asli',
                'deskripsi_keunggulan' => 'Dilengkapi saringan daun teh di dalam corot dan nampan terakota estetik.',
                'stok_ready' => 25,
                'kapasitas_bulanan' => 400,
                'min_order_grosir' => 10,
                'lead_time_hari' => 7,
                'status_tersedia' => true
            ],
        ]);

        // 5. Variasi Ukuran & Harga
        DB::table('artisan_product_variants')->insertOrIgnore([
            [
                'id' => 1,
                'artisan_product_id' => 1,
                'nama_varian' => 'Kendi Maling Terakota Halus (Sedang)',
                'ukuran_label' => 'Sedang (M)',
                'dimensi_detail' => 'Tinggi 24 cm, Diameter 16 cm',
                'berat_gram' => 950,
                'warna_finishing' => 'Merah Terakota Alami (Engobe)',
                'motif_ornamen' => 'Polos Halus',
                'harga_eceran' => 65000,
                'harga_grosir' => 48000,
            ],
            [
                'id' => 2,
                'artisan_product_id' => 1,
                'nama_varian' => 'Kendi Maling Hitam Daun Munggur (Sedang)',
                'ukuran_label' => 'Sedang (M)',
                'dimensi_detail' => 'Tinggi 24 cm, Diameter 16 cm',
                'berat_gram' => 950,
                'warna_finishing' => 'Hitam Pengasapan Daun Munggur',
                'motif_ornamen' => 'Polos Reduksi',
                'harga_eceran' => 75000,
                'harga_grosir' => 55000,
            ],
            [
                'id' => 3,
                'artisan_product_id' => 3,
                'nama_varian' => 'Cobek Layah Ukuran 24 cm',
                'ukuran_label' => 'Sedang (M)',
                'dimensi_detail' => 'Diameter 24 cm, Tinggi 5 cm',
                'berat_gram' => 900,
                'warna_finishing' => 'Merah Terakota Alami (Engobe)',
                'motif_ornamen' => 'Ulir Lingkar',
                'harga_eceran' => 14000,
                'harga_grosir' => 10000,
            ],
            [
                'id' => 4,
                'artisan_product_id' => 4,
                'nama_varian' => 'Poci Set Tradisional (1 Teko + 3 Cangkir + Nampan)',
                'ukuran_label' => 'Sedang (M)',
                'dimensi_detail' => 'Teko 600 ml, Cangkir 150 ml',
                'berat_gram' => 1800,
                'warna_finishing' => 'Merah Terakota Alami (Engobe)',
                'motif_ornamen' => 'Sulur Daun',
                'harga_eceran' => 85000,
                'harga_grosir' => 65000,
            ],
        ]);
    }
}

