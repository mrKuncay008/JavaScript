class Chocolate {
    constructor(nama, tipe, bahan, berat) {
        this.nama = nama;
        this.tipe = tipe;
        this.bahan = bahan;
        this.berat = berat;
    }
}
const chocolatey = new Chocolate("Chocolatey", "Chocolate bar", "Chocolate", 500);

console.log(chocolatey.bahan)