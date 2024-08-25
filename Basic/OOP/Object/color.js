function convColor(r, g, b) {
    const color = {}; // Membuat Object kosong yang akan digunakan untuk menyimpan nilai
    
    // Menyimpan nilai r, g, dan b dalam objek color dengan properti yang sesuai.
    color.r = r;
    color.b = b;
    color.g = g;
    
    color.rgb = function () {

        const {r, g, b} = this; // Membuat Variable untuk mengambil nilai objec dengan this.
        return `rgb (${r}, ${g}, ${b})`
    }

    color.hex = function () {

        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color;
}

// console.log(convColor(21,21,21));

const color = convColor( 255, 157, 255 );
console.log(color.rgb());
console.log(color.hex());

/* 
return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);:

    (1 << 24): Membuat angka 2^24, yang merupakan nilai dasar untuk warna heksadesimal (0x1000000), untuk memastikan bahwa
     warna yang dihasilkan selalu memiliki 6 digit setelah tanda #.
    (r << 16): Menggeser nilai merah (r) ke posisi bit yang sesuai dalam format warna heksadesimal.
    (g << 8): Menggeser nilai hijau (g) ke posisi bit yang sesuai dalam format warna heksadesimal.
    b: Menambahkan nilai biru (b).
    .toString(16): Mengonversi hasil penjumlahan ke format string heksadesimal.
    .slice(1): Menghapus karakter pertama (1 dari (1 << 24)) untuk mendapatkan string heksadesimal yang benar-benar 6 digit.
*/