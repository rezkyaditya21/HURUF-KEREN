# ✨ HurufKeren.id — Generator Font Aesthetic & Nickname Game Keren

**HurufKeren.id** adalah aplikasi web modern, ringan, dan cepat untuk mengubah teks standar menjadi lebih dari **50+ variasi tulisan unik (Unicode)**, simbol nickname game (Free Fire, Mobile Legends, PUBG Mobile), serta bio estetik untuk Instagram dan TikTok.

Aplikasi ini dibuat murni menggunakan **Vanilla HTML5, CSS3 Modern (Glassmorphism), dan JavaScript**, sehingga:
- **100% Client-Side**: Tidak memerlukan server backend maupun database berbayar.
- **Hosting 100% Gratis Selamanya**: Bisa di-hosting langsung di **GitHub Pages**, **Cloudflare Pages**, **Vercel**, atau **Netlify** dengan biaya Rp 0.
- **AdSense Ready**: Sudah memiliki slot penempatan iklan responsif yang strategis untuk monetisasi pendapatan iklan.

---

## 🚀 Fitur Unggulan

1. **50+ Gaya Font Unicode Real-Time**:
   - Gothic / Fraktur (*Normal & Bold*)
   - Cursive / Tulisan Sambung (*Normal & Bold*)
   - Double-Struck / Blackboard Hollow
   - Small Caps (Huruf Mini)
   - Lingkaran & Kotak (*Hitam & Putih*)
   - Zalgo Glitch / Teks Hacker dengan slider intensitas
   - Tulisan Terbalik 180°
   - Garis Coret, Garis Bawah, dan Garis Ombak
   - Preset Nickname Game: Sayap Malaikat, Sultan Mahkota 亗, Ksatria Duel, Petir Kilat, dll.
2. **Custom Nickname Styler**:
   - Pemilih simbol awalan (*prefix*) dan akhiran (*suffix*) untuk merakit nickname squad secara mandiri.
3. **Perpustakaan Simbol & Kaomoji**:
   - Ratusan simbol game, bintang, panah, hati, dan ekspresi kaomoji Jepang lucu `(づ｡◕‿‿◕｡)づ`.
   - Klik satu simbol untuk langsung menyalin ke clipboard atau menyisipkannya ke teks.
4. **Live Bio Preview Modal**:
   - Pratinjau langsung simulasi bagaimana tulisan Anda terlihat di bio Instagram sebelum disalin.
5. **1-Click Copy & Toast Notification**:
   - Tombol salin instan dengan animasi umpan balik haptic visual.
6. **Dark / Light Mode**:
   - Tema gelap beraksen neon dan tema terang bersih yang nyaman di mata.

---

## 💻 Cara Menjalankan di Lokal (Laptop Anda)

Tidak perlu install apa pun! Cukup buka file `index.html` langsung di browser Anda, atau jalankan local server:

```bash
# Opsi 1: Menggunakan Python
python -m http.server 3000

# Opsi 2: Menggunakan PHP
php -S localhost:3000

# Opsi 3: Menggunakan Node.js npx
npx serve .
```

Buka `http://localhost:3000` di browser Anda.

---

## 🌐 Cara Hosting 100% Gratis di GitHub Pages

Karena web ini murni HTML, CSS, dan JavaScript, Anda bisa meng-online-kannya di internet **gratis selamanya**:

1. Buat repositori baru di GitHub (misal: `hurufkeren`).
2. Masuk ke folder proyek dan jalankan:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release HurufKeren.id"
   git branch -M main
   git remote add origin https://github.com/<username-github-anda>/hurufkeren.git
   git push -u origin main
   ```
3. Buka repositori Anda di GitHub, klik menu **Settings** > **Pages**.
4. Pada bagian **Build and deployment > Branch**, pilih **`main`** dan folder **`/ (root)`**, lalu klik **Save**.
5. Tunggu 1 menit, web Anda sudah resmi aktif online di alamat:
   `https://<username-github-anda>.github.io/hurufkeren/`

---

## 💰 Cara Monetisasi dengan Google AdSense

1. Daftarkan domain atau web Anda ke [Google AdSense](https://adsense.google.com/).
2. Setelah disetujui, salin script AdSense Anda.
3. Ganti elemen `.ad-slot-container` di `index.html` dengan kode unit iklan AdSense responsif Anda:
   ```html
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
   <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
   </script>
   ```
4. Anda akan mulai mendapatkan penghasilan dari setiap impresi dan klik iklan pengunjung!
