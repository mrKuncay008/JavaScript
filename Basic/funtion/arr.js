function arrObjt(Bar) {
    var hasil = [];

    for (let i = 0; i < Bar.length; i++) {
        var obj = {};
        obj.Tipe = Bar[i][0];
        obj.Nama = Bar[i][1];
        obj.Harga = parseInt(Bar[i][2]);
        hasil.push(obj);
    }
    return hasil;
}
var Bar = [['Montong','Kuncay',90000]];
var hasil = arrObjt(Bar);
console.log(hasil);

// Function dengan tandan panah
var user = () => {
    let kucing = [
    {
        nama: "Kuncay",
        umur: 20
    },
    {
        nama: "Popy",
        umur: 19
    }
    ];
    console.log(kucing[1].nama)
}
user();