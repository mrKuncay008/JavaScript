// Kelas CarFull
class CarFull {
    constructor(merek, tahunPembayaranPajak, mesin, harga) {
      this.merek = merek;
      this.tahunPembayaranPajak = tahunPembayaranPajak;
      this.mesin = mesin;
      this.harga = harga;
    }
  
    // Method untuk menghitung pajak
    getPajak() {
      return this.harga * 0.025; // 2.5% dari harga
    }
  }
  
  // Kelas SuratKendaraan yang mewarisi dari CarFull
  class SuratKendaraan extends CarFull {
    constructor(merek, tahunPembayaranPajak, mesin, harga) {
      super(merek, tahunPembayaranPajak, mesin, harga);
    }
  }
  
  // Membuat objek dari kelas SuratKendaraan
  const myMobil = new SuratKendaraan("Toyota", 2016, 1500, 300000000);
  
  // Menghitung dan menampilkan nilai pajak
  const pajak = myMobil.getPajak();
  console.log(pajak); // Output: 7500000
  