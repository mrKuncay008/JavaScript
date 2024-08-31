// Metode Object Contsructor
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };
// 
// Color.prototype.rgb = function () {
// 
//     const {r, g, b} = this; // Membuat Variable untuk mengambil nilai objec dengan this.
//     return `rgb (${r}, ${g}, ${b})`
// }
// 
// Color.prototype.hex = function () { // metode rgb ke prototype dari konstruktor Color. Ini berarti semua instance dari Color akan mewarisi metode ini.
// 
//     const {r, g, b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// 
// console.log (new Color(255, 157, 255).hex());
// console.log (new Color(255, 157, 255).rgb());
// document.body.style.backgroundColor = "yellow"; // Ini Html dom untuk mengubah warna Bg 

// Class
class ColorNew {
    constructor(r, g, b, nama) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.nama = nama;
    }
    ColorName() { // Method fungsi yang di dalam fungsi
        console.log(`Ini adalah warna ${this.nama}`);
    }

    rgb() { // Method fungsi yang di dalam fungsi
        const {r, g, b} = this; // Membuat Variable untuk mengambil nilai objec dengan this.
        return `rgb (${r}, ${g}, ${b})`
    }

    hex() { // metode rgb ke prototype dari konstruktor Color. Ini berarti semua instance dari Color akan mewarisi metode ini.
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const callColor = new ColorNew(206,18,18,'Red');

// console.log(callColor);
// console.log(callColor.rgb());
// console.log(typeof callColor);

console.log(callColor);
console.log(callColor.hex());
// document.body.style.backgroundColor = callColor.hex();
