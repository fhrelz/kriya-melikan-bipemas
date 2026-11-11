<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Kategori Produk
        Schema::create('product_categories', function (Blueprint $table) {
            $table->id();
            $table->string('nama_kategori', 100);
            $table->string('slug', 100)->unique();
            $table->text('deskripsi')->nullable();
            $table->string('icon_svg')->nullable();
            $table->timestamps();
        });

        // 2. Master Produk
        Schema::create('master_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('product_categories')->onDelete('cascade');
            $table->string('nama_produk', 150);
            $table->string('nama_lokal_jawa', 100)->nullable();
            $table->string('slug', 150)->unique();
            $table->enum('klasifikasi_pasar', ['Unggulan', 'Paling Dicari', 'Populer', 'Paling Dibutuhkan']);
            $table->text('fungsi_kegunaan')->nullable();
            $table->text('sejarah_filosofi')->nullable();
            $table->string('foto_hero_url')->nullable();
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });

        // 3. Pengrajin Mandiri
        Schema::create('artisans', function (Blueprint $table) {
            $table->id();
            $table->string('nama_usaha', 150);
            $table->string('nama_pemilik', 100);
            $table->enum('dusun', ['Sayangan (Wedi)', 'Pagerjurang (Wedi)', 'Dusun I Paseban (Bayat)', 'Melikan Lainnya']);
            $table->enum('tipe_lokasi', ['Showroom Jalan Utama (Jl. Bayat-Wedi)', 'Workshop Rumah Warga']);
            $table->text('alamat_lengkap');
            $table->decimal('koordinat_latitude', 10, 8)->nullable();
            $table->decimal('koordinat_longitude', 11, 8)->nullable();
            $table->string('no_whatsapp', 25);
            $table->integer('generasi_ke')->default(1);
            $table->year('tahun_mulai')->nullable();
            $table->integer('jumlah_pengrajin')->default(1);
            $table->boolean('terima_wisata_edukasi')->default(false);
            $table->boolean('terima_custom_order')->default(true);
            $table->text('cerita_profil')->nullable();
            $table->string('foto_profil_url')->nullable();
            $table->timestamps();
        });

        // 4. Penawaran per Pengrajin (Pembeda Grade Kualitas & Kapasitas)
        Schema::create('artisan_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artisan_id')->constrained('artisans')->onDelete('cascade');
            $table->foreignId('master_product_id')->constrained('master_products')->onDelete('cascade');
            $table->enum('grade_kualitas', ['Standar Reguler', 'Halus Pilihan', 'Premium Ekspor']);
            $table->enum('teknik_pembuatan', ['Putaran Miring Asli', 'Putaran Tegak', 'Cetak Gypsum', 'Toreh/Tempel Manual']);
            $table->text('deskripsi_keunggulan')->nullable();
            $table->integer('stok_ready')->default(0);
            $table->integer('kapasitas_bulanan')->default(100);
            $table->integer('min_order_grosir')->default(10);
            $table->integer('lead_time_hari')->default(7);
            $table->boolean('status_tersedia')->default(true);
            $table->timestamps();

            $table->unique(['artisan_id', 'master_product_id', 'grade_kualitas']);
        });

        // 5. Variasi Ukuran & Harga per Pengrajin
        Schema::create('artisan_product_variants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artisan_product_id')->constrained('artisan_products')->onDelete('cascade');
            $table->string('nama_varian', 150);
            $table->enum('ukuran_label', ['Mini', 'Kecil (S)', 'Sedang (M)', 'Besar (L)', 'Jumbo (XL)', 'Custom'])->nullable();
            $table->string('dimensi_detail', 100)->nullable();
            $table->integer('berat_gram')->default(500);
            $table->enum('warna_finishing', [
                'Merah Terakota Alami (Engobe)',
                'Hitam Pengasapan Daun Munggur',
                'Polos Natural Kasar',
                'Lukis Cat Akrilik',
                'Glasir Mengkilap',
                'Lapis Semen Anti-Rembes'
            ]);
            $table->string('motif_ornamen', 100)->default('Polos');
            $table->decimal('harga_eceran', 12, 2);
            $table->decimal('harga_grosir', 12, 2);
            $table->string('foto_varian_url')->nullable();
            $table->timestamps();
        });

        // 6. Pesanan & B2B Custom
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('kode_pesanan', 50)->unique();
            $table->foreignId('artisan_id')->constrained('artisans');
            $table->string('nama_pembeli', 100);
            $table->string('no_wa_pembeli', 25);
            $table->text('alamat_pengiriman')->nullable();
            $table->string('kota_tujuan', 100)->nullable();
            $table->enum('tipe_pesanan', ['Beli Langsung / Ready Stock', 'Partai Besar / Grosir', 'Pre-Order Desain Custom'])->default('Beli Langsung / Ready Stock');
            $table->text('catatan_khusus')->nullable();
            $table->decimal('total_estimasi', 12, 2)->nullable();
            $table->enum('status_pesanan', [
                'Menunggu Konfirmasi Pengrajin',
                'Dikonfirmasi / Dalam Pengerjaan',
                'Siap Kirim',
                'Selesai',
                'Dibatalkan'
            ])->default('Menunggu Konfirmasi Pengrajin');
            $table->timestamps();
        });

        // 7. Paket Wisata Edukasi
        Schema::create('edu_tourism_packages', function (Blueprint $table) {
            $table->id();
            $table->string('nama_paket', 150);
            $table->string('penyelenggara', 150);
            $table->foreignId('artisan_id')->nullable()->constrained('artisans')->onDelete('set null');
            $table->decimal('harga_per_orang', 12, 2);
            $table->integer('min_peserta')->default(5);
            $table->integer('durasi_jam')->default(2);
            $table->text('fasilitas')->nullable();
            $table->string('kontak_reservasi', 25);
            $table->string('foto_url')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('edu_tourism_packages');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('artisan_product_variants');
        Schema::dropIfExists('artisan_products');
        Schema::dropIfExists('artisans');
        Schema::dropIfExists('master_products');
        Schema::dropIfExists('product_categories');
    }
};

