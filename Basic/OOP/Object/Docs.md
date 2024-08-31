# Function Arrow

- Fungsi panah tidak memiliki ikatannya sendiri dengan this, arguments, atau super, dan tidak boleh digunakan sebagai metode .
- Fungsi panah tidak dapat digunakan sebagai konstruktor . Memanggilnya dengan newmelempar TypeError. Fungsi tersebut juga tidak memiliki akses ke new.targetkata kunci.
- Fungsi panah tidak dapat digunakan yielddi dalam badannya dan tidak dapat dibuat sebagai fungsi generator.

## Funct Arrow Anonym

```js
(function ArrowTradis(b) {
    return b + 100;
});
console.log(ArrowTradis(21));

```
Code di atas akan menimbulkan error karena Func anonim tidak bisa dipanngil dan di difinisikan ke variable.
dan ini contoh Perbaikan nya :

```js
// Fungsi anonim Tradisionl 
console.log((function (a) {
    return a + 100;
})(21));

```
Ini adalah contoh dengan funct anonim yang langsung di panggil ke dalam console.log.

```js
// Arrow 1. Menghapus Kata function dan menempatkan panah di antara argumrn dan kurungkurawal pembuka
  const ArrowSatu = (a) => {
    return a + 100;
  };
  console.log(ArrowSatu(10));

```
Dan yang ini func anonim yang bisa di simpan ke variable lalu di panggil

## Penjelasan

Fungsi Anonim Tidak Didefinisikan:
Fungsi anonim dalam kode Anda tidak didefinisikan dalam variabel atau dipanggil secara langsung. Akibatnya, ArrowTradis tidak dapat diakses di luar fungsi.

Fungsi IIFE (Immediately Invoked Function Expression):
Fungsi yang didefinisikan dalam tanda kurung seperti ini adalah fungsi yang langsung dipanggil (IIFE).

## Funct Arrow Clean
```js
// Arrow 2. Hapus kurung kurawal dan kata "return" — yang tersirat adalah return.
  const ArrowDua = (a = 21) => a + 100;
  console.log(ArrowDua());

```
Arrow ini hanya menghapus kurung kurawal yang membuat line code nya lebih rapih dan simple, namun ini hanya di gunakan untuk satu parameter
dan satu deklarasi tidak bisa di tambah lagi.

## Funct Arrow yang di bungkus Class
Fungsi arrow bisa menggunakan this. dan new constructer jika Funct arrow di bungkus dengan class terlebih dahulu.

```js
class ColorArrow { // Membungkus fuct di dalam class
  constructor (r, g, b, nama) {
    this.r = r;
    this.g = g; // Consturctur R, G, B menggunakan this
    this.b = b;
    this.nama = nama;
  }
  ColorName = () => console.log(`Ini adalah warna ${this.nama}`); // Menyimpan variable arrow funct di dalam class function
}
```

```js
rgb () { // Method Arrow fungsi yang di dalam fungsi
    return (r, g, b) => {
      return `rgb (${r}, ${g}, ${b})`;
    };
  }
```
dalam baris `${rgb()}` mendeklarasikan Method arrow yang parameter nya R,G,B dan di isi value lagi dengan `${return rgb (${r}, ${g}, ${b});}`

```js
callArrow = new ColorArrow(206, 18, 18,'Red');
console.log(callArrow);
```
Membuat variable baru lagi `${callArrow}` untuk mengisi new dari class untuk Memanggil isi value yang sudah di buat.