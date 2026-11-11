import React, { useState, useMemo } from 'react';
import { Head } from '@inertiajs/react';

// ==========================================
// 29 PRODUK LENGKAP SENTRA GERABAH MELIKAN (SETIAP GAMBAR BERBEDA & UNIK)
// ==========================================
const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Kendi Maling Hitam Reduksi Tradisional',
    category: 'Penyimpan Air & Kendi',
    origin: 'Dusun Paseban',
    artisanId: 'artisan-suhirno',
    price: 65000,
    rating: 4.9,
    reviews: 84,
    badge: 'Ikon WBTb',
    badgeColor: 'bg-amber-100 text-amber-900 border border-amber-200',
    artisan: 'Pak Suhirno (Sanggar Sekar Wangi)',
    image: 'images/product_kendi_maling.jpg',
    realPhoto: 'images/dokumentasi/img_2243.jpg',
    specs: 'Tinggi 24 cm, 1.2 Liter, Asap Daun Munggur, 100% Bebas Timbal',
    desc: 'Diisi air melalui rongga dasar terbalik dan terkunci sempurna secara hidrolik tanpa bocor sedikitpun saat ditegakkan.',
  },
  {
    id: 'prod-2',
    name: 'Cobek Layah Lempung Halus Ø 22 cm',
    category: 'Dapur & Memasak',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-suparmi',
    price: 25000,
    rating: 5.0,
    reviews: 142,
    badge: 'Best Seller',
    badgeColor: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
    artisan: 'Ibu Suparmi (Kriya Sayangan)',
    image: 'images/product_cobek_layah.jpg',
    realPhoto: 'images/dokumentasi/img_2209.jpg',
    specs: 'Diameter 22 cm, Tebal 2.5 cm, Presisi Putaran Miring 35°',
    desc: 'Pori lempung alami mikro padat, tidak berpasir saat mengulek bumbu sambal dan menjaga rasa tetap segar.',
  },
  {
    id: 'prod-3',
    name: 'Set Poci Teh Sangrai & 2 Cangkir Sloki',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-yani',
    price: 85000,
    rating: 4.8,
    reviews: 67,
    badge: 'Favorit Kafe',
    badgeColor: 'bg-stone-100 text-stone-800 border border-stone-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_poci_set.jpg',
    realPhoto: 'images/dokumentasi/img_2214.jpg',
    specs: 'Poci 750ml, 2 Cangkir Sloki Gerabah, Nampan Terakota',
    desc: 'Menghadirkan karakter teh Wasgitel dengan aroma tanah liat sangrai tradisional yang khas dan menenangkan.',
  },
  {
    id: 'prod-4',
    name: 'Kuali Masak Gudeg & Rawon Tahan Api 3L',
    category: 'Dapur & Memasak',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-nawawi',
    price: 45000,
    rating: 4.9,
    reviews: 93,
    badge: 'Tahan Api Kompor',
    badgeColor: 'bg-orange-100 text-orange-900 border border-orange-200',
    artisan: 'Bapak Muh Nawawi (Barokah Keramik)',
    image: 'images/product_kuali_soto.jpg',
    realPhoto: 'images/dokumentasi/img_2207.jpg',
    specs: 'Kapasitas 3 Liter, Tebal Dinding 8mm, Termasuk Tutup',
    desc: 'Tahan api kompor langsung, menghantarkan panas stabil untuk memasak rawon, soto, dan gudeg lebih empuk.',
  },
  {
    id: 'prod-5',
    name: 'Vas Bunga Japandi Terakota Minimalis',
    category: 'Dekorasi & Seni Kriya',
    origin: 'Dusun Paseban',
    artisanId: 'artisan-yani',
    price: 55000,
    rating: 4.7,
    reviews: 51,
    badge: 'Desain Modern',
    badgeColor: 'bg-stone-100 text-stone-800 border border-stone-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_vas_japandi.jpg',
    realPhoto: 'images/dokumentasi/img_2224.jpg',
    specs: 'Tinggi 28 cm, Diameter Mulut 9 cm, Tekstur Matte Alami',
    desc: 'Perpaduan bentuk Scandinavian-Japandi dengan lempung lokal Klaten untuk aksen interior ruang tamu dan kafe.',
  },
  {
    id: 'prod-6',
    name: 'Celengan Karakter Semar Bodronoyo',
    category: 'Dekorasi & Seni Kriya',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-wiyono',
    price: 35000,
    rating: 4.9,
    reviews: 78,
    badge: 'Karya Kriya',
    badgeColor: 'bg-amber-100 text-amber-900 border border-amber-200',
    artisan: 'Bapak Tri Wiyono (Elvi Keramik)',
    image: 'images/product_celengan_semar.jpg',
    realPhoto: 'images/dokumentasi/img_2253.jpg',
    specs: 'Tinggi 20 cm, Lempung Padat, Pewarnaan Ramah Lingkungan',
    desc: 'Celengan karakter Semar sebagai simbol hidup bersahaja dan media edukasi gemar menabung untuk anak-anak.',
  },
  {
    id: 'prod-7',
    name: 'Wajan Sangrai Kopi & Bumbu Tradisional',
    category: 'Dapur & Memasak',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-suparmi',
    price: 38000,
    rating: 4.8,
    reviews: 44,
    badge: 'Sangrai Alami',
    badgeColor: 'bg-stone-100 text-stone-800 border border-stone-200',
    artisan: 'Ibu Suparmi (Kriya Sayangan)',
    image: 'images/product_wajan_sangrai.jpg',
    realPhoto: 'images/dokumentasi/img_2254.jpg',
    specs: 'Diameter 26 cm, Kedalaman 7 cm, Gagang Kuping Ganda',
    desc: 'Wajan lempung tanpa minyak untuk menyangrai biji kopi, kacang tanah, dan rempah bumbu agar aroma harum maksimal.',
  },
  {
    id: 'prod-8',
    name: 'Kendil Gerabah Jamu & Tradisi Tutup Rapat',
    category: 'Dapur & Memasak',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-yani',
    price: 28000,
    rating: 4.9,
    reviews: 62,
    badge: 'Otentik Tradisi',
    badgeColor: 'bg-amber-100 text-amber-900 border border-amber-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_kendil_ariari.jpg',
    realPhoto: 'images/dokumentasi/img_2241.jpg',
    specs: 'Kapasitas 1.5 Liter, Dilengkapi Tutup Kubah, Tahan Suhu Hangat',
    desc: 'Bejana perebus jamu herbal alami dan upacara tradisi kelahiran Jawa dengan kemampuan menjaga suhu hangat stabil.',
  },
  {
    id: 'prod-9',
    name: 'Anglo Kompor Arang Terakota Melikan',
    category: 'Dapur & Memasak',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-suparmi',
    price: 35000,
    rating: 4.7,
    reviews: 39,
    badge: 'Hemat Energi',
    badgeColor: 'bg-orange-100 text-orange-900 border border-orange-200',
    artisan: 'Ibu Suparmi (Kriya Sayangan)',
    image: 'images/product_anglo_arang.jpg',
    realPhoto: 'images/dokumentasi/img_2242.jpg',
    specs: 'Diameter 25 cm, Lubang Angin Sirkulasi, Dinding Isolator Panas',
    desc: 'Kompor arang tradisional untuk bakaran sate, memasak nasi liwet, dan wedang ronde dengan bara api stabil tahan lama.',
  },
  {
    id: 'prod-10',
    name: 'Piring Makan Ceper Rustic Artisan Ø 24 cm',
    category: 'Tableware & Minum',
    origin: 'Dusun Paseban',
    artisanId: 'artisan-suhirno',
    price: 26000,
    rating: 4.9,
    reviews: 87,
    badge: 'Favorit Resto',
    badgeColor: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
    artisan: 'Pak Suhirno (Sanggar Sekar Wangi)',
    image: 'images/product_piring_makan.jpg',
    realPhoto: 'images/dokumentasi/img_2209.jpg',
    specs: 'Diameter 24 cm, Tebal 6mm, Food-Grade Finishing Halus',
    desc: 'Piring saji ceper berkarakter earthy-rustic untuk hidangan kuliner Nusantara, kafe modern, dan sajian hotel berbintang.',
  },
  {
    id: 'prod-11',
    name: 'Cangkir Kopi Terakota & Tatakan Kafe',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-yani',
    price: 22000,
    rating: 4.8,
    reviews: 58,
    badge: 'Specialty Coffee',
    badgeColor: 'bg-stone-100 text-stone-800 border border-stone-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_cangkir_kopi.jpg',
    realPhoto: 'images/dokumentasi/img_2214.jpg',
    specs: 'Volume 180 ml, Termasuk Lepek Piringan Kecil, Handle Ergonomis',
    desc: 'Cangkir kopi tembikar berpori padat yang menjaga kehangatan kopi tubruk, latte, dan espresso lebih lama.',
  },
  {
    id: 'prod-12',
    name: 'Mangkok Sup & Soto Tanah Liat Alami',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-yani',
    price: 24000,
    rating: 4.9,
    reviews: 73,
    badge: 'Sajian Kuah',
    badgeColor: 'bg-orange-100 text-orange-900 border border-orange-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_mangkok_sup.jpg',
    realPhoto: 'images/dokumentasi/img_2215.jpg',
    specs: 'Diameter 16 cm, Volume 600 ml, Tahan Kuah Panas Mendidih',
    desc: 'Mangkok saji kuliner kuah rawon, bakso, dan soto yang memberi kehangatan alami dan tampilan estetik tradisional.',
  },
  {
    id: 'prod-13',
    name: 'Gentong Air Minum Lempung Penyejuk 15L',
    category: 'Penyimpan Air & Kendi',
    origin: 'Dusun Paseban',
    artisanId: 'artisan-suhirno',
    price: 95000,
    rating: 5.0,
    reviews: 61,
    badge: 'Penyejuk Alami',
    badgeColor: 'bg-sky-100 text-sky-900 border border-sky-200',
    artisan: 'Pak Suhirno (Sanggar Sekar Wangi)',
    image: 'images/product_gentong_air.jpg',
    realPhoto: 'images/dokumentasi/img_2233.jpg',
    specs: 'Kapasitas 15 Liter, Termasuk Tutup & Gayung Kayu, Pori Transpirasi',
    desc: 'Wadah air minum khas pedesaan yang mendinginkan air secara alami melalui proses transpirasi mikro pori lempung tanpa listrik.',
  },
  {
    id: 'prod-14',
    name: 'Pot Tanaman Sukulen & Bonsai Porous',
    category: 'Pot & Lansekap Taman',
    origin: 'Dusun Paseban',
    artisanId: 'artisan-suhirno',
    price: 18000,
    rating: 4.7,
    reviews: 53,
    badge: 'Tanaman Sehat',
    badgeColor: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
    artisan: 'Pak Suhirno (Sanggar Sekar Wangi)',
    image: 'images/product_pot_tanaman.jpg',
    realPhoto: 'images/dokumentasi/img_2232.jpg',
    specs: 'Diameter 14 cm, Dilengkapi Lubang Drainase Dasar, Bahan Lempung Bernapas',
    desc: 'Pot terakota alami dengan sirkulasi udara akar prima, mencegah pembusukan akar tanaman sukulen, kaktus, dan bonsai.',
  },
  {
    id: 'prod-15',
    name: 'Patung Harimau / Macan Jawa Melikan Cat Warna',
    category: 'Dekorasi & Seni Kriya',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-wiyono',
    price: 120000,
    rating: 4.9,
    reviews: 42,
    badge: 'Karya Seni Budaya',
    badgeColor: 'bg-amber-100 text-amber-900 border border-amber-200',
    artisan: 'Bapak Tri Wiyono (Elvi Keramik)',
    image: 'images/product_patung_macan.jpg',
    realPhoto: 'images/dokumentasi/img_2246.jpg',
    specs: 'Tinggi 35 cm, Panjang 40 cm, Cat Karakter Tahan Air, Tanah Lempung Padat',
    desc: 'Karya patung seni kriya tanah liat ekspresif harimau Jawa loreng kuning-hitam Melikan. Biasa dipasang sebagai hiasan teras rumah, gapura, atau dekorasi taman berkarakter.',
  },
  {
    id: 'prod-16',
    name: 'Celengan Ayam Jago Tradisional Cat Warna',
    category: 'Dekorasi & Seni Kriya',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-wiyono',
    price: 30000,
    rating: 4.9,
    reviews: 185,
    badge: 'Koleksi Legendaris',
    badgeColor: 'bg-red-100 text-red-900 border border-red-200',
    artisan: 'Bapak Tri Wiyono (Elvi Keramik)',
    image: 'images/product_celengan_ayam.jpg',
    realPhoto: 'images/dokumentasi/img_2252.jpg',
    specs: 'Tinggi 22 cm, Panjang 18 cm, Lubang Koin Presisi Atas, Cat Warna Cerah',
    desc: 'Celengan legendaris warisan leluhur nusantara berbentuk ayam jago dengan jengger merah menyala. Melatih gemar menabung sejak dini dengan karya kriya lokal.',
  },
  {
    id: 'prod-17',
    name: 'Teko Ceret Leher Jenjang Ukir Mawar',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-yani',
    price: 65000,
    rating: 4.9,
    reviews: 78,
    badge: 'Ukir Tangan Halus',
    badgeColor: 'bg-rose-100 text-rose-900 border border-rose-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_teko_mawar.jpg',
    realPhoto: 'images/dokumentasi/img_2240.jpg',
    specs: 'Kapasitas 1.100 ml, Moncong Lengkung Presisi, Ukir Motif Mawar Melikan',
    desc: 'Ceret teh klasik dengan moncong jenjang melengkung dan ornamen ukiran bunga mawar. Menjaga seduhan teh tetap hangat dan mengeluarkan aroma tanah liat sangrai wangi.',
  },
  {
    id: 'prod-18',
    name: 'Panci Jamu Gagang Panjang (Saucepan Lempung)',
    category: 'Dapur & Memasak',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-nawawi',
    price: 48000,
    rating: 4.8,
    reviews: 56,
    badge: 'Alami Non-Reaktif',
    badgeColor: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
    artisan: 'Bapak Muh Nawawi (Barokah Keramik)',
    image: 'images/product_panci_jamu.jpg',
    realPhoto: 'images/dokumentasi/img_2254.jpg',
    specs: 'Diameter 18 cm, Gagang Lurus 14 cm, Termasuk Tutup Pentul Kubah',
    desc: 'Panci lempung bertutup dengan pegangan silinder lurus untuk merebus jamu herbal, wedang uwuh, dan rimpang tanpa bereaksi kimia dengan logam.',
  },
  {
    id: 'prod-19',
    name: 'Pot Anggrek Lubang Ventilasi Udara Terakota',
    category: 'Pot & Lansekap Taman',
    origin: 'Dusun Paseban',
    artisanId: 'artisan-suhirno',
    price: 24000,
    rating: 4.9,
    reviews: 112,
    badge: 'Akar Bernapas',
    badgeColor: 'bg-teal-100 text-teal-900 border border-teal-200',
    artisan: 'Pak Suhirno (Sanggar Sekar Wangi)',
    image: 'images/product_pot_anggrek.jpg',
    realPhoto: 'images/dokumentasi/img_2234.jpg',
    specs: 'Diameter 18 cm, Tinggi 16 cm, 16 Lubang Ventilasi Udara Keliling',
    desc: 'Pot terakota khusus anggrek dan tanaman epifit dengan lubang sirkulasi melingkar. Mencegah pembusukan akar dan menjaga kelembapan mikro ideal.',
  },
  {
    id: 'prod-20',
    name: 'Air Mancur Terakota Bertingkat 3 Taman',
    category: 'Pot & Lansekap Taman',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-wiyono',
    price: 285000,
    rating: 5.0,
    reviews: 34,
    badge: 'Mahakarya Taman',
    badgeColor: 'bg-amber-100 text-amber-900 border border-amber-200',
    artisan: 'Bapak Tri Wiyono (Elvi Keramik)',
    image: 'images/product_air_mancur.jpg',
    realPhoto: 'images/dokumentasi/img_2238.jpg',
    specs: 'Tinggi 85 cm, 3 Undak Mangkuk Bergelombang, Termasuk Pompa Submersible Ready',
    desc: 'Ornamen air mancur taman bertingkat tiga dengan tepian kelopak teratai bergelombang. Menghasilkan gemericik air yang menyejukkan halaman rumah dan kafe.',
  },
  {
    id: 'prod-21',
    name: 'Poci Teh Labu Glasir Hijau Zaitun Kilap',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-yani',
    price: 75000,
    rating: 4.9,
    reviews: 49,
    badge: 'Glasir Spesial',
    badgeColor: 'bg-lime-100 text-lime-900 border border-lime-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_poci_labu_hijau.jpg',
    realPhoto: 'images/dokumentasi/img_2210.jpg',
    specs: 'Kapasitas 800 ml, Glasir Hijau Halus Food-Grade Tahan Panas 1.100°C',
    desc: 'Teko poci teh unik berbentuk labu dengan lapisan glasir hijau alami berkilau. Kombinasi bentuk tradisional dan estetika keramik modern.',
  },
  {
    id: 'prod-22',
    name: 'Piring Saji Persegi Horeka Modern',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-nawawi',
    price: 32000,
    rating: 4.8,
    reviews: 95,
    badge: 'Pilihan Horeka',
    badgeColor: 'bg-stone-100 text-stone-800 border border-stone-200',
    artisan: 'Bapak Muh Nawawi (Barokah Keramik)',
    image: 'images/product_piring_persegi.jpg',
    realPhoto: 'images/dokumentasi/img_2261.jpg',
    specs: 'Ukuran 24 x 18 cm, Lempung Bakar Padat Tahan Cuci Restoran',
    desc: 'Piring saji bentuk persegi panjang dengan tepian naik landai bernuansa earthy-modern. Sangat digemari hotel, restoran, dan kafe untuk hidangan etnik berkelas.',
  },
  {
    id: 'prod-23',
    name: 'Lumpang Tumbuk Bumbu Lempung Tebal',
    category: 'Dapur & Memasak',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-suparmi',
    price: 35000,
    rating: 4.9,
    reviews: 64,
    badge: 'Dapur Otentik',
    badgeColor: 'bg-orange-100 text-orange-900 border border-orange-200',
    artisan: 'Ibu Suparmi (Kriya Sayangan)',
    image: 'images/product_lumpang_bumbu.jpg',
    realPhoto: 'images/dokumentasi/img_2260.jpg',
    specs: 'Tinggi 16 cm, Diameter 15 cm, Dinding Tebal 3 cm, Termasuk Alu Kayu',
    desc: 'Lumpang gerabah berdinding kokoh untuk menumbuk bumbu basah, sambal kencur, jamu herbal, dan kacang tanah tanpa merusak aroma alami bahan.',
  },
  {
    id: 'prod-24',
    name: 'Stool Bangku Taman Terakota Motif Monstera',
    category: 'Pot & Lansekap Taman',
    origin: 'Dusun Sayangan',
    artisanId: 'artisan-wiyono',
    price: 135000,
    rating: 5.0,
    reviews: 28,
    badge: 'Tahan Cuaca',
    badgeColor: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
    artisan: 'Bapak Tri Wiyono (Elvi Keramik)',
    image: 'images/product_stool_taman.jpg',
    realPhoto: 'images/dokumentasi/img_2239.jpg',
    specs: 'Tinggi 45 cm, Diameter Dudukan 32 cm, Kapasitas Beban 130 kg',
    desc: 'Kursi dudukan taman bulat dari lempung bakar tebal dengan ukiran relief daun monstera tropis. Tahan panas matahari dan hujan outdoor.',
  },
  {
    id: 'prod-25',
    name: 'Kendi Tradisional Gagang Melengkung & Tutup Lancip',
    category: 'Penyimpan Air & Kendi',
    origin: 'Dusun Paseban',
    artisanId: 'artisan-suhirno',
    price: 60000,
    rating: 4.9,
    reviews: 73,
    badge: 'Warisan Abad 15',
    badgeColor: 'bg-amber-100 text-amber-900 border border-amber-200',
    artisan: 'Pak Suhirno (Sanggar Sekar Wangi)',
    image: 'images/product_kendi_gagang.jpg',
    realPhoto: 'images/dokumentasi/img_2212.jpg',
    specs: 'Tinggi 28 cm, Kapasitas 1.5 Liter, Tutup Kerucut Mahkota, Moncong Lancip',
    desc: 'Kendi air minum klasik Melikan dengan pegangan lengkung ergonomis dan tutup mahkota lancip. Menyejukkan air minum secara alami bebas zat kimia.',
  },
  {
    id: 'prod-26',
    name: 'Cangkir Mug Jawa Bertutup Pentul Lempung',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-yani',
    price: 25000,
    rating: 4.8,
    reviews: 140,
    badge: 'Favorit Wedangan',
    badgeColor: 'bg-amber-100 text-amber-900 border border-amber-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_cangkir_bertutup.jpg',
    realPhoto: 'images/dokumentasi/img_2219.jpg',
    specs: 'Kapasitas 350 ml, Dilengkapi Tutup Pentul & Gagang Nyaman',
    desc: 'Mug minum khas angkringan dan kedai kopi Nusantara. Tutup lempung menjaga suhu hangat wedang jahe, kopi tubruk, dan teh nasgitel lebih lama.',
  },
  {
    id: 'prod-27',
    name: 'Pot Silinder Ulir Gelombang Minimalis',
    category: 'Pot & Lansekap Taman',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-nawawi',
    price: 38000,
    rating: 4.8,
    reviews: 82,
    badge: 'Desain Minimalis',
    badgeColor: 'bg-stone-100 text-stone-800 border border-stone-200',
    artisan: 'Bapak Muh Nawawi (Barokah Keramik)',
    image: 'images/product_pot_ulir.jpg',
    realPhoto: 'images/dokumentasi/img_2245.jpg',
    specs: 'Tinggi 30 cm, Diameter 20 cm, Tekstur Ulir Spiral Berundak',
    desc: 'Pot tanaman indoor/outdoor dengan aksen ulir melingkar horizontal modern. Memberikan nuansa estetik Scandinavian-rustic pada tanaman hias.',
  },
  {
    id: 'prod-28',
    name: 'Chafing Dish / Wadah Prasmanan Pemanas Gerabah',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-nawawi',
    price: 115000,
    rating: 4.9,
    reviews: 39,
    badge: 'Katering & Horeka',
    badgeColor: 'bg-orange-100 text-orange-900 border border-orange-200',
    artisan: 'Bapak Muh Nawawi (Barokah Keramik)',
    image: 'images/product_chafing_dish.jpg',
    realPhoto: 'images/dokumentasi/img_2220.jpg',
    specs: 'Diameter 28 cm, Termasuk Tungku Lilin Bintang, Tutup Kubah Pentul',
    desc: 'Wadah saji prasmanan tradisional dengan tungku lilin aromatik berlubang bintang di bagian bawah. Menjaga hidangan gulai, sup, dan sayur tetap panas di meja perjamuan.',
  },
  {
    id: 'prod-29',
    name: 'Teko Teh Kyusu Gagang Samping Tradisional',
    category: 'Tableware & Minum',
    origin: 'Dusun Pagerjurang',
    artisanId: 'artisan-yani',
    price: 58000,
    rating: 4.8,
    reviews: 51,
    badge: 'Seduh Teh Unik',
    badgeColor: 'bg-teal-100 text-teal-900 border border-teal-200',
    artisan: 'Ibu Yani (Sanggar Tanah Asri)',
    image: 'images/product_teko_kyusu.jpg',
    realPhoto: 'images/dokumentasi/img_2261.jpg',
    specs: 'Kapasitas 650 ml, Gagang Silinder Samping Ergonomis, Filter Saringan Lempung',
    desc: 'Teko seduh teh dengan pegangan silinder samping ala Kyusu tradisional Jawa. Menuangkan air teh dengan kontrol presisi tanpa pergelangan tangan lelah.',
  },
];

