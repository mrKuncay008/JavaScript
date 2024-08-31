class molis {
  constructor(jenis, merek, tahun) {
    this.jenis = jenis;
    this.merek = merek;
    this.tahun = tahun;
  }
  showInfo() {
    
    console.log(`Mobil jenis: ${this.jenis} \n Merek dari: ${this.merek} \n Keluaran Tahun: ${this.tahun}`);

  }
  changeYears(newyear) {
    this.tahun = newyear;
    console.log(`Tahun sudah diganti ${this.tahun}`);
  }
  
}

const MyCar = new molis (`Wuling-Eletric`, `Wuling`, 2020);

MyCar.showInfo();
console.log('\n')
MyCar.changeYears(2022);
console.log('\n')
MyCar.showInfo();

const laptopGame = {
    Processor: "I7 13700",
    GPU: "RTX 4060",
    Merk: "Lenovo",
    Type: "Legion",
    Harga: 21000000
}
laptopGame.Harga = 23_500_000; // Memanupulasi/Mengubah Object
console.log(`Update Harga laptop ${laptopGame.Type} = ${laptopGame.Harga}`);


const rumah = {
    Panjang: 25,
    Lebar: 10,
    Alamat: "Jakarta",
    Harga: 1_500_000_000,
    Pajak: function() {
        return this.Harga * 0.02;
    }
}
// Menghitung pajak
const pajak = rumah.Pajak();
console.log(pajak);