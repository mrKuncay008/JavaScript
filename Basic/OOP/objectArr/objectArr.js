// biografi = [{
//     Nama: "Hamdi",
//     Umur: 26,
//     Alamat: {
//         Profinsi: "Jawa Barat",
//         Kota:"Bandung"
//     },
//     Pekerjaan: "Programmer",
// }, {
//     Nama: "Hamka",
//     Umur: 27,
//     Alamat: {
//         Profinsi: "DKI Jakarta",
//         Kota:"Jakarta Selatan"
//     },
//     Pekerjaan: "Wirausaha",
// }, ]
// const biografiLoop = biografi.map((value)=>value.Alamat)
// console.log(biografiLoop[0]);

const biografi = [{
    Nama: "Hamdi",
    Umur: 26,
    Alamat: {
        Profinsi: "Jawa Barat",
        Kota:"Bandung"
    },
    Pekerjaan: "Programmer",
}, {
    Nama: "Hamka",
    Umur: 27,
    Alamat: {
        Profinsi: "DKI Jakarta",
        Kota:"Jakarta Selatan"
    },
    Pekerjaan: "Wirausaha",
}, {
    Nama: "Rudi",
    Umur: 27,
    Alamat: {
        Profinsi: "Jawa Tengah",
        Kota:"Semarang"
    },
    Pekerjaan: "Wiraswasta",
}]

const newObject = biografi.push({ Nama: "Alex", Umur: 28, Alamat: { Profinsi: "Bali", Kota: "Denpasar" }, Pekerjaan: "Desainer" });
const fifoObject = biografi.shift();

console.log(`Menambah Data: `, newObject);

console.log('Hasil setalah Fifo: \n', biografi)

