# Blissful Bakery Website

Website modern untuk toko kue premium dengan tampilan elegan, minimalis, dan responsif.

## Fitur Utama

1. **Desain Modern & Elegan**
   - Warna pastel (cream, pink muda, coklat susu, beige)
   - Akses warna emas dan coklat tua
   - Font elegan (Playfair Display & Poppins)

2. **Animasi & Efek**
   - Smooth scroll
   - Animasi fade-in & slide-up saat scroll (menggunakan AOS)
   - Hover effect pada card produk
   - Loading intro ringan

3. **Halaman & Section**
   - Home dengan hero section
   - About Us dengan cerita bakery
   - Menu/Products dengan kategori
   - Best Seller section
   - Testimoni pelanggan
   - Gallery foto produk
   - Call To Action untuk pemesanan
   - Footer dengan informasi lengkap

4. **Fitur Interaktif**
   - Filter produk berdasarkan kategori
   - Mobile-friendly navigation
   - WhatsApp integration untuk pemesanan
   - Responsive design untuk semua perangkat

## Teknologi yang Digunakan

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (Vanilla)
- AOS Library (Animate On Scroll)
- Font Awesome Icons
- Google Fonts

## Cara Menjalankan

1. Clone atau download semua file
2. Pastikan file-file berikut ada dalam folder yang sama:
   - `index.html`
   - `style.css`
   - `script.js`
3. Buka file `index.html` di browser web

## Customization

### Mengubah Data Produk
Edit array `products` di file `script.js` untuk menambah/mengubah produk:
```javascript
const products = [
    {
        id: 1,
        name: "Nama Kue",
        category: "kategori",
        description: "Deskripsi kue",
        price: "Rp 000.000",
        image: "URL gambar",
        bestSeller: true/false
    },
    // ... produk lainnya
];