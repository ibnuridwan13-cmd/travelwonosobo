# WONOSOBO TRANS — Website Demo Travel Antar Kota

Website satu halaman (statis) untuk travel antar kota dari Wonosobo. Dibuat dengan HTML, CSS, dan JavaScript murni — tanpa framework, tanpa build step, dan tanpa database.

> **Penting:** ini adalah website **demo**. Nama travel, nomor WhatsApp, harga, foto, testimoni, dan detail lainnya adalah **data contoh**, bukan informasi bisnis yang sudah terverifikasi. Ganti sebelum dipublikasikan sebagai website resmi.

---

## 1. Cara membuka website

- Buka `index.html` langsung di browser (paling cepat), atau
- Jalankan server statis lokal agar semua gambar dan font dimuat dengan benar:

  ```
  powershell -ExecutionPolicy Bypass -File serve.ps1
  ```

  Lalu buka `http://localhost:8080`. Hentikan dengan `Ctrl+C`.

`serve.ps1` hanya untuk pengembangan lokal. Tidak ada proses instalasi, `npm install`, atau build step. Bila memakai Python, `python -m http.server 8080` juga bisa dipakai.

## 2. Struktur file

```
index.html               → struktur halaman + SEO meta
serve.ps1                → server lokal sederhana (opsional, untuk pratinjau)
assets/
  css/style.css          → seluruh tampilan (tema biru & putih)
  js/config.js           → SEMUA DATA USAHA (edit di sini)
  js/app.js              → logika: render kartu, form booking, WhatsApp
  img/                   → foto sementara (armada, destinasi, logo)
README.md                → panduan ini
```

## 3. Data yang bisa diubah (satu tempat)

Buka **`assets/js/config.js`**. Semua bagian penting website diambil dari file ini:

| Bagian | Yang diubah |
| --- | --- |
| `brand` | Nama travel, tagline, subjudul logo, logo gambar |
| `contact` | Nomor WhatsApp, nomor tampilan, alamat, jam layanan |
| `hero` | Foto utama halaman depan |
| `fleet` | Nama armada, deskripsi, daftar foto, spesifikasi, catatan foto |
| `routes` | Nama kota tujuan, harga, deskripsi rute |
| `destinations` | Nama destinasi, foto, deskripsi |
| `about` | Paragraf "Tentang Kami", foto |
| `testimonials` | Isi testimoni, nama, kota |
| `faq` | Pertanyaan dan jawaban |
| `waTemplates` | Teks pesan WhatsApp otomatis |

### Mengganti nomor WhatsApp

```js
contact: {
  whatsapp: "6281234567890",        // tanpa "+", tanpa spasi, tanpa tanda hubung
  whatsappDisplay: "+62 812-3456-7890" // hanya untuk tampilan
}
```

Honor semua tombol WhatsApp di halaman (header, hero, form booking, kartu rute, destinasi, kontak, footer, tombol lengket di mobile) otomatis memakai nomor ini.

### Mengganti harga

```js
{ to: "Jogja", price: 150000, description: "..." }
```

Tulis harga sebagai angka saja (tanpa titik). Website menampilkannya otomatis dalam format Rupiah, contoh `Rp150.000`.

### Menambah / menghapus rute

Tambahkan atau hapus satu baris di dalam array `routes`. Pilihan rute pada form booking ikut berubah otomatis.

### Mengganti foto armada

1. Simpan foto baru di `assets/img/` (disarankan lebar 1280 px, format JPG/WebP).
2. Perbarui `fleet.images` dan `hero.image` pada `config.js`.

Foto pertama pada `fleet.images` menjadi foto utama galeri. Foto bisa diganti tanpa menyentuh HTML sama sekali.

### Mengganti logo

- Logo teks + ikon bawaan: biarkan `brand.logoImage: ""`.
- Logo gambar: simpan file (PNG/SVG transparan) di `assets/img/`, lalu isi `brand.logoImage: "assets/img/logo.png"`.
- Ikon logo sementara ada di `index.html` (simbol `#icon-logo`) dan `assets/img/favicon.svg`.

## 4. Fitur halaman

- Hero dengan foto armada dan dua tombol aksi.
- Kartu booking cepat (nama, WhatsApp, rute, tanggal, jumlah penumpang) yang mengirim pesan WhatsApp terformat.
- Galeri armada dengan thumbnail yang bisa diklik.
- Katalog 12 rute beserta harga per penumpang dan tombol "Pesan Sekarang".
- Kartu destinasi populer dengan harga mulai.
- Bagian "Kenapa Kami", 3 langkah booking, Tentang Kami, testimoni contoh, dan FAQ akordeon.
- Header lengket, navigasi mobile, tombol WhatsApp lengket di bawah pada layar kecil.
- SEO dasar: title, meta description, Open Graph, H1/H2, alt text, dan HTML semantik.

## 5. Catatan tentang foto

Foto armada dan destinasi saat ini memakai gambar sementara dari Wikimedia Commons (lisensi Creative Commons Attribution-ShareAlike). Ganti dengan foto milik sendiri sebelum website dipakai secara komersial.

- Daihatsu Gran Max: `2021 Daihatsu Gran Max 1.5 van (S402RV)`, `2022 Daihatsu Gran Max 1.5 D S403RV`, `2015 Daihatsu Gran Max 1.3 D S401RV`, `Daihatsu Gran Max (Front), Jakarta, Indonesia` — Wikimedia Commons.
- Dieng: `Telaga Warna Dieng Jawa Tengah` — Wikimedia Commons.
- Yogyakarta: `Malioboro at night` — Wikimedia Commons.
- Semarang: `Lawang Sewu Semarang Indonesia 1` — Wikimedia Commons.
- Jakarta: `Jakarta Panorama` — Wikimedia Commons.
- Bandung: `Gedung Sate Bandung` — Wikimedia Commons.
- Magelang: `Borobudur Magelang` — Wikimedia Commons.
- Purwokerto: `Baturraden overview from ridge, Purwokerto` — Wikimedia Commons.
- Tentang Kami: `Panorama of mount Prahu in Dieng Plateau (cropped)` — Wikimedia Commons.

Halaman juga memuat font **Plus Jakarta Sans** dari Google Fonts. Bila ingin sepenuhnya offline, hapus tag font di `index.html` (font sistem akan dipakai).

## 6. Publikasi

Website ini statis sehingga bisa diunggah ke hosting apa pun (Netlify, Vercel, GitHub Pages, cPanel, Cloudflare Pages). Cukup unggah `index.html` dan folder `assets/`.

Sebelum publikasi:

1. Ganti seluruh data contoh di `config.js`.
2. Ganti foto sementara dengan foto asli.
3. Perbarui `og:image` dan meta di `index.html` bila perlu.
4. Hapus banner "Situs demo" (`div.demo-bar`) dan kalimat demo pada bagian Tentang Kami, testimoni, serta footer.
