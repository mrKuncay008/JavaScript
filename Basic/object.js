let pren = {
    nama : "Asu",
    umur : 12,
    tinggal : "Tangerang"
};

 let user2 = {
    nama: "Mateus",
    umur: 20,
    tinggal : "Tangerang"
};

console.log("Nama:",pren.nama);
console.log("Umur:",pren.umur);
console.log("Alamat:",pren.tinggal);
console.log("\n");
console.log("Nama:",user2.nama);
console.log("Umur:",user2.umur);
console.log("tinggal:",user2.tinggal);
// function deklarasi
function objectnew(nama, umur, tinggal) {
   var warga = {};
   warga.nama = nama;
   warga.umur = umur;
   warga.tinggal = tinggal;
   return warga;
}
var warga2 = objectnew(
   'kuncay','20','Jakarta');
console.log("warga",warga2);

// Constractor object
function mahasiswa(nama, nim, jurusan) {
   this.nama = nama;
   this.nim = nim;
   this.jurusan = jurusan;
}
var mahasiswanew = new mahasiswa(
   'Kuncay','32211','Informatika');
console.log("mahasiswa", mahasiswanew)