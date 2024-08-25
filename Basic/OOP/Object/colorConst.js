// Metode Object Contsructor
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

Color.prototype.rgb = function () {

    const {r, g, b} = this; // Membuat Variable untuk mengambil nilai objec dengan this.
    return `rgb (${r}, ${g}, ${b})`
}

Color.prototype.hex = function () { // metode rgb ke prototype dari konstruktor Color. Ini berarti semua instance dari Color akan mewarisi metode ini.

    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

console.log (new Color(255, 157, 255).hex());
console.log (new Color(255, 157, 255).rgb());