// ==========================================
// PROFIL LENGKAP PARA PENGRAJIN WARGA SENTRA MELIKAN & PASEBAN
// ==========================================
const ARTISANS = [
  {
    id: 'artisan-suparmi',
    name: 'Ibu Suparmi',
    workshop: 'Kriya Sayangan Tradisional',
    role: 'Maestro Cobek Layah & Piranti Dapur',
    dusun: 'Dusun Sayangan, Melikan',
    dusunId: 'Dusun Sayangan',
    address: 'Dukuh Sayangan RT 01 / RW 02, Desa Melikan, Kec. Wedi, Klaten (Dekat Tugu Gerabah)',
    phone: '6281234567891',
    avatar: 'images/artisan_ibu_suparmi.jpg',
    experience: 'Generasi ke-3 • Sejak 1994 (30+ Tahun Berkarya)',
    capacity: '1.800 pcs / bulan',
    bio: 'Meneruskan teknik putaran miring 35° dari simbah buyut. Lempung Sayangan difermentasi 7 hari sehingga menghasilkan pori mikro padat yang tidak rontok saat mengulek bumbu pedas.',
    productIds: ['prod-2', 'prod-7', 'prod-9', 'prod-23'],
    acceptCustom: true,
    acceptEdukasi: true,
  },
  {
    id: 'artisan-yani',
    name: 'Ibu Yani',
    workshop: 'Yani Keramik & Sanggar Tanah Asri',
    role: 'Maestro Set Poci Teh & Tableware Alami',
    dusun: 'Dusun Pagerjurang, Melikan',
    dusunId: 'Dusun Pagerjurang',
    address: 'Jl. Raya Melikan - Pagerjurang RT 03 / RW 01, Desa Melikan, Kec. Wedi, Klaten',
    phone: '6281234567892',
    avatar: 'images/artisan_ibu_yani.jpg',
    experience: 'Generasi ke-3 • Sejak 1996 (28 Tahun Berkarya)',
    capacity: '1.200 set / bulan',
    bio: 'Fokus pada tableware alami dan bejana tahan api. Setiap poci dan cangkir dibakar menggunakan kayu mahoni kering menghasilkan aroma earthy yang memperkaya cita rasa teh Wasgitel.',
    productIds: ['prod-3', 'prod-5', 'prod-8', 'prod-11', 'prod-12', 'prod-17', 'prod-21', 'prod-26', 'prod-29'],
    acceptCustom: true,
    acceptEdukasi: true,
  },
  {
    id: 'artisan-suhirno',
    name: 'Pak Suhirno',
    workshop: 'Sanggar Sekar Wangi & Laboratorium Kendi',
    role: 'Konservator Kendi Maling & Black Pottery',
    dusun: 'Dusun Paseban, Bayat',
    dusunId: 'Dusun Paseban',
    address: 'Dusun I Paseban, Kec. Bayat, Kab. Klaten 57461 (Dekat Makam Ki Depok)',
    phone: '6281234567890',
    avatar: 'images/artisan_pak_suhirno.jpg',
    experience: 'Generasi ke-4 • Sejak 1988 (36 Tahun Berkarya)',
    capacity: '800 pcs / bulan',
    bio: 'Menjaga wasiat leluhur Ki Depok abad ke-15. Membina puluhan pemuda desa memproduksi kendi maling hidrolik dan black pottery reduksi asap daun munggur 100% bebas timbal.',
    productIds: ['prod-1', 'prod-10', 'prod-13', 'prod-14', 'prod-19', 'prod-25'],
    acceptCustom: true,
    acceptEdukasi: true,
  },
  {
    id: 'artisan-nawawi',
    name: 'Bapak Muh Nawawi',
    workshop: 'Barokah Keramik Masal',
    role: 'Spesialis Produksi Massal Horeka & Bejana Api',
    dusun: 'Dusun Pagerjurang, Melikan',
    dusunId: 'Dusun Pagerjurang',
    address: 'Dukuh Pagerjurang RT 02 / RW 01, Desa Melikan, Kec. Wedi, Klaten',
    phone: '6281234567802',
    avatar: 'images/artisan_pak_suhirno.jpg',
    experience: 'Generasi ke-2 • Sejak 1992 (32 Tahun Berkarya)',
    capacity: '2.500 pcs / bulan',
    bio: 'Pusat pasokan massal kuali rawon soto kompor langsung, piring saji saung, dan bejana tahan panas untuk jaringan warung makan di Solo-Yogyakarta.',
    productIds: ['prod-4', 'prod-18', 'prod-22', 'prod-27', 'prod-28'],
    acceptCustom: true,
    acceptEdukasi: false,
  },
  {
    id: 'artisan-wiyono',
    name: 'Bapak Tri Wiyono',
    workshop: 'Elvi Keramik (EK)',
    role: 'Maestro Edukasi Kriya & Souvenir Budaya',
    dusun: 'Dusun Sayangan, Melikan',
    dusunId: 'Dusun Sayangan',
    address: 'Dukuh Sayangan RT 01 (Dekat Tugu Gerabah), Desa Melikan, Wedi, Klaten',
    phone: '6281234567803',
    avatar: 'images/artisan_ibu_suparmi.jpg',
    experience: 'Generasi ke-2 • Sejak 2004 (20 Tahun Berkarya)',
    capacity: '1.500 pcs / bulan',
    bio: 'Spesialis souvenir kriya karakter budaya Jawa, celengan Semar, dan media motorik tanah liat yang sering menjadi tujuan eduwisata siswa dan studi mahasiswa.',
    productIds: ['prod-6', 'prod-15', 'prod-16', 'prod-20', 'prod-24'],
    acceptCustom: true,
    acceptEdukasi: true,
  },
];

