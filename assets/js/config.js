/* =========================================================================
   WONOSOBO TRANS — KONFIGURASI UTAMA (SATU TEMPAT UNTUK SEMUA DATA USAHA)
   -------------------------------------------------------------------------
   Cukup ubah nilai di file ini untuk memperbarui website. Tidak perlu
   menyentuh index.html atau file lain.

   Catatan: seluruh data di bawah ini adalah DATA CONTOH untuk website demo.
   ========================================================================= */

window.WONOSOBO_TRANS_CONFIG = {
  /* ---------------------------------------------------------------------
     1. IDENTITAS TRAVEL
     --------------------------------------------------------------------- */
  brand: {
    name: "WONOSOBO TRANS",                 // Nama travel (tampil di header, footer, pesan WhatsApp)
    tagline: "Nyaman Berangkat, Aman Sampai Tujuan.",
    subline: "Travel antar kota", // Teks kecil di bawah nama pada logo
    // Ganti dengan path logo asli bila sudah ada, contoh: "assets/img/logo.png".
    // Kosongkan ("") untuk memakai logo teks + ikon bawaan.
    logoImage: "",
    logoAlt: "Logo WONOSOBO TRANS"
  },

  /* ---------------------------------------------------------------------
     2. KONTAK & JAM LAYANAN
     --------------------------------------------------------------------- */
  contact: {
    // Nomor WhatsApp format internasional TANPA tanda "+" dan TANPA spasi.
    whatsapp: "6281234567890",
    // Hanya untuk tampilan di layar.
    whatsappDisplay: "+62 812-3456-7890",
    address: "Wonosobo, Jawa Tengah",
    hours: "06.00–21.00 WIB"
  },

  /* ---------------------------------------------------------------------
     3. HERO (BAGIAN ATAS HALAMAN)
     --------------------------------------------------------------------- */
  hero: {
    badge: "Travel antar kota dari Wonosobo, Jawa Tengah",
    // Ganti dengan foto armada asli. Ukuran ideal 1280x715 (landscape).
    image: "assets/img/granmax-2.jpg",
    imageAlt: "Daihatsu Gran Max putih yang digunakan sebagai armada travel dari Wonosobo (foto contoh)"
  },

  /* ---------------------------------------------------------------------
     4. ARMADA
     --------------------------------------------------------------------- */
  fleet: {
    name: "Daihatsu Gran Max",
    description:
      "Minibus yang fleksibel untuk perjalanan antar kota dengan kenyamanan yang cukup untuk keluarga maupun perjalanan bisnis.",
    // Foto utama + galeri. Urutan pertama tampil paling awal.
    images: [
      {
        src: "assets/img/granmax-3.jpg",
        alt: "Daihatsu Gran Max silver dilihat dari depan tiga perempat (foto contoh)"
      },
      {
        src: "assets/img/granmax-hero.jpg",
        alt: "Daihatsu Gran Max silver armada travel Wonosobo Trans (foto contoh)"
      },
      {
        src: "assets/img/granmax-4.jpg",
        alt: "Daihatsu Gran Max putih tampak depan di jalan (foto contoh)"
      }
    ],
    // Ikon tersedia: seat, snow, bag, steering, shield, check, van
    specs: [
      { icon: "users", label: "Kapasitas", value: "8–10 penumpang" },
      { icon: "snow", label: "Fasilitas", value: "AC" },
      { icon: "seat", label: "Kenyamanan", value: "Kursi nyaman" },
      { icon: "bag", label: "Penyimpanan", value: "Bagasi" },
      { icon: "steering", label: "Pengemudi", value: "Driver berpengalaman" },
      { icon: "shield", label: "Perawatan", value: "Kendaraan terawat" }
    ],
    note:
      "Foto armada pada website ini masih berupa gambar sementara dan dapat diganti dengan foto armada asli."
  },

  /* ---------------------------------------------------------------------
     5. RUTE & HARGA
     Harga ditulis sebagai angka saja (tanpa titik). Format Rupiah otomatis.
     --------------------------------------------------------------------- */
  routes: [
    { to: "Dieng", price: 75000, description: "Rute pegunungan menuju kawasan wisata dataran tinggi Dieng." },
    { to: "Temanggung", price: 85000, description: "Perjalanan singkat ke kota di kaki Gunung Sindoro." },
    { to: "Magelang", price: 100000, description: "Akses mudah ke Kota Magelang dan kawasan Borobudur." },
    { to: "Jogja", price: 150000, description: "Rute favorit menuju pusat budaya dan kuliner Yogyakarta." },
    { to: "Semarang", price: 175000, description: "Menuju ibu kota Jawa Tengah untuk kerja maupun kuliner." },
    { to: "Purwokerto", price: 150000, description: "Melintasi jalur selatan menuju Purwokerto dan Baturraden." },
    { to: "Solo", price: 200000, description: "Perjalanan ke kota batik dan keraton Surakarta." },
    { to: "Jakarta", price: 350000, description: "Rute jarak jauh menuju pusat bisnis dan aktivitas ibu kota." },
    { to: "Bandung", price: 400000, description: "Menuju kota berudara sejuk dengan beragam tujuan wisata." },
    { to: "Bekasi", price: 375000, description: "Alternatif tujuan di kawasan timur Jabodetabek." },
    { to: "Depok", price: 375000, description: "Menuju kawasan pendidikan dan hunian di selatan Jakarta." },
    { to: "Bogor", price: 400000, description: "Rute ke kota hujan dan kawasan sekitarnya." }
  ],
  routesNote:
    "Harga di atas adalah contoh untuk website demo dan dapat berubah. Konfirmasi harga terbaru melalui admin.",

  /* ---------------------------------------------------------------------
     6. DESTINASI POPULER
     routeTo harus sama dengan salah satu "to" pada daftar routes di atas.
     --------------------------------------------------------------------- */
  destinations: [
    {
      name: "Dieng",
      routeTo: "Dieng",
      image: "assets/img/dest-dieng.jpg",
      alt: "Telaga Warna di dataran tinggi Dieng, Jawa Tengah (foto contoh)",
      description: "Dataran tinggi berkabut dengan telaga warna dan kawah vulkanik."
    },
    {
      name: "Jogja",
      routeTo: "Jogja",
      image: "assets/img/dest-jogja.jpg",
      alt: "Suasana malam Jalan Malioboro di Yogyakarta (foto contoh)",
      description: "Kota budaya dengan Malioboro, keraton, dan kuliner khas."
    },
    {
      name: "Semarang",
      routeTo: "Semarang",
      image: "assets/img/dest-semarang.jpg",
      alt: "Bangunan Lawang Sewu di Semarang (foto contoh)",
      description: "Ibu kota Jawa Tengah dengan Kota Lama dan kuliner legendaris."
    },
    {
      name: "Jakarta",
      routeTo: "Jakarta",
      image: "assets/img/dest-jakarta.jpg",
      alt: "Panorama Monumen Nasional dan gedung tinggi Jakarta (foto contoh)",
      description: "Pusat bisnis dan aktivitas dengan beragam pilihan hiburan."
    },
    {
      name: "Bandung",
      routeTo: "Bandung",
      image: "assets/img/dest-bandung.jpg",
      alt: "Gedung Sate Bandung dengan latar langit biru (foto contoh)",
      description: "Udara sejuk, belanja, dan arsitektur klasik yang khas."
    },
    {
      name: "Magelang",
      routeTo: "Magelang",
      image: "assets/img/dest-magelang.jpg",
      alt: "Candi Borobudur di Magelang dilihat dari udara (foto contoh)",
      description: "Kota sejuk dekat Borobudur dan perbukitan Menoreh."
    },
    {
      name: "Purwokerto",
      routeTo: "Purwokerto",
      image: "assets/img/dest-purwokerto.jpg",
      alt: "Pemandangan pegunungan Baturraden di Purwokerto (foto contoh)",
      description: "Kota di kaki Gunung Slamet dengan wisata Baturraden."
    }
  ],

  /* ---------------------------------------------------------------------
     7. TENTANG KAMI
     --------------------------------------------------------------------- */
  about: {
    paragraphs: [
      "WONOSOBO TRANS hadir untuk memberikan layanan perjalanan yang nyaman bagi masyarakat Wonosobo yang ingin bepergian ke berbagai kota di Jawa. Kami mengutamakan kenyamanan, keamanan, ketepatan informasi harga, dan kemudahan dalam proses booking.",
      "Website ini merupakan versi demo. Nama travel, harga, foto armada, dan nomor WhatsApp yang ditampilkan adalah data contoh yang dapat diganti oleh pemilik usaha."
    ],
    image: "assets/img/about-wonosobo.jpg",
    imageAlt: "Panorama pegunungan di kawasan Dieng, dekat Wonosobo (foto contoh)"
  },

  /* ---------------------------------------------------------------------
     8. TESTIMONI (CONTOH)
     --------------------------------------------------------------------- */
  testimonials: [
    { quote: "Perjalanannya nyaman dan proses booking cepat.", name: "Andi", origin: "Wonosobo" },
    { quote: "Harga jelas dan drivernya ramah.", name: "Rina", origin: "Wonosobo" },
    { quote: "Booking lewat WhatsApp gampang banget.", name: "Dimas", origin: "Wonosobo" }
  ],

  /* ---------------------------------------------------------------------
     9. FAQ
     --------------------------------------------------------------------- */
  faq: [
    {
      question: "Bagaimana cara booking?",
      answer: "Pilih rute kemudian klik tombol Booking dan lanjutkan melalui WhatsApp."
    },
    {
      question: "Apakah keberangkatan dari Wonosobo?",
      answer: "Ya, seluruh rute utama pada demo website menggunakan Wonosobo sebagai titik keberangkatan."
    },
    {
      question: "Bagaimana cara mengetahui harga?",
      answer: "Harga tersedia pada halaman Rute & Harga dan dapat berubah sesuai kebijakan travel."
    },
    {
      question: "Apakah bisa mengganti jadwal?",
      answer: "Silakan hubungi admin melalui WhatsApp untuk konfirmasi ketersediaan dan perubahan jadwal."
    }
  ],

  /* ---------------------------------------------------------------------
     10. TEMPLATE PESAN WHATSAPP
     Placeholder otomatis diganti saat tombol ditekan.
     Tersedia: {brand} {nama} {telepon} {rute} {tanggal} {penumpang}
     --------------------------------------------------------------------- */
  waTemplates: {
    booking:
      "Halo {brand}, saya ingin booking travel:\n\n" +
      "Nama: {nama}\n" +
      "Nomor WhatsApp: {telepon}\n" +
      "Rute: {rute}\n" +
      "Tanggal keberangkatan: {tanggal}\n" +
      "Jumlah penumpang: {penumpang}\n\n" +
      "Mohon informasi ketersediaan dan total harga. Terima kasih.",
    route:
      "Halo {brand}, saya ingin booking travel:\n" +
      "Rute: {rute}\n" +
      "Jumlah penumpang:\n" +
      "Tanggal keberangkatan:\n" +
      "Nama:",
    general:
      "Halo {brand}, saya ingin bertanya tentang jadwal dan harga travel dari Wonosobo."
  }
};
