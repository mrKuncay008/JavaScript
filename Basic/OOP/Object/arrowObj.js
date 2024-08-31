const bro = (a) => {return a;}

console.log(bro(21));

// Fungsi anonim Tradisionl 
console.log((function (a) {
    return a + 100;
})(21));
  
  // Arrow 1. Menghapus Kata function dan menempatkan panah di antara argumrn dan kurungkurawal pembuka
  const ArrowSatu = (a) => {
    return a + 100;
  };
  console.log(ArrowSatu(10));
  
  // Arrow 2. Hapus kurung kurawal dan kata "return" — yang tersirat adalah return.
  const ArrowDua = (a = 21) => a + 100;
  console.log(ArrowDua());
  
  
  // Arrow 3. Hapus tanda kurung parameter Arrow ini hanya mengunakan satu parameter dan ekspresi
  const ArrowTiga = a => a + 100;
  console.log(ArrowTiga(21));

  // Di arrow function dengan satu ekspresi, tidak perlu menulis return secara eksplisit.
  // Nilai yang dihasilkan dari ekspresi tersebut akan otomatis dikembalikan.


  // Pratice
  const Color = (r, g, b) => { // Menyimpan variable ke parameter
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); // Logika untuk return ke bentuk hexadicimal
  }
  console.log(Color(255, 157, 255));

  /*
  .toString(16): Mengonversi hasil penjumlahan ke format string heksadesimal.
  .slice(1): Menghapus karakter pertama (1 dari (1 << 24)) untuk mendapatkan string heksadesimal yang benar-benar 6 dig */


class ColorArrow {
  constructor (r, g, b, nama) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.nama = nama;
  }
  ColorName = () => console.log(`Ini adalah warna ${this.nama}`);

  rgb () { // Method Arrow fungsi yang di dalam fungsi
    return (r, g, b) => {
      return `rgb (${r}, ${g}, ${b})`;
    };
  }
}

callArrow = new ColorArrow(206, 18, 18,'Red');
console.log(callArrow);
callArrow.ColorName();