const DUSUN_DATA = [
  {
    id: 'sayangan',
    name: 'Dusun Sayangan',
    title: 'Sentra Cobek Layah & Piranti Dapur Tradisional',
    families: 120,
    output: '45.000 pcs / bulan',
    specialty: 'Cobek layah lempung halus, wajan sangrai, anglo arang, celengan Semar',
    image: 'images/artisan_ibu_suparmi.jpg',
    leader: 'Ibu Suparmi',
    wa: '6281234567891',
    desc: 'Dusun Sayangan adalah pusat produksi cobek layah lempung halus terbesar di Klaten dengan pori mikro alami tidak mengikis pasir saat digunakan mengulek bumbu.',
  },
  {
    id: 'pagerjurang',
    name: 'Dusun Pagerjurang',
    title: 'Pusat Kuali, Poci Teh & Bejana Tahan Api Kompor',
    families: 85,
    output: '32.000 pcs / bulan',
    specialty: 'Kuali masak api langsung, set poci teh, cangkir kopi, gentong penyejuk air',
    image: 'images/artisan_ibu_yani.jpg',
    leader: 'Ibu Yani',
    wa: '6281234567892',
    desc: 'Sentra bejana berdinding tebal yang tahan panas api langsung kompor modern dan tungku kayu bakar, serta produsen set poci teh sangrai terkemuka.',
  },
  {
    id: 'paseban',
    name: 'Dusun Paseban',
    title: 'Laboratorium Kendi Maling & Black Pottery Reduksi',
    families: 45,
    output: '18.000 pcs / bulan',
    specialty: 'Kendi Maling hidrolik, vas Japandi, piring rustic horeka, pot sukulen',
    image: 'images/artisan_pak_suhirno.jpg',
    leader: 'Pak Suhirno',
    wa: '6281234567890',
    desc: 'Pusat konservasi seni kriya Ki Depok abad ke-15 dengan teknik hidrolik kendi maling terbalik dan pewarnaan asap daun munggur hitam kilap bebas timbal.',
  },
];

const WORKSHOPS = [
  {
    id: 'maestro',
    title: 'Praktik Putaran Miring 35°',
    target: 'Mahasiswa & Umum',
    price: 25000,
    duration: '90 Menit',
    features: ['Meja putar miring 35°', 'Bimbingan 1-on-1 maestro', 'Membentuk 2 karya', 'Bahan & celemek lengkap', 'Karya dibawa pulang'],
  },
  {
    id: 'sekolah',
    title: 'Eduwisata Budaya Siswa',
    target: 'Siswa TK, SD, SMP, SMA',
    price: 15000,
    duration: '60 Menit',
    features: ['Sejarah Ki Depok abad 15', 'Olah lempung motorik', 'Melukis celengan gerabah', 'Sertifikat edukasi kriya'],
  },
  {
    id: 'jelajah',
    title: 'Jelajah Sentra 3 Dusun',
    target: 'Keluarga & Komunitas',
    price: 35000,
    duration: '150 Menit',
    features: ['Walking tour 3 dusun', 'Proses pembakaran jerami', 'Demo hidrolik kendi maling', 'Wedang serai & polo pendem'],
  },
  {
    id: 'riset',
    title: 'Riset Etnosains & Hibah BIPEMAS',
    target: 'Peneliti & Mahasiswa',
    price: 10000,
    duration: 'Fleksibel',
    features: ['Akses data 258 KK pengrajin', 'Wawancara sesepuh desa', 'Fasilitasi sampel lempung', 'Ruang diskusi sanggar'],
  },
];

// ==========================================
// KOORDINAT RESMI SENTRA GERABAH MELIKAN (WEDI, KLATEN)
// ==========================================
const MELIKAN_COORDS = {
  lat: -7.7472,
  lon: 110.5847,
  name: 'Sentra Gerabah Melikan (Kec. Wedi, Kab. Klaten, Jawa Tengah)',
};

// PRESET WILAYAH TUJUAN UNTUK UJI COBA CEPAT / PILIHAN KOTA
const PRESET_DESTINATIONS = [
  { id: 'klaten', name: 'Klaten Kota (Alun-Alun Klaten)', lat: -7.7058, lon: 110.6053 },
  { id: 'jogja', name: 'Yogyakarta (Tugu / Malioboro / Sleman)', lat: -7.7828, lon: 110.3670 },
  { id: 'solo', name: 'Surakarta / Solo (Kentingan / Manahan)', lat: -7.5666, lon: 110.8283 },
  { id: 'boyolali', name: 'Boyolali Kota', lat: -7.5312, lon: 110.5960 },
  { id: 'magelang', name: 'Magelang & Borobudur', lat: -7.4705, lon: 110.2178 },
  { id: 'salatiga', name: 'Salatiga Kota', lat: -7.3305, lon: 110.5084 },
  { id: 'semarang', name: 'Semarang (Simpang Lima)', lat: -6.9932, lon: 110.4203 },
  { id: 'surabaya', name: 'Surabaya (Gubeng / Perak)', lat: -7.2575, lon: 112.7521 },
  { id: 'malang', name: 'Malang Kota', lat: -7.9797, lon: 112.6304 },
  { id: 'bandung', name: 'Bandung (Gedung Sate)', lat: -6.9039, lon: 107.6186 },
  { id: 'jakarta', name: 'DKI Jakarta & Jabodetabek', lat: -6.2088, lon: 106.8456 },
  { id: 'denpasar', name: 'Denpasar & Kuta (Bali)', lat: -8.6705, lon: 115.2126 },
  { id: 'lampung', name: 'Bandar Lampung (Sumatera)', lat: -5.4297, lon: 105.2625 },
  { id: 'medan', name: 'Medan (Sumatera Utara)', lat: 3.5952, lon: 98.6722 },
  { id: 'makassar', name: 'Makassar (Sulawesi Selatan)', lat: -5.1477, lon: 119.4327 },
];

