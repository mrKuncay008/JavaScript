# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Dokumentasi Form Vadilation Libaryy

## Deskripsi
`RegisPage.jsx` adalah komponen React yang digunakan untuk membuat formulir pendaftaran pengguna dengan validasi menggunakan `react-hook-form` dan `zod`. Komponen ini menggunakan antarmuka dari `@nextui-org/react` untuk styling dan layout.

## Library dan Fungsionalitas

### 1. `@nextui-org/react`
`@nextui-org/react` adalah pustaka komponen UI untuk React yang menyediakan komponen antarmuka pengguna yang dirancang dengan baik. Dalam kode ini, digunakan komponen-komponen berikut:
- **`Button`**: Komponen untuk tombol interaktif.
- **`Card`**: Komponen untuk membuat kartu dengan konten.
- **`CardBody`**: Bagian dari `Card` yang menampung konten utama.
- **`CardHeader`**: Bagian dari `Card` yang menampung header atau judul.
- **`Divider`**: Komponen untuk memisahkan elemen UI secara visual.
- **`Input`**: Komponen untuk input teks.

### 2. `react-hook-form`
`react-hook-form` adalah pustaka untuk mengelola status form dan validasi dengan cara yang efisien. Pustaka ini menawarkan cara yang mudah dan fleksibel untuk menangani formulir di React.

- **`useForm`**: Hook utama dari `react-hook-form` yang digunakan untuk mengelola formulir, validasi, dan pengiriman.
  - **`handleSubmit`**: Fungsi yang digunakan untuk menangani pengiriman formulir. Memastikan validasi berhasil sebelum memanggil fungsi `newUser`.
  - **`control`**: Objek yang digunakan untuk mengontrol input formulir dengan komponen `Controller`.

- **`Controller`**: Komponen pembungkus untuk menghubungkan elemen formulir yang tidak dikelola langsung oleh `react-hook-form` dengan sistem formulir. Memudahkan integrasi dengan komponen UI eksternal seperti `Input`.

### 3. `zod`
`zod` adalah pustaka untuk skema validasi TypeScript-first yang memungkinkan Anda mendefinisikan dan memvalidasi data dengan cara yang deklaratif dan type-safe.

- **`z`**: Objek dari `zod` yang digunakan untuk mendefinisikan skema validasi.
  - **`object`**: Metode untuk membuat skema objek dengan aturan validasi untuk setiap field.
  - **`string`**: Metode untuk mendefinisikan aturan validasi string, termasuk `email` dan `min` untuk validasi panjang minimum.

- **`zodResolver`**: Fungsi dari `@hookform/resolvers/zod` yang menghubungkan skema `zod` dengan `react-hook-form` untuk validasi data formulir.

## Struktur Kode

### Definisi Skema Validasi
```javascript
const formScema = z.object({
    email: z.string().email('Email Yang bener Cokk !!'),
    username: z.string().min(5, 'Username minimal 5 !'),
    password: z.string().min(8, 'Asuuu Yang bener cok'),
});