// FUNGSI HAVERSINE UNTUK MENGHITUNG JARAK REAL BERDASARKAN KOORDINAT BUMI
function calculateHaversineKm(lat1, lon1, lat2, lon2) {
  if (lat1 == null || lon1 == null || lat2 == null || lon2 == null) return 0;
  const R = 6371; // Radius bumi dalam kilometer
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

// LOGIKA TARIF ONGKIR & EKSPEDISI ASLI BERDASARKAN JARAK MELIKAN KE PEMESAN
function getAvailableCouriers(distanceKm) {
  const roadKm = Math.max(1, Math.round(distanceKm * 1.2));
  const list = [];

  // 1. Kurir Khusus Kargo Truk Sentra Melikan (Paling Aman untuk Gerabah / Fragile Ceramic)
  let kargoFee = 25000;
  if (roadKm <= 35) {
    kargoFee = 25000;
  } else if (roadKm <= 100) {
    kargoFee = 35000;
  } else if (roadKm <= 250) {
    kargoFee = 45000 + Math.round((roadKm - 100) * 80);
  } else if (roadKm <= 650) {
    kargoFee = 57000 + Math.round((roadKm - 250) * 65);
  } else {
    kargoFee = 85000 + Math.round((roadKm - 650) * 85);
  }
  kargoFee = Math.ceil(kargoFee / 1000) * 1000;

  list.push({
    id: 'kargo-sentra',
    name: 'Kargo Truk Sentra Melikan',
    badge: 'Paling Aman & Rekomendasi Kriya',
    fee: kargoFee,
    etd: roadKm <= 50 ? '1 Hari (Besok Tiba)' : roadKm <= 250 ? '1 - 2 Hari' : roadKm <= 650 ? '2 - 3 Hari' : '3 - 5 Hari',
    desc: 'Armada tertutup khusus muatan gerabah, proteksi jerami tebal & peti kayu.',
    icon: '🚛',
  });

  // 2. JNE Trucking (JTR) Kargo Reguler
  let jneFee = 28000 + Math.round(roadKm * 75);
  jneFee = Math.ceil(jneFee / 1000) * 1000;
  list.push({
    id: 'jne-jtr',
    name: 'JNE Trucking (JTR)',
    badge: 'Kargo Reguler',
    fee: jneFee,
    etd: roadKm <= 100 ? '1 - 2 Hari' : roadKm <= 500 ? '2 - 4 Hari' : '4 - 7 Hari',
    desc: 'Layanan kargo paket berat JNE dengan resi pelacakan online.',
    icon: '📦',
  });

  // 3. SiCepat Cargo / J&T Cargo
  let sicepatFee = 30000 + Math.round(roadKm * 80);
  sicepatFee = Math.ceil(sicepatFee / 1000) * 1000;
  list.push({
    id: 'sicepat-cargo',
    name: 'SiCepat Cargo / J&T Cargo',
    badge: 'Kargo Kilat',
    fee: sicepatFee,
    etd: roadKm <= 100 ? '1 - 2 Hari' : roadKm <= 500 ? '2 - 3 Hari' : '3 - 6 Hari',
    desc: 'Pengiriman kargo kilat antar depo hub logistik.',
    icon: '⚡',
  });

  // 4. Kurir Lokal / Same Day Sentra Melikan (Khusus Klaster Terdekat <= 45 km)
  if (roadKm <= 45) {
    const localFee = roadKm <= 15 ? 20000 : 20000 + Math.round((roadKm - 15) * 1200);
    list.unshift({
      id: 'kurir-lokal',
      name: 'Kurir Pickup / Roda-3 Sentra Melikan',
      badge: 'Same Day (Hari Ini)',
      fee: Math.ceil(localFee / 1000) * 1000,
      etd: 'Hari Ini (Same Day)',
      desc: 'Diantar langsung oleh armada pengrajin lokal untuk area Klaten, Solo, & Jogja.',
      icon: '🛵',
    });
  }

  return list;
}

export default function Welcome() {
  const [activeTab, setActiveTab] = useState('beranda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modals & Drawers
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFieldPhoto, setShowFieldPhoto] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Cart State
  const [cartItems, setCartItems] = useState([
    { ...PRODUCTS[0], qty: 1 },
    { ...PRODUCTS[1], qty: 2 },
  ]);

  // GPS & Real Distance Shipping State
  const [selectedPresetId, setSelectedPresetId] = useState('jogja');
  const [userCoords, setUserCoords] = useState({
    lat: -7.7828,
    lon: 110.3670,
    label: 'Yogyakarta (Tugu / Malioboro / Sleman)',
    isGps: false,
    accuracy: null,
  });
  const [customLabel, setCustomLabel] = useState('');
  const [customLat, setCustomLat] = useState('-7.424');
  const [customLon, setCustomLon] = useState('109.230');
  const [isGpsLoading, setIsGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState(null);
  const [selectedCourierId, setSelectedCourierId] = useState('kargo-sentra');

  // Artisan Target in Cart (Bisa dipilih langsung atau ketik sendiri)
  const [selectedArtisanId, setSelectedArtisanId] = useState('artisan-suhirno');
  const [customArtisanPhone, setCustomArtisanPhone] = useState('');
  const [isCustomPhoneMode, setIsCustomPhoneMode] = useState(false);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedOrigin, setSelectedOrigin] = useState('Semua');
  const [selectedArtisanFilter, setSelectedArtisanFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Artisan Directory Tab Filter
  const [artisanDusunFilter, setArtisanDusunFilter] = useState('Semua');

  // B2B Wholesale Simulator
  const [b2bQuantity, setB2bQuantity] = useState(200);
  const [b2bCustomLogo, setB2bCustomLogo] = useState(true);
  const [b2bMunggurSmoke, setB2bMunggurSmoke] = useState(true);

  // Workshop Form
  const [bookName, setBookName] = useState('');
  const [bookPhone, setBookPhone] = useState('');
  const [bookPkg, setBookPkg] = useState('maestro');
  const [bookQty, setBookQty] = useState(20);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...item, qty: 1 }];
    });
    if (item.artisanId) {
      setSelectedArtisanId(item.artisanId);
      setIsCustomPhoneMode(false);
    }
    triggerToast(`"${item.name}" ditambahkan ke keranjang.`);
  };

  const handleDirectOrderArtisan = (artisan, product = null) => {
    setSelectedArtisanId(artisan.id);
    setIsCustomPhoneMode(false);
    if (product) {
      handleAddToCart(product);
    }
    setIsCartOpen(true);
  };

  const updateCartQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const n = item.qty + delta;
            return n > 0 ? { ...item, qty: n } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartSubtotal = useMemo(
    () => cartItems.reduce((acc, i) => acc + i.price * i.qty, 0),
    [cartItems]
  );
  const totalItemsCount = useMemo(
    () => cartItems.reduce((acc, i) => acc + i.qty, 0),
    [cartItems]
  );

  // REAL DISTANCE & COURIER CALCULATIONS
  const realDistanceKm = useMemo(() => {
    return calculateHaversineKm(
      MELIKAN_COORDS.lat,
      MELIKAN_COORDS.lon,
      userCoords.lat,
      userCoords.lon
    );
  }, [userCoords]);

  const availableCouriers = useMemo(() => {
    return getAvailableCouriers(realDistanceKm);
  }, [realDistanceKm]);

  const selectedCourier = useMemo(() => {
    return (
      availableCouriers.find((c) => c.id === selectedCourierId) ||
      availableCouriers[0]
    );
  }, [availableCouriers, selectedCourierId]);

  const shippingFee = selectedCourier ? selectedCourier.fee : 35000;
  const crateFee = cartItems.length > 0 ? 20000 : 0;
  const grandTotal = cartSubtotal + (cartItems.length > 0 ? shippingFee + crateFee : 0);

  // PRESET & GPS HANDLERS
  const handlePresetChange = (presetId) => {
    setSelectedPresetId(presetId);
    setGpsError(null);

    if (presetId === 'gps') {
      detectUserGps();
      return;
    }

    if (presetId === 'custom') {
      const latVal = parseFloat(customLat) || -7.7472;
      const lonVal = parseFloat(customLon) || 110.5847;
      setUserCoords({
        lat: latVal,
        lon: lonVal,
        label: customLabel || 'Alamat / Koordinat Kustom',
        isGps: false,
        accuracy: null,
      });
      return;
    }

    const found = PRESET_DESTINATIONS.find((p) => p.id === presetId);
    if (found) {
      setUserCoords({
        lat: found.lat,
        lon: found.lon,
        label: found.name,
        isGps: false,
        accuracy: null,
      });
      const d = calculateHaversineKm(MELIKAN_COORDS.lat, MELIKAN_COORDS.lon, found.lat, found.lon);
      triggerToast(`Tujuan diubah ke ${found.name} (${d} km dari Melikan)`);
    }
  };

  const handleCustomCoordsChange = (latStr, lonStr) => {
    setCustomLat(latStr);
    setCustomLon(lonStr);
    const parsedLat = parseFloat(latStr);
    const parsedLon = parseFloat(lonStr);
    if (!isNaN(parsedLat) && !isNaN(parsedLon)) {
      setUserCoords({
        lat: parsedLat,
        lon: parsedLon,
        label: customLabel || `Titik Koordinat (${parsedLat.toFixed(3)}, ${parsedLon.toFixed(3)})`,
        isGps: false,
        accuracy: null,
      });
    }
  };

  const detectUserGps = () => {
    if (typeof window === 'undefined' || !navigator?.geolocation) {
      setGpsError('Peramban atau perangkat Anda tidak mendukung fitur GPS.');
      triggerToast('Perangkat tidak mendukung geolokasi GPS.');
      return;
    }

    setIsGpsLoading(true);
    setGpsError(null);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const acc = Math.round(pos.coords.accuracy || 0);

        let label = `Titik GPS Pemesan (${lat.toFixed(4)}, ${lon.toFixed(4)})`;

        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
          if (res.ok) {
            const data = await res.json();
            const addr = data.address || {};
            const city = addr.city || addr.town || addr.municipality || addr.county || addr.state_district || addr.state || '';
            const sub = addr.suburb || addr.village || addr.neighbourhood || '';
            if (city) {
              label = sub ? `${sub}, ${city}` : city;
            } else if (data.name) {
              label = data.name;
            }
          }
        } catch {
          // offline / blocked - fallback to coordinate display
        }

        setUserCoords({
          lat,
          lon,
          label,
          isGps: true,
          accuracy: acc,
        });
        setSelectedPresetId('gps');
        setIsGpsLoading(false);
        const dist = calculateHaversineKm(MELIKAN_COORDS.lat, MELIKAN_COORDS.lon, lat, lon);
        triggerToast(`📍 GPS Terdeteksi: ${label} (${dist} km dari Sentra Melikan)`);
      },
      (err) => {
        setIsGpsLoading(false);
        let msg = 'Izin GPS tidak diberikan.';
        if (err.code === 1) msg = 'Izin GPS ditolak oleh browser/pengguna.';
        else if (err.code === 2) msg = 'Posisi GPS tidak dapat ditemukan.';
        else if (err.code === 3) msg = 'Waktu permintaan GPS habis.';
        setGpsError(msg);
        triggerToast(`⚠️ ${msg} Menggunakan kota tujuan alternatif.`);
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 30000 }
    );
  };

  // Current Target Artisan Object
  const currentTargetArtisan = useMemo(() => {
    return ARTISANS.find((a) => a.id === selectedArtisanId) || ARTISANS[0];
  }, [selectedArtisanId]);

  // Active Target Phone Number
  const activeTargetPhone = useMemo(() => {
    if (isCustomPhoneMode && customArtisanPhone) {
      return customArtisanPhone.replace(/[^0-9]/g, '');
    }
    return currentTargetArtisan.phone;
  }, [isCustomPhoneMode, customArtisanPhone, currentTargetArtisan]);

  // Order Text Format for WhatsApp (Lengkap dengan Koordinat GPS & Rute Google Maps)
  const checkoutMessage = useMemo(() => {
    const list = cartItems
      .map((i) => `• ${i.name} (${i.qty}x) = Rp ${(i.price * i.qty).toLocaleString('id-ID')} [Pembuat: ${i.artisan}]`)
      .join('\n');
    
    const targetGreeting = isCustomPhoneMode
      ? 'Halo Pengrajin / Admin Sentra Gerabah Melikan!'
      : `Halo ${currentTargetArtisan.name} (${currentTargetArtisan.workshop})!`;

    const mapsRouteUrl = userCoords.lat && userCoords.lon
      ? `https://www.google.com/maps/dir/${MELIKAN_COORDS.lat},${MELIKAN_COORDS.lon}/${userCoords.lat},${userCoords.lon}`
      : 'https://maps.google.com/?q=Melikan+Klaten';

    const gpsStatusLine = userCoords.isGps
      ? `• Titik GPS Presisi: ${userCoords.lat.toFixed(5)}, ${userCoords.lon.toFixed(5)} (Akurasi: ±${userCoords.accuracy || 15} meter)\n• Status GPS: Terverifikasi Satelit Otomatis`
      : `• Titik Koordinat: ${userCoords.lat.toFixed(4)}, ${userCoords.lon.toFixed(4)} (Pilihan Wilayah)`;

    return `${targetGreeting}

Saya ingin memesan karya kriya buatan Anda melalui Platform PkM Sentra Melikan & Paseban:
${list}

📍 DATA ALAMAT & LOKASI PENGIRIMAN:
• Tujuan: ${userCoords.label}
${gpsStatusLine}
• Jarak Tempuh Riil: ${realDistanceKm} km dari Sentra Melikan (Rute Truk: ~${Math.round(realDistanceKm * 1.2)} km)
• Rute Google Maps Driver: ${mapsRouteUrl}

🚚 PILIHAN EKSPEDISI & ONGKIR RIIL:
• Ekspedisi: ${selectedCourier.name} (${selectedCourier.badge})
• Estimasi Tiba: ${selectedCourier.etd}
• Tarif Ongkir Riil: Rp ${shippingFee.toLocaleString('id-ID')}
• Peti Kayu Standar: Rp ${crateFee.toLocaleString('id-ID')} (Wajib proteksi kriya gerabah)
• Subtotal Produk: Rp ${cartSubtotal.toLocaleString('id-ID')}
• TOTAL PEMBAYARAN: Rp ${grandTotal.toLocaleString('id-ID')}

Mohon konfirmasi ketersediaan barang dan jadwal pengiriman via ekspedisi tersebut. Terima kasih!`;
  }, [cartItems, cartSubtotal, crateFee, shippingFee, grandTotal, isCustomPhoneMode, currentTargetArtisan, userCoords, realDistanceKm, selectedCourier]);

  const checkoutWaLink = useMemo(() => {
    let clean = (activeTargetPhone || '').replace(/[^0-9]/g, '');
    if (clean.startsWith('0')) {
      clean = '62' + clean.slice(1);
    }
    if (clean && clean.length >= 9) {
      return `https://api.whatsapp.com/send?phone=${clean}&text=${encodeURIComponent(checkoutMessage)}`;
    }
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(checkoutMessage)}`;
  }, [activeTargetPhone, checkoutMessage]);

  const copyOrderToClipboard = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(checkoutMessage).then(() => {
        triggerToast('Format rincian pesanan berhasil disalin ke clipboard!');
      }).catch(() => {
        triggerToast('Gagal menyalin rincian pesanan.');
      });
    } else {
      triggerToast('Fitur clipboard tidak didukung peramban.');
    }
  };

  const handleWorkshopSubmit = (e) => {
    e.preventDefault();
    if (!bookName || !bookPhone) {
      alert('Mohon isi nama dan nomor WhatsApp');
      return;
    }
    const pkg = WORKSHOPS.find((p) => p.id === bookPkg) || WORKSHOPS[0];
    const total = pkg.price * bookQty;
    const msg = `Halo Pengelola Eduwisata Sentra Melikan!\n\nSaya ingin reservasi workshop:\n• Nama: ${bookName}\n• WhatsApp: ${bookPhone}\n• Paket: ${pkg.title}\n• Jumlah Peserta: ${bookQty} Orang\n• Estimasi Total: Rp ${total.toLocaleString('id-ID')}\n\nMohon informasi ketersediaan jadwal. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=6281234567890&text=${encodeURIComponent(msg)}`, '_blank');
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat = selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchOrigin = selectedOrigin === 'Semua' || item.origin === selectedOrigin;
      const matchArtisan = selectedArtisanFilter === 'Semua' || item.artisan.includes(selectedArtisanFilter);
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchOrigin && matchArtisan && matchSearch;
    });
  }, [selectedCategory, selectedOrigin, selectedArtisanFilter, searchQuery]);

  const filteredArtisans = useMemo(() => {
    return ARTISANS.filter((artisan) => {
      if (artisanDusunFilter === 'Semua') return true;
      return artisan.dusunId === artisanDusunFilter;
    });
  }, [artisanDusunFilter]);

  const selectTab = (tabId) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NAV_ITEMS = [
    { id: 'beranda', label: 'Beranda', icon: '🏛️', desc: 'Pusat sentra & ringkasan' },
    { id: 'katalog', label: 'E-Katalog Kriya', badge: '29 Produk', icon: '🏺', desc: 'Koleksi lengkap 29 kriya otentik' },
    { id: 'pengrajin', label: 'Profil Pengrajin', badge: 'Warga', icon: '👨‍🎨', desc: 'Profil maestro & karyanya' },
    { id: 'edukasi', label: 'Wisata Edukasi', icon: '🎓', desc: 'Workshop putaran miring 35°' },
    { id: 'b2b', label: 'Kemitraan B2B', icon: '🏢', desc: 'Katalog grosir hotel & restoran' },
    { id: 'warisan', label: 'Ensiklopedia 35°', icon: '📜', desc: 'Etnosains & sejarah Ki Depok' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 font-sans antialiased flex flex-col selection:bg-[#963824] selection:text-white">
      <Head title="Sentra Gerabah Melikan Wedi Klaten - Tim PkM UBSI Hibah BIPEMAS 2026" />

      {/* ========================================================
          1. HEADER (CLEAN PORCELAIN, ULTRA-RESPONSIVE ACROSS ALL DEVICES)
      ======================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Official Logo Branding */}
            <div
              onClick={() => selectTab('beranda')}
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group shrink-0"
            >
              <img
                src="images/logo-melikan.png"
                alt="Logo Sentra Melikan Gerabah Klaten"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="hidden min-[480px]:inline-block text-[10px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded border border-amber-200">
                Tim PkM UBSI 2026
              </span>
            </div>

            {/* Desktop Navigation Tabs (>= 1024px) */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => selectTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
                    }`}
                  >
                    {tab.label}
                    {tab.badge && (
                      <span className={`ml-1.5 text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-amber-400 text-stone-900' : 'bg-stone-200 text-stone-700'
                      }`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-lg border border-stone-300 transition-all flex items-center gap-1.5 shadow-xs touch-manipulation"
                aria-label="Keranjang Belanja"
              >
                <span className="text-sm">🛒</span>
                <span className="hidden sm:inline">Keranjang</span>
                {totalItemsCount > 0 && (
                  <span className="bg-[#963824] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* Reservation CTA Button */}
              <button
                onClick={() => {
                  setActiveTab('edukasi');
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-[#963824] hover:bg-[#7D2E1D] text-white text-xs font-semibold px-2.5 sm:px-3.5 py-1.5 rounded-lg transition-all shadow-xs flex items-center gap-1 touch-manipulation"
              >
                <span>Reservasi</span>
                <span className="hidden sm:inline">Workshop</span>
                <span className="text-xs">→</span>
              </button>

              {/* Mobile Menu Hamburger Toggle (< 1024px) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-100 transition-colors touch-manipulation ml-0.5"
                aria-label="Buka Menu Navigasi"
              >
                <span className="text-base font-bold leading-none">
                  {isMobileMenuOpen ? '✕' : '☰'}
                </span>
              </button>
            </div>
          </div>

          {/* Swipeable Horizontal Quick Tab Bar (< 1024px) */}
          <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar border-t border-stone-100 scroll-smooth">
            {NAV_ITEMS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => selectTab(tab.id)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-semibold transition-all shrink-0 touch-manipulation flex items-center gap-1 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                  }`}
                >
                  <span className="text-[11px]">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Full Navigation Drawer Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white/98 backdrop-blur-lg px-4 py-3 shadow-lg animate-fadeIn">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">
              Navigasi Platform Sentra Melikan & Paseban
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {NAV_ITEMS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => selectTab(tab.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${
                      isActive ? 'bg-stone-900 text-white' : 'hover:bg-stone-100 text-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{tab.icon}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold">{tab.label}</p>
                          {tab.badge && (
                            <span className="text-[9px] font-bold bg-[#963824] text-white px-1.5 py-0.2 rounded">
                              {tab.badge}
                            </span>
                          )}
                        </div>
                        <p className={`text-[10px] ${isActive ? 'text-stone-300' : 'text-stone-500'}`}>
                          {tab.desc}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold opacity-60">→</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 mt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-stone-500">Sentra Gerabah Wedi Klaten:</span>
              <a
                href="https://api.whatsapp.com/send?phone=6281234567890&text=Halo%20Tim%20PkM%20UBSI%20Sentra%20Melikan"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <span>Chat Hotline</span>
                <span>💬</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================
          ACTIVE VIEW RENDERING (RESPONSIVE IN ALL LAYOUTS)
      ======================================================== */}
      <main className="flex-grow">
        
        {/* ----------------------------------------------------
            TAB 1: BERANDA HUB (RESPONSIVE MODERN ATELIER)
        ---------------------------------------------------- */}
        {activeTab === 'beranda' && (
          <div>
            
            {/* HERO SECTION */}
            <section className="bg-white border-b border-stone-200 py-8 sm:py-12 lg:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                  
                  {/* Left Column Text Content */}
                  <div className="lg:col-span-7 text-left">
                    <div className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 border border-stone-200 flex-wrap">
                      <span className="text-[#963824]">✦</span>
                      <span>Pengabdian Kemitraan Masyarakat (PkM) 2026 Hibah BIPEMAS</span>
                      <span className="hidden sm:inline text-stone-300">•</span>
                      <span className="hidden sm:inline">Tim PkM UBSI</span>
                    </div>

                    <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-[1.15] mb-3 sm:mb-4">
                      Melestarikan Warisan Tanah Liat: <span className="text-[#963824]">Membangun Ekonomi Kreatif.</span>
                    </h1>

                    <p className="text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed max-w-xl mb-5 sm:mb-6">
                      Pusat ekosistem kriya gerabah Desa Melikan & Paseban, Klaten. Menghubungkan 258 keluarga pengrajin dengan pasar nasional, kemitraan horeka modern, serta eduwisata teknik putaran miring 35° warisan abad ke-15.
                    </p>

                    {/* CTA Action Buttons: full width on mobile phone, inline on desktop */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                      <button
                        onClick={() => selectTab('katalog')}
                        className="bg-[#963824] hover:bg-[#7D2E1D] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 touch-manipulation"
                      >
                        <span>Jelajahi 29 Ragam Kriya</span>
                        <span>→</span>
                      </button>

                      <button
                        onClick={() => selectTab('pengrajin')}
                        className="bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg border border-stone-300 transition-all flex items-center justify-center gap-2 touch-manipulation"
                      >
                        <span>👨‍🎨</span>
                        <span>Profil Pengrajin Warga</span>
                      </button>
                    </div>

                    {/* Responsive Metrics Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-4 border-t border-stone-100">
                      <div className="bg-stone-50 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none">
                        <p className="text-lg sm:text-xl lg:text-2xl font-black text-stone-900">258 KK</p>
                        <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">Mayoritas Pengrajin</p>
                      </div>
                      <div className="bg-stone-50 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none">
                        <p className="text-lg sm:text-xl lg:text-2xl font-black text-stone-900">3 Dusun</p>
                        <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">Klaster Kriya Klaten</p>
                      </div>
                      <div className="bg-stone-50 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none">
                        <p className="text-lg sm:text-xl lg:text-2xl font-black text-stone-900">96.000</p>
                        <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">Kapasitas Pcs/Bln</p>
                      </div>
                      <div className="bg-stone-50 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none">
                        <p className="text-lg sm:text-xl lg:text-2xl font-black text-stone-900">Abad 15</p>
                        <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">Warisan Ki Depok</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Responsive Photographic Hero Card */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 h-60 min-[480px]:h-72 sm:h-80 lg:h-96">
                      <img
                        src="images/hero_putaran_miring.jpg"
                        alt="Putaran Miring 35 Derajat"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                      
                      <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        📍 Sanggar Dusun Paseban
                      </div>

                      <div className="absolute bottom-3 inset-x-3 text-white text-left">
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wide">
                          Teknik Langka Dunia
                        </span>
                        <h4 className="text-sm sm:text-base font-bold mt-0.5">
                          Putaran Miring 35° (Tilted Wheel)
                        </h4>
                        <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5 line-clamp-2">
                          Inovasi ergonomi Ki Depok abad ke-15 yang menjaga kenyamanan dan martabat pengrajin wanita.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* VALUE PROPOSITION STRIP (COMPACT 2x2 ON MOBILE, 4-COL ON DESKTOP) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
              <div className="bg-white rounded-xl border border-stone-200 p-3 sm:p-4 shadow-xs">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                  
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-50/60 lg:bg-transparent">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center text-sm sm:text-base shrink-0 border border-amber-200">
                      🏺
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate">Putaran Miring 35°</h4>
                      <p className="text-[10px] sm:text-[11px] text-stone-500 truncate">Warisan Budaya WBTb</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-50/60 lg:bg-transparent">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center text-sm sm:text-base shrink-0 border border-emerald-200">
                      🍃
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate">100% Food-Grade</h4>
                      <p className="text-[10px] sm:text-[11px] text-stone-500 truncate">Asap munggur bebas timbal</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-50/60 lg:bg-transparent">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center text-sm sm:text-base shrink-0 border border-stone-200">
                      👥
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate">Bina 258 Pengrajin</h4>
                      <p className="text-[10px] sm:text-[11px] text-stone-500 truncate">Langsung warga 3 dusun</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-stone-50/60 lg:bg-transparent">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-50 text-orange-800 flex items-center justify-center text-sm sm:text-base shrink-0 border border-orange-200">
                      📦
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate">Garansi Pecah Ganti</h4>
                      <p className="text-[10px] sm:text-[11px] text-stone-500 truncate">Peti kayu standar aman</p>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* CURATED PRODUCTS PREVIEW */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                    Ragam Koleksi Kriya Unggulan
                  </h2>
                  <p className="text-xs text-stone-500">
                    Cobek, poci, kendi maling, kuali api, tableware & kerajinan etnosains Klaten.
                  </p>
                </div>
                <button
                  onClick={() => selectTab('katalog')}
                  className="text-xs font-semibold text-[#963824] hover:underline flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>Lihat Seluruh 29 Produk di E-Katalog</span>
                  <span>→</span>
                </button>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {PRODUCTS.slice(0, 6).map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div className="relative h-44 sm:h-48 bg-stone-100 overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                      <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs ${prod.badgeColor}`}>
                        {prod.badge}
                      </span>
                      <span className="absolute bottom-2.5 right-2.5 text-[10px] bg-stone-900/80 backdrop-blur-xs text-white font-medium px-2 py-0.5 rounded">
                        {prod.origin}
                      </span>
                    </div>

                    <div className="p-3.5 sm:p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                          <span className="truncate">{prod.category}</span>
                          <span className="font-semibold text-amber-700 shrink-0">★ {prod.rating}</span>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1 leading-snug line-clamp-2">
                          {prod.name}
                        </h3>
                        <p className="text-[11px] text-stone-500 font-medium mb-1">
                          Pengrajin: <span className="text-stone-800 font-semibold">{prod.artisan}</span>
                        </p>
                        <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                          {prod.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                        <div>
                          <p className="text-[10px] text-stone-400 font-semibold uppercase">Harga</p>
                          <p className="text-sm sm:text-base font-extrabold text-[#963824]">
                            Rp {prod.price.toLocaleString('id-ID')}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => {
                              setShowFieldPhoto(false);
                              setSelectedProduct(prod);
                            }}
                            className="text-xs font-semibold px-2.5 py-1.5 rounded border border-stone-300 text-stone-700 hover:bg-stone-50 touch-manipulation"
                          >
                            Detail
                          </button>
                          <button
                            onClick={() => handleAddToCart(prod)}
                            className="bg-[#963824] hover:bg-[#7D2E1D] text-white text-xs font-semibold px-3 py-1.5 rounded shadow-xs touch-manipulation"
                          >
                            + Keranjang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ARTISAN HIGHLIGHT STRIP */}
            <section className="bg-stone-100/70 border-y border-stone-200 py-8 sm:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8">
                  <div>
                    <span className="text-[11px] font-bold text-[#963824] uppercase tracking-wider">
                      Desa Komunitas Kriya
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-stone-900 mt-0.5">
                      Profil Maestro & Pengrajin Warga Melikan
                    </h2>
                    <p className="text-xs text-stone-600 mt-1">
                      Karya kriya dibuat langsung oleh tangan para pengrajin lokal tanpa perantara makelar.
                    </p>
                  </div>
                  <button
                    onClick={() => selectTab('pengrajin')}
                    className="text-xs font-bold text-[#963824] hover:underline flex items-center gap-1 self-start sm:self-auto"
                  >
                    <span>Lihat Seluruh Profil Pengrajin & Karyanya</span>
                    <span>→</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {ARTISANS.slice(0, 3).map((artisan) => (
                    <div key={artisan.id} className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="h-40 sm:h-44 rounded-lg overflow-hidden bg-stone-100 mb-3 relative">
                          <img src={artisan.avatar} alt={artisan.name} className="w-full h-full object-cover" loading="lazy" />
                          <span className="absolute bottom-2 left-2 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                            {artisan.dusun}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                          {artisan.experience}
                        </span>
                        <h3 className="text-base font-bold text-stone-900 mt-2">{artisan.name}</h3>
                        <p className="text-xs font-semibold text-[#963824] mb-1">{artisan.workshop}</p>
                        <p className="text-xs text-stone-600 leading-normal mb-3 line-clamp-3">{artisan.bio}</p>
                      </div>

                      <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                        <button
                          onClick={() => selectTab('pengrajin')}
                          className="font-bold text-[#963824] hover:underline"
                        >
                          Lihat {artisan.productIds.length} Karya Kriya →
                        </button>
                        <a
                          href={`https://api.whatsapp.com/send?phone=${artisan.phone}&text=${encodeURIComponent(`Halo ${artisan.name} (${artisan.workshop}), saya ingin memesan kriya buatan Anda.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
                        >
                          <span>Chat WA</span>
                          <span>💬</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ----------------------------------------------------
            TAB 2: E-KATALOG MARKETPLACE (14 PRODUCTS)
        ---------------------------------------------------- */}
        {activeTab === 'katalog' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-fadeIn">
            
            {/* Header Banner */}
            <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 mb-5 sm:mb-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-stone-900">E-Katalog Kriya Melikan</h1>
                  <span className="text-xs font-bold bg-[#963824] text-white px-2 py-0.5 rounded-full">
                    29 Produk Otentik
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  Produk kerajinan tangan pengrajin asli 3 dusun Klaten tanpa komisi perantara.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(true)}
                className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 touch-manipulation self-stretch sm:self-auto justify-center"
              >
                <span>🛒 Lihat Keranjang</span>
                <span className="bg-[#963824] px-1.5 py-0.2 rounded-full text-[10px]">({totalItemsCount})</span>
                <span>→</span>
              </button>
            </div>

            {/* Filter Bar with Horizontal Scrolling Chips on Mobile */}
            <div className="bg-white rounded-xl border border-stone-200 p-3.5 sm:p-4 mb-6 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                
                {/* Search Bar */}
                <div className="w-full sm:w-80 relative">
                  <input
                    type="text"
                    placeholder="Cari produk / nama pengrajin (Suparmi, Yani, Suhirno...)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 sm:py-1.5 rounded-lg border border-stone-300 text-xs sm:text-xs focus:ring-[#963824] focus:border-[#963824]"
                  />
                  <span className="absolute left-2.5 top-2.5 sm:top-2 text-stone-400 text-xs">🔍</span>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2 text-stone-400 hover:text-stone-600 text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Dusun Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 shrink-0">
                  <span className="text-xs text-stone-500 font-semibold shrink-0">Dusun:</span>
                  {['Semua', 'Dusun Sayangan', 'Dusun Pagerjurang', 'Dusun Paseban'].map((dus) => (
                    <button
                      key={dus}
                      onClick={() => setSelectedOrigin(dus)}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors touch-manipulation ${
                        selectedOrigin === dus
                          ? 'bg-stone-900 text-white'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {dus}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-stone-100">
                <span className="text-xs text-stone-500 font-semibold shrink-0">Kategori:</span>
                {['Semua', 'Dapur & Memasak', 'Tableware & Minum', 'Penyimpan Air & Kendi', 'Pot & Lansekap Taman', 'Dekorasi & Seni Kriya'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors touch-manipulation ${
                      selectedCategory === cat
                        ? 'bg-[#963824] text-white shadow-2xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Artisan Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-stone-100">
                <span className="text-xs text-stone-500 font-semibold shrink-0">Pengrajin:</span>
                {['Semua', 'Pak Suhirno', 'Ibu Suparmi', 'Ibu Yani', 'Bapak Muh Nawawi', 'Bapak Tri Wiyono'].map((art) => (
                  <button
                    key={art}
                    onClick={() => setSelectedArtisanFilter(art)}
                    className={`text-xs px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors touch-manipulation ${
                      selectedArtisanFilter === art
                        ? 'bg-stone-900 text-white shadow-2xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {art}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-stone-500 mb-4 px-1">
              <span>Menampilkan <strong>{filteredProducts.length}</strong> dari 14 produk kriya</span>
              {(selectedCategory !== 'Semua' || selectedOrigin !== 'Semua' || selectedArtisanFilter !== 'Semua' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('Semua');
                    setSelectedOrigin('Semua');
                    setSelectedArtisanFilter('Semua');
                    setSearchQuery('');
                  }}
                  className="text-[#963824] font-semibold hover:underline"
                >
                  Reset Semua Filter
                </button>
              )}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="relative h-44 sm:h-48 bg-stone-100 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs ${prod.badgeColor}`}>
                      {prod.badge}
                    </span>
                    <span className="absolute bottom-2 right-2 text-[10px] bg-stone-900/80 backdrop-blur-xs text-white px-2 py-0.5 rounded font-medium">
                      {prod.origin}
                    </span>
                  </div>

                  <div className="p-3.5 sm:p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                        <span className="truncate">{prod.category}</span>
                        <span className="font-semibold text-amber-700 shrink-0">★ {prod.rating} ({prod.reviews})</span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1 leading-snug line-clamp-2">
                        {prod.name}
                      </h3>
                      <p className="text-[11px] text-stone-500 font-medium mb-1 truncate">
                        Pengrajin: <span className="text-stone-800 font-semibold">{prod.artisan}</span>
                      </p>
                      <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                        {prod.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-1.5">
                      <div>
                        <p className="text-[10px] text-stone-400 font-semibold uppercase">Harga</p>
                        <p className="text-sm sm:text-base font-extrabold text-[#963824]">
                          Rp {prod.price.toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => {
                            setShowFieldPhoto(false);
                            setSelectedProduct(prod);
                          }}
                          className="text-xs font-semibold px-2 sm:px-2.5 py-1.5 rounded border border-stone-300 text-stone-700 hover:bg-stone-50 touch-manipulation"
                        >
                          Detail
                        </button>
                        <button
                          onClick={() => handleAddToCart(prod)}
                          className="bg-[#963824] hover:bg-[#7D2E1D] text-white text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded shadow-xs touch-manipulation"
                        >
                          + Keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-stone-200">
                <p className="text-stone-500 text-sm">Tidak ada produk yang cocok dengan pencarian.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Semua');
                    setSelectedOrigin('Semua');
                    setSelectedArtisanFilter('Semua');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-xs font-semibold text-[#963824] bg-stone-100 px-3 py-1.5 rounded-lg hover:bg-stone-200"
                >
                  Tampilkan Semua 29 Produk
                </button>
              </div>
            )}
          </div>
        )}

        {/* ----------------------------------------------------
            TAB 3: PROFIL PARA PENGRAJIN & KATALOG KARYANYA
        ---------------------------------------------------- */}
        {activeTab === 'pengrajin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-fadeIn">
            
            {/* Header Banner */}
            <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 mb-6 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-bold text-stone-900">
                      Profil Para Pengrajin Sentra Melikan & Paseban
                    </h1>
                    <span className="text-xs font-bold bg-[#963824] text-white px-2.5 py-0.5 rounded-full">
                      5 Maestro Warga
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
                    Hampir seluruh masyarakat Dusun Sayangan, Pagerjurang, dan Paseban mendedikasikan hidupnya sebagai pengrajin kriya tanah liat warisan Ki Depok abad ke-15. Kenali profil maestro, lihat katalog produk buatan mereka, dan pesan langsung ke pengrajin favorit Anda.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-4 py-2 rounded-lg shrink-0 touch-manipulation"
                >
                  Buka Keranjang ({totalItemsCount}) →
                </button>
              </div>

              {/* Dusun Filter Chips */}
              <div className="flex items-center gap-2 pt-4 mt-4 border-t border-stone-100 overflow-x-auto no-scrollbar">
                <span className="text-xs font-semibold text-stone-500 shrink-0">Filter Dusun:</span>
                {['Semua', 'Dusun Sayangan', 'Dusun Pagerjurang', 'Dusun Paseban'].map((dus) => (
                  <button
                    key={dus}
                    onClick={() => setArtisanDusunFilter(dus)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors touch-manipulation ${
                      artisanDusunFilter === dus
                        ? 'bg-[#963824] text-white shadow-2xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {dus}
                  </button>
                ))}
              </div>
            </div>

            {/* ARTISANS PROFILE & CREATIONS LIST */}
            <div className="space-y-8">
              {filteredArtisans.map((artisan) => {
                const artisanProducts = PRODUCTS.filter((p) => artisan.productIds.includes(p.id));

                return (
                  <div
                    key={artisan.id}
                    className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden"
                  >
                    {/* Artisan Header Bar */}
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-stone-50 via-white to-stone-50 border-b border-stone-200">
                      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
                        
                        {/* Profile Info */}
                        <div className="flex items-start sm:items-center gap-4">
                          <img
                            src={artisan.avatar}
                            alt={artisan.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-stone-200 shadow-xs shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                                {artisan.name}
                              </h2>
                              <span className="text-[10px] font-bold bg-[#963824] text-white px-2 py-0.5 rounded">
                                {artisan.dusun}
                              </span>
                              <span className="text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded">
                                {artisan.experience}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-[#963824] mt-0.5">
                              {artisan.workshop} • {artisan.role}
                            </p>
                            <p className="text-xs text-stone-500 mt-0.5">
                              📍 {artisan.address}
                            </p>
                            <p className="text-[11px] text-stone-400 mt-0.5">
                              Kapasitas: <strong className="text-stone-700">{artisan.capacity}</strong> • WhatsApp: <strong className="text-stone-700 font-mono">+{artisan.phone}</strong>
                            </p>
                          </div>
                        </div>

                        {/* Direct Action Buttons for this Artisan */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto shrink-0">
                          <a
                            href={`https://api.whatsapp.com/send?phone=${artisan.phone}&text=${encodeURIComponent(`Halo ${artisan.name} (${artisan.workshop}), saya ingin memesan kriya tanah liat langsung dari buatan Anda.`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-xs flex items-center justify-center gap-1.5 touch-manipulation"
                          >
                            <span>Chat WhatsApp {artisan.name.split(' ')[0]}</span>
                            <span>💬</span>
                          </a>
                          <button
                            onClick={() => {
                              setSelectedArtisanId(artisan.id);
                              setIsCustomPhoneMode(false);
                              setIsCartOpen(true);
                              triggerToast(`Pengrajin ${artisan.name} dipilih sebagai tujuan pesanan keranjang.`);
                            }}
                            className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-xs flex items-center justify-center gap-1.5 touch-manipulation"
                          >
                            <span>Pilih untuk Checkout Keranjang</span>
                            <span>✓</span>
                          </button>
                        </div>
                      </div>

                      {/* Artisan Personal Quote */}
                      <div className="mt-4 pt-3 border-t border-stone-200/80 bg-stone-50/70 p-3 rounded-lg text-xs italic text-stone-700 leading-relaxed">
                        {artisan.bio}
                      </div>
                    </div>

                    {/* Available Products Made By This Artisan */}
                    <div className="p-4 sm:p-6 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-sm font-bold text-stone-900">
                            Karya Kriya yang Dihasilkan oleh {artisan.name} ({artisanProducts.length} Produk)
                          </h3>
                          <p className="text-[11px] text-stone-500">
                            Setiap kriya dibentuk secara manual dengan putaran miring 35° dan bahan lempung lokal Klaten.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {artisanProducts.map((prod) => (
                          <div
                            key={prod.id}
                            className="bg-stone-50/60 rounded-xl border border-stone-200 p-3 flex flex-col justify-between hover:bg-white hover:shadow-xs transition-all"
                          >
                            <div>
                              <div className="h-36 rounded-lg overflow-hidden bg-stone-100 mb-2.5 relative">
                                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" loading="lazy" />
                                <span className={`absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.2 rounded ${prod.badgeColor}`}>
                                  {prod.badge}
                                </span>
                              </div>
                              <h4 className="text-xs font-bold text-stone-900 leading-snug line-clamp-1 mb-1">
                                {prod.name}
                              </h4>
                              <p className="text-[10px] text-stone-500 line-clamp-2 mb-2">
                                {prod.desc}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-stone-200 flex items-center justify-between gap-1">
                              <div>
                                <p className="text-[9px] text-stone-400 font-semibold uppercase">Harga</p>
                                <p className="text-xs sm:text-sm font-extrabold text-[#963824]">
                                  Rp {prod.price.toLocaleString('id-ID')}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => {
                                    setShowFieldPhoto(false);
                                    setSelectedProduct(prod);
                                  }}
                                  className="text-[11px] font-semibold px-2 py-1 rounded border border-stone-300 text-stone-700 hover:bg-white"
                                >
                                  Detail
                                </button>
                                <button
                                  onClick={() => handleDirectOrderArtisan(artisan, prod)}
                                  className="bg-[#963824] hover:bg-[#7D2E1D] text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs"
                                >
                                  + Pesan
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            TAB 4: WISATA EDUKASI & WORKSHOP
        ---------------------------------------------------- */}
        {activeTab === 'edukasi' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-fadeIn">
            <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 mb-5 sm:mb-6 shadow-xs">
              <h1 className="text-xl sm:text-2xl font-bold text-stone-900">Wisata Edukasi & Paket Workshop</h1>
              <p className="text-xs text-stone-500 mt-0.5">Praktik langsung teknik putaran miring 35° bersama maestro desa.</p>
            </div>

            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {WORKSHOPS.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                      {pkg.target}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 mt-2 mb-1">{pkg.title}</h3>
                    <p className="text-lg font-black text-[#963824] mb-3">
                      Rp {pkg.price.toLocaleString('id-ID')} <span className="text-xs font-normal text-stone-500">/org</span>
                    </p>
                    <ul className="space-y-1.5 text-xs text-stone-600 mb-4">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setBookPkg(pkg.id);
                      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#963824] hover:bg-[#7D2E1D] text-white text-xs font-semibold py-2 rounded-lg touch-manipulation"
                  >
                    Pilih Paket →
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Reservation Form */}
            <div id="booking-section" className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 shadow-xs max-w-xl mx-auto">
              <h3 className="text-base font-bold text-stone-900 mb-1">Formulir Reservasi Rombongan</h3>
              <p className="text-xs text-stone-500 mb-4">Pesan jadwal dan hitung estimasi biaya langsung.</p>
              
              <form onSubmit={handleWorkshopSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Nama Pemesan / Instansi:</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: SMA Negeri 1 Klaten"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    className="w-full text-sm sm:text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-[#963824] focus:border-[#963824]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Nomor WhatsApp:</label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={bookPhone}
                    onChange={(e) => setBookPhone(e.target.value)}
                    className="w-full text-sm sm:text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-[#963824] focus:border-[#963824]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Pilihan Paket:</label>
                    <select
                      value={bookPkg}
                      onChange={(e) => setBookPkg(e.target.value)}
                      className="w-full text-sm sm:text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-[#963824] focus:border-[#963824]"
                    >
                      {WORKSHOPS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title} (Rp {p.price.toLocaleString('id-ID')})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Jumlah Peserta:</label>
                    <input
                      type="number"
                      min="1"
                      value={bookQty}
                      onChange={(e) => setBookQty(parseInt(e.target.value) || 1)}
                      className="w-full text-sm sm:text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-[#963824] focus:border-[#963824]"
                    />
                  </div>
                </div>

                {/* Live Cost Computation Preview */}
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 flex items-center justify-between text-xs">
                  <span className="text-stone-600">Estimasi Total ({bookQty} Peserta):</span>
                  <span className="text-sm font-bold text-[#963824]">
                    Rp {((WORKSHOPS.find(p => p.id === bookPkg)?.price || 25000) * bookQty).toLocaleString('id-ID')}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#963824] hover:bg-[#7D2E1D] text-white text-xs sm:text-sm font-semibold py-2.5 rounded-lg shadow-xs touch-manipulation"
                  >
                    Kirim Reservasi ke WhatsApp Paguyuban →
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            TAB 5: KEMITRAAN B2B HOREKA
        ---------------------------------------------------- */}
        {activeTab === 'b2b' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-fadeIn">
            <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 mb-5 sm:mb-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-stone-900">Kemitraan B2B: Hotel, Kafe & Restoran</h1>
                <p className="text-xs text-stone-500 mt-0.5">Penyediaan tableware gerabah alami ramah lingkungan berlogo kustom.</p>
              </div>
              <div className="sm:text-right">
                <span className="text-[10px] text-stone-400 font-semibold uppercase">Kapasitas Produksi</span>
                <p className="text-xs sm:text-sm font-bold text-stone-900">96.000 Pcs / Bulan</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 shadow-xs max-w-2xl mx-auto">
              <h3 className="text-base font-bold text-stone-900 mb-4">Simulator Harga Grosir Tableware</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                    <span>Volume Pesanan:</span>
                    <span className="text-[#963824] font-bold">{b2bQuantity} Pcs</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={b2bQuantity}
                    onChange={(e) => setB2bQuantity(parseInt(e.target.value))}
                    className="w-full accent-[#963824] h-2 bg-stone-200 rounded-lg cursor-pointer"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-[10px] text-stone-400 mt-1">
                    <span>50 Pcs (-10%)</span>
                    <span>250 Pcs (-15%)</span>
                    <span>500 Pcs (-20%)</span>
                    <span>1.000 Pcs (-25%)</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={b2bCustomLogo}
                      onChange={(e) => setB2bCustomLogo(e.target.checked)}
                      className="rounded text-[#963824] focus:ring-[#963824]"
                    />
                    <span>Cap Logo Resto Timbul / Emboss (+Rp 2.000/pcs)</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={b2bMunggurSmoke}
                      onChange={(e) => setB2bMunggurSmoke(e.target.checked)}
                      className="rounded text-[#963824] focus:ring-[#963824]"
                    />
                    <span>Finishing Asap Daun Munggur Hitam Kilap (+Rp 4.000/pcs)</span>
                  </label>
                </div>

                {(() => {
                  const base = 25000;
                  const disc = b2bQuantity >= 500 ? 0.25 : b2bQuantity >= 250 ? 0.2 : 0.1;
                  const unitDisc = Math.round(base * (1 - disc));
                  const addOn = (b2bCustomLogo ? 2000 : 0) + (b2bMunggurSmoke ? 4000 : 0);
                  const finalUnit = unitDisc + addOn;
                  const total = finalUnit * b2bQuantity;

                  return (
                    <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 mt-4 space-y-2">
                      <div className="flex justify-between text-xs text-stone-600">
                        <span>Harga Satuan:</span>
                        <span className="font-bold text-stone-900">Rp {finalUnit.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-stone-900 pt-1 border-t border-stone-200">
                        <span>Total Kontrak:</span>
                        <span className="text-[#963824] text-base">Rp {total.toLocaleString('id-ID')}</span>
                      </div>
                      <button
                        onClick={() => {
                          const msg = `Halo Tim B2B Melikan, saya ingin penawaran tableware:\n• Volume: ${b2bQuantity} Pcs\n• Logo Custom: ${b2bCustomLogo ? 'Ya' : 'Tidak'}\n• Asap Munggur: ${b2bMunggurSmoke ? 'Ya' : 'Tidak'}\n• Estimasi Total: Rp ${total.toLocaleString('id-ID')}\n\nMohon info pengiriman sampel fisik. Terima kasih!`;
                          window.open(`https://api.whatsapp.com/send?phone=6281234567890&text=${encodeURIComponent(msg)}`, '_blank');
                        }}
                        className="w-full bg-[#963824] hover:bg-[#7D2E1D] text-white text-xs sm:text-sm font-semibold py-2.5 rounded-lg shadow-xs mt-2 touch-manipulation"
                      >
                        Minta Sampel Fisik via WhatsApp →
                      </button>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------
            TAB 6: ENSIKLOPEDIA WARISAN 35°
        ---------------------------------------------------- */}
        {activeTab === 'warisan' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-fadeIn">
            <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 mb-5 sm:mb-6 shadow-xs">
              <h1 className="text-xl sm:text-2xl font-bold text-stone-900">Ensiklopedia Warisan Putaran Miring 35°</h1>
              <p className="text-xs text-stone-500 mt-0.5">Kajian ilmiah etnosains dan sejarah Warisan Budaya Takbenda (WBTb) Ki Depok.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs">
                <div className="h-44 sm:h-52 rounded-lg overflow-hidden bg-stone-100 mb-3">
                  <img src="images/story_putaran_miring.jpg" alt="Putaran Miring" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1">1. Ergonomi Sudut 35°</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-2">
                  Diciptakan Ki Depok abad ke-15 agar perajin wanita dapat membentuk gerabah dengan posisi duduk menyamping yang santai dan sopan tanpa mencederai tulang punggung bawah.
                </p>
                <span className="text-[10px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Fakta Etnosains: Mereduksi beban torsi punggung hingga 42%
                </span>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs">
                <div className="h-44 sm:h-52 rounded-lg overflow-hidden bg-stone-100 mb-3">
                  <img src="images/story_daun_munggur.jpg" alt="Daun Munggur" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1">2. Kimiawi Reduksi Daun Munggur</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-2">
                  Asap daun munggur basah pada suhu 800°C mengikat oksida besi (Fe2O3) menjadi magnetit hitam (Fe3O4), menghasilkan gerabah hitam kilap alami yang 100% bebas timbal.
                </p>
                <span className="text-[10px] font-semibold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Keamanan Pangan: 100% Lead-Free & Food Grade
                </span>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs">
                <div className="h-44 sm:h-52 rounded-lg overflow-hidden bg-stone-100 mb-3">
                  <img src="images/story_kendi_maling.jpg" alt="Kendi Maling" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1">3. Hidrolika Kendi Maling</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-2">
                  Konstruksi corong labirin terbalik memanfaatkan prinsip bejana berhubungan dan tekanan hidrostatis. Air dituangkan terbalik lalu terkunci aman saat diletakkan tegak.
                </p>
                <span className="text-[10px] font-semibold text-sky-900 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  Prinsip Fisika: Bejana berhubungan & penguncian tekanan udara
                </span>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs">
                <div className="h-44 sm:h-52 rounded-lg overflow-hidden bg-stone-100 mb-3">
                  <img src="images/story_sunan_pandanaran.jpg" alt="Sunan Pandanaran" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1">4. Sejarah Sunan Pandanaran</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-2">
                  Ki Depok adalah abdi setia Sunan Pandanaran saat berdakwah ke Gunung Jabalkat Tembayat. Tanah liat lempung Melikan diberkahi menjadi sumber mata pencaharian turun-temurun warga.
                </p>
                <span className="text-[10px] font-semibold text-rose-900 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  Status: Warisan Budaya Takbenda (WBTb) Indonesia
                </span>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ========================================================
          7. SHOPPING CART DRAWER (DENGAN PEMILIHAN PENGRAJIN LANGSUNG / KUSTOM)
      ======================================================== */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            <div className="w-screen max-w-full sm:max-w-md bg-white shadow-2xl flex flex-col">
              
              {/* Drawer Header */}
              <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
                <div className="flex items-center gap-2">
                  <span className="text-base">🛒</span>
                  <h2 className="text-sm font-bold text-stone-900">
                    Keranjang Kriya ({totalItemsCount} item)
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-stone-200 text-stone-600 flex items-center justify-center font-bold text-sm touch-manipulation"
                >
                  ✕
                </button>
              </div>

              {/* Items List */}
              <div className="flex-grow overflow-y-auto p-3.5 sm:p-4 space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200 items-center">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md object-cover shrink-0" />
                    <div className="flex-grow min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate">{item.name}</h4>
                      <p className="text-[10px] text-stone-500 truncate">
                        Pengrajin: <span className="font-semibold text-stone-800">{item.artisan}</span>
                      </p>
                      <p className="text-xs font-bold text-[#963824] mt-0.5">Rp {item.price.toLocaleString('id-ID')}</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded border border-stone-300 shrink-0">
                      <button
                        onClick={() => updateCartQty(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-xs font-bold text-stone-600 hover:text-stone-900 touch-manipulation"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold px-1">{item.qty}</span>
                      <button
                        onClick={() => updateCartQty(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs font-bold text-stone-600 hover:text-stone-900 touch-manipulation"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                {cartItems.length === 0 && (
                  <div className="text-center py-12 text-stone-500 text-xs">
                    Keranjang belanja Anda masih kosong.
                  </div>
                )}

                {cartItems.length > 0 && (
                  <div className="space-y-3 pt-2">
                    {/* REAL GPS & DISTANCE-BASED SHIPPING CALCULATOR */}
                    <div className="bg-stone-50 p-3 sm:p-3.5 rounded-lg border border-stone-200 text-xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-900 flex items-center gap-1.5">
                          <span>📍</span>
                          <span>Lokasi Tujuan & Ongkir Riil:</span>
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          GPS Satelit Aktif
                        </span>
                      </div>

                      <p className="text-[11px] text-stone-500 leading-snug">
                        Ongkos kirim dihitung akurat berdasarkan jarak tempuh riil dari <strong>Sentra Gerabah Melikan (Klaten)</strong> ke titik lokasi pemesan.
                      </p>

                      {/* GPS Auto-detect Button */}
                      <button
                        type="button"
                        onClick={detectUserGps}
                        disabled={isGpsLoading}
                        className="w-full bg-stone-900 hover:bg-black text-white font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-2 shadow-xs transition-all touch-manipulation disabled:opacity-75 cursor-pointer"
                      >
                        {isGpsLoading ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span className="text-xs">Mendeteksi Titik Koordinat GPS...</span>
                          </>
                        ) : (
                          <>
                            <span>🎯</span>
                            <span className="text-xs font-semibold">Ambil Titik Koordinat GPS Saya (Otomatis)</span>
                          </>
                        )}
                      </button>

                      {/* GPS Error Alert if any */}
                      {gpsError && (
                        <div className="p-2 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-800 flex items-start gap-1.5 animate-fadeIn">
                          <span>⚠️</span>
                          <div>
                            <p className="font-semibold">{gpsError}</p>
                            <p className="text-[10px] text-amber-700">Silakan pilih kota tujuan dari dropdown di bawah:</p>
                          </div>
                        </div>
                      )}

                      {/* Preset City Dropdown */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-semibold text-stone-600 block">
                          Atau Pilih Kota / Wilayah Tujuan Pengiriman:
                        </label>
                        <select
                          value={selectedPresetId}
                          onChange={(e) => handlePresetChange(e.target.value)}
                          className="w-full text-xs p-2 rounded border border-stone-300 bg-white font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#963824]"
                        >
                          <optgroup label="Deteksi GPS">
                            <option value="gps">📍 Titik GPS Lokasi Saya (Deteksi Otomatis)</option>
                          </optgroup>
                          <optgroup label="Jawa Tengah & DIY (Klaster Terdekat)">
                            <option value="klaten">Klaten Kota (Alun-Alun) • ~5 km</option>
                            <option value="jogja">Yogyakarta (Tugu / Malioboro / Sleman) • ~32 km</option>
                            <option value="solo">Surakarta / Solo (Kentingan / Manahan) • ~33 km</option>
                            <option value="boyolali">Boyolali Kota • ~38 km</option>
                            <option value="magelang">Magelang & Borobudur • ~51 km</option>
                            <option value="salatiga">Salatiga Kota • ~48 km</option>
                            <option value="semarang">Semarang (Simpang Lima) • ~96 km</option>
                          </optgroup>
                          <optgroup label="Jawa Timur & Bali">
                            <option value="surabaya">Surabaya (Gubeng / Perak) • ~260 km</option>
                            <option value="malang">Malang Kota • ~240 km</option>
                            <option value="denpasar">Denpasar & Kuta (Bali) • ~540 km</option>
                          </optgroup>
                          <optgroup label="Jawa Barat, DKI & Luar Jawa">
                            <option value="bandung">Bandung (Gedung Sate) • ~375 km</option>
                            <option value="jakarta">DKI Jakarta & Jabodetabek • ~465 km</option>
                            <option value="lampung">Bandar Lampung (Sumatera) • ~650 km</option>
                            <option value="medan">Medan (Sumatera Utara) • ~1.720 km</option>
                            <option value="makassar">Makassar (Sulawesi) • ~890 km</option>
                          </optgroup>
                          <optgroup label="Kustom">
                            <option value="custom">✏️ Masukkan Titik Koordinat / Alamat Manual</option>
                          </optgroup>
                        </select>
                      </div>

                      {/* Custom Coordinates Input if custom */}
                      {selectedPresetId === 'custom' && (
                        <div className="bg-white p-2.5 rounded border border-stone-200 space-y-2 animate-fadeIn">
                          <div>
                            <label className="text-[10px] font-semibold text-stone-700 block">Nama Alamat / Kota:</label>
                            <input
                              type="text"
                              value={customLabel}
                              onChange={(e) => {
                                setCustomLabel(e.target.value);
                                setUserCoords((prev) => ({ ...prev, label: e.target.value || 'Alamat Kustom' }));
                              }}
                              placeholder="Contoh: Jl. Sudirman No. 10, Purwokerto"
                              className="w-full text-xs p-1.5 rounded border border-stone-300 bg-white"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-[10px] font-semibold text-stone-700 block">Latitude (Lintang):</label>
                              <input
                                type="number"
                                step="any"
                                value={customLat}
                                onChange={(e) => handleCustomCoordsChange(e.target.value, customLon)}
                                placeholder="-7.424"
                                className="w-full text-xs p-1.5 rounded border border-stone-300 font-mono bg-white"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-semibold text-stone-700 block">Longitude (Bujur):</label>
                              <input
                                type="number"
                                step="any"
                                value={customLon}
                                onChange={(e) => handleCustomCoordsChange(customLat, e.target.value)}
                                placeholder="109.230"
                                className="w-full text-xs p-1.5 rounded border border-stone-300 font-mono bg-white"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Distance & GPS Diagnostic Card */}
                      <div className="bg-white p-2.5 rounded-lg border border-stone-200 space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-stone-800 truncate max-w-[200px]">
                            {userCoords.isGps ? '🎯 Titik GPS Pemesan:' : '📍 Tujuan Terpilih:'}
                          </span>
                          <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                            {userCoords.lat.toFixed(4)}, {userCoords.lon.toFixed(4)}
                          </span>
                        </div>

                        <p className="font-bold text-stone-900">{userCoords.label}</p>

                        <div className="pt-1 border-t border-stone-100 flex items-center justify-between">
                          <div>
                            <span className="text-stone-500">Jarak Riil: </span>
                            <span className="font-black text-[#963824] text-xs">{realDistanceKm} km</span>
                            <span className="text-stone-400 text-[10px]"> (Rute Truk: ~{Math.round(realDistanceKm * 1.2)} km)</span>
                          </div>
                          <a
                            href={`https://www.google.com/maps/dir/${MELIKAN_COORDS.lat},${MELIKAN_COORDS.lon}/${userCoords.lat},${userCoords.lon}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-blue-600 hover:text-blue-800 font-semibold underline inline-flex items-center gap-0.5"
                          >
                            <span>Rute Maps</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </div>

                      {/* Courier Selection List */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-stone-700 text-[11px]">Pilihan Ekspedisi Kargo:</span>
                          <span className="text-[10px] text-stone-400">{availableCouriers.length} Opsi Tersedia</span>
                        </div>

                        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-0.5">
                          {availableCouriers.map((c) => {
                            const isSelected = selectedCourierId === c.id;
                            return (
                              <div
                                key={c.id}
                                onClick={() => setSelectedCourierId(c.id)}
                                className={`p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-2 ${
                                  isSelected
                                    ? 'border-[#963824] bg-[#FAF4F2] ring-1 ring-[#963824]'
                                    : 'border-stone-200 bg-white hover:border-stone-300'
                                }`}
                              >
                                <div className="flex items-start gap-2 min-w-0">
                                  <span className="text-base mt-0.5 shrink-0">{c.icon}</span>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span className="font-bold text-xs text-stone-900 truncate">{c.name}</span>
                                      {c.badge && (
                                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-200">
                                          {c.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[10px] text-stone-500 mt-0.5">
                                      Estimasi: <span className="font-semibold text-stone-700">{c.etd}</span> • {c.desc}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="font-extrabold text-xs text-[#963824]">
                                    Rp {c.fee.toLocaleString('id-ID')}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Peti Kayu Standar Mandatory */}
                      <div className="flex justify-between items-center text-[11px] text-stone-600 pt-2 border-t border-stone-200">
                        <div className="flex items-center gap-1">
                          <span>📦</span>
                          <span>Peti Kayu Standar & Jerami:</span>
                        </div>
                        <span className="font-semibold text-stone-900">Rp 20.000 (Wajib proteksi kriya)</span>
                      </div>
                    </div>

                    {/* ARTISAN TARGET SELECTION (USER BISA MEMILIH / MEMASUKKAN SENDIRI NOMOR PENGRAJIN) */}
                    <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-200 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-950 flex items-center gap-1">
                          <span>👨‍🎨</span>
                          <span>Tujuan Kontak Pengrajin:</span>
                        </span>
                        <span className="text-[10px] text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded font-semibold">
                          Transaksi Langsung
                        </span>
                      </div>

                      <p className="text-[11px] text-stone-600">
                        Pilih pengrajin mana yang ingin Anda hubungi untuk pesanan ini, atau masukkan nomor pengrajin sendiri:
                      </p>

                      {/* Dropdown Artisan Selector */}
                      <select
                        value={isCustomPhoneMode ? 'custom' : selectedArtisanId}
                        onChange={(e) => {
                          if (e.target.value === 'custom') {
                            setIsCustomPhoneMode(true);
                          } else {
                            setIsCustomPhoneMode(false);
                            setSelectedArtisanId(e.target.value);
                          }
                        }}
                        className="w-full text-xs p-2 rounded border border-stone-300 bg-white font-medium text-stone-800"
                      >
                        {ARTISANS.map((artisan) => (
                          <option key={artisan.id} value={artisan.id}>
                            {artisan.name} ({artisan.workshop}) - 0{artisan.phone.substring(2)}
                          </option>
                        ))}
                        <option value="custom">✏️ Masukkan Nomor WhatsApp Pengrajin Lainnya (Ketik Sendiri)</option>
                      </select>

                      {/* Custom Phone Number Input if mode is custom */}
                      {isCustomPhoneMode ? (
                        <div className="space-y-1 pt-1 animate-fadeIn">
                          <label className="text-[10px] font-semibold text-stone-700 block">
                            Nomor WhatsApp Tujuan (Bisa diawali 08... atau 628...):
                          </label>
                          <input
                            type="tel"
                            value={customArtisanPhone}
                            onChange={(e) => setCustomArtisanPhone(e.target.value)}
                            placeholder="Contoh: 08123456789 atau 628123456789"
                            className="w-full text-xs p-2 rounded border border-stone-300 font-mono bg-white focus:outline-none focus:ring-1 focus:ring-[#963824]"
                          />
                        </div>
                      ) : (
                        <div className="bg-white p-2 rounded border border-amber-200/80 flex items-center justify-between text-[11px]">
                          <div>
                            <p className="font-bold text-stone-900">{currentTargetArtisan.name}</p>
                            <p className="text-stone-500">{currentTargetArtisan.workshop} • {currentTargetArtisan.dusun}</p>
                          </div>
                          <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            +{currentTargetArtisan.phone}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer Checkout */}
              {cartItems.length > 0 && (
                <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2.5">
                  <div className="flex justify-between text-xs text-stone-600">
                    <span>Subtotal Produk ({totalItemsCount} item):</span>
                    <span>Rp {cartSubtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-600">
                    <span>Peti Kayu Standar:</span>
                    <span>Rp {crateFee.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-600">
                    <span>
                      Ongkir ({selectedCourier ? selectedCourier.name.split(' ')[0] : 'Kargo'} • {realDistanceKm} km):
                    </span>
                    <span className="font-semibold text-stone-800">Rp {shippingFee.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-stone-900 pt-1.5 border-t border-stone-200">
                    <span>Total Pembayaran:</span>
                    <span className="text-[#963824] text-base font-extrabold">Rp {grandTotal.toLocaleString('id-ID')}</span>
                  </div>
                  
                  {/* Primary WhatsApp Checkout Anchor */}
                  <a
                    href={checkoutWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold py-2.5 rounded-lg shadow-xs mt-1 touch-manipulation flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center"
                  >
                    <span>Kirim Pesanan ke WA {isCustomPhoneMode ? 'Pengrajin' : currentTargetArtisan.name.split(' ')[0]}</span>
                    <span>💬</span>
                  </a>

                  {/* Manual Copy Fallback */}
                  <button
                    type="button"
                    onClick={copyOrderToClipboard}
                    className="w-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs font-semibold py-2 rounded-lg touch-manipulation flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>📋 Salin Format Rincian Pesanan</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          8. PRODUCT DETAIL MODAL (DENGAN PROFIL LENGKAP PENGRAJIN & DUAL VIEW FOTO)
      ======================================================== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200 relative max-h-[92vh] flex flex-col animate-scaleUp">
            <button
              onClick={() => {
                setSelectedProduct(null);
                setShowFieldPhoto(false);
              }}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center text-xs font-bold touch-manipulation"
            >
              ✕
            </button>
            <div className="relative h-52 sm:h-60 bg-stone-900 shrink-0 overflow-hidden group">
              <img
                src={showFieldPhoto && selectedProduct.realPhoto ? selectedProduct.realPhoto : selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Badge Tipe Foto */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm backdrop-blur-md ${
                  showFieldPhoto
                    ? 'bg-emerald-600/90 text-white border border-emerald-400/40'
                    : 'bg-stone-900/80 text-amber-300 border border-amber-400/30'
                }`}>
                  {showFieldPhoto ? '📷 Dokumentasi Asli Sanggar' : '✨ Foto Studio / Render AI'}
                </span>
              </div>

              {/* Dual-View Toggle Switch */}
              {selectedProduct.realPhoto && (
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between gap-2 bg-stone-950/85 backdrop-blur-md p-1.5 px-2.5 rounded-lg border border-white/10 text-white shadow-lg">
                  <div className="flex items-center gap-1.5 text-[11px] min-w-0">
                    <span className="text-amber-400 text-xs shrink-0">
                      {showFieldPhoto ? '📷' : '✨'}
                    </span>
                    <span className="truncate text-stone-200">
                      {showFieldPhoto ? 'Foto observasi riset lapangan sanggar' : 'Visual studio kriya pencahayaan rapi'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFieldPhoto(!showFieldPhoto)}
                    className="shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-md transition-all shadow-xs touch-manipulation flex items-center gap-1 cursor-pointer"
                  >
                    <span>{showFieldPhoto ? 'Lihat Foto AI Studio' : 'Lihat Foto Asli Sanggar'}</span>
                    <span>⇄</span>
                  </button>
                </div>
              )}
            </div>
            <div className="p-4 sm:p-5 overflow-y-auto">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span>{selectedProduct.category}</span>
                <span className="font-semibold text-amber-700">★ {selectedProduct.rating}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1.5">{selectedProduct.name}</h3>
              <p className="text-xs text-stone-600 mb-3">{selectedProduct.desc}</p>
              
              {/* Artisan Profile Card Inside Modal */}
              <div className="bg-amber-50/60 p-3 rounded-lg border border-amber-200 text-xs text-stone-700 mb-3 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-950">Profil Pengrajin Pembuat:</span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-semibold">
                    {selectedProduct.origin}
                  </span>
                </div>
                <p className="font-semibold text-stone-900">{selectedProduct.artisan}</p>
                <p className="text-[11px] text-stone-600">Spesifikasi: {selectedProduct.specs}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                <span className="text-base sm:text-lg font-bold text-[#963824]">
                  Rp {selectedProduct.price.toLocaleString('id-ID')}
                </span>
                <button
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                    setShowFieldPhoto(false);
                  }}
                  className="bg-[#963824] hover:bg-[#7D2E1D] text-white text-xs font-semibold px-4 py-2 rounded-lg touch-manipulation"
                >
                  + Masukkan Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          9. VIDEO DOCUMENTARY MODAL
      ======================================================== */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/75 backdrop-blur-xs">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-xl w-full p-4 sm:p-5 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs sm:text-sm font-bold text-stone-900">Dokumenter Putaran Miring 35° Melikan</h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 text-xs font-bold touch-manipulation"
              >
                ✕
              </button>
            </div>
            <div className="rounded-lg overflow-hidden aspect-video bg-stone-900 relative flex items-center justify-center">
              <img src="images/hero_putaran_miring.jpg" alt="Video Preview" className="w-full h-full object-cover opacity-75" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black/40">
                <span className="w-12 h-12 rounded-full bg-[#963824] text-white flex items-center justify-center text-xl pl-0.5 shadow-md animate-pulse cursor-pointer">
                  ▶
                </span>
                <p className="text-xs sm:text-sm font-bold mt-2">Tradisi Kriya Warisan Ki Depok Abad 15</p>
                <p className="text-[10px] sm:text-[11px] text-stone-300">Dokumentasi Tim PkM UBSI 2026 - Sentra Melikan & Paseban</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          10. TOAST NOTIFICATION
      ======================================================== */}
      {toastMessage && (
        <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-5 sm:bottom-5 z-50 bg-stone-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-lg flex items-center justify-between sm:justify-start gap-2 animate-bounce">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-stone-400 hover:text-white text-xs ml-2">
            ✕
          </button>
        </div>
      )}

      {/* ========================================================
          11. FOOTER
      ======================================================== */}
      <footer className="bg-white border-t border-stone-200 text-stone-600 text-xs py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6 border-b border-stone-100">
            <div>
              <img
                src="images/logo-melikan.png"
                alt="Logo Sentra Melikan"
                className="h-7 w-auto object-contain mb-2.5"
              />
              <p className="font-bold text-stone-900 text-xs sm:text-sm mb-1">
                SENTRA GERABAH MELIKAN & PASEBAN
              </p>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Program Kemitraan Masyarakat (PkM) 2026 Hibah BIPEMAS. Platform pelestarian kriya warisan putaran miring 35° dan pemberdayaan 258 keluarga pengrajin Desa Melikan, Wedi, Klaten.
              </p>
            </div>
            <div>
              <p className="font-bold text-stone-900 mb-1">Alamat & Kontak Sentra</p>
              <p className="text-[11px] text-stone-500">Dusun Melikan, Wedi, Klaten, Jawa Tengah 57461</p>
              <p className="text-[11px] text-stone-500 mt-0.5">WhatsApp Hotline: +62 812-3456-7890</p>
            </div>
            <div>
              <p className="font-bold text-stone-900 mb-1">Warisan Budaya Takbenda (WBTb)</p>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Teknik kriya putaran miring 35° diakui sebagai warisan budaya takbenda Indonesia oleh Kemendikbudristek.
              </p>
            </div>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-2 text-center sm:text-left">
            <p>© 2026 Sentra Gerabah Melikan & Tim PkM Kemitraan UBSI.</p>
            <p>@ Program Kemitraan Masyarakat • Tim PkM UBSI 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

