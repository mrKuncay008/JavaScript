// function Testing(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
// };
// 
// Testing.prototype.coba = function () {
//     console.log('Menunggu proses Asyncrous ...');
// 
//     return new Promise ((resolve) => {
//         setTimeout (() => {
//             const {a, b, c} = this;
//             resolve (`Hallo tes ${a + c}, ${b}`);
//     
//         }, 2000);
//     });
// };
// Menggunakan Callback
// const instance = new Testing(6, 4, 7); // Membuat fungsi construct instance
// instance.coba(result => {
//     console.log(result); // Menampilkan hasil setelah 2 detik
// });

// Menggunakan Promise

// async function tes() {
//     
//     const hasil = new Testing(21,3,4);
//     const call = await hasil.coba();
//     console.log(call);
// }
// 
// tes();

function cobaDua() {

    console.log('Menunggu proses Asyncrous Coba 2 ...\n');
    return new Promise ((resolve) => { //  fungsi yang dipanggil ketika Promise berhasil

        setTimeout (() => {
            a = 3;
            b = `Testing 2 Success !...`;
            c = 5;
        
             resolve(`Hallo tes ${this.a + this.c}, ${this.b}`); //dipanggil dengan string yang menggabungkan nilai hasil akhir yang di callback promise
        }, 2000);
    });
}

function cobaTiga() {

    console.log('Menunggu proses Asyncrous Coba 3 ...\n');

    return new Promise ((resolve) => { //  fungsi yang dipanggil ketika Promise berhasil
        setTimeout (() => {
            a = 3;
            b = `Testing 3 Success !...`;
            c = 5;
             resolve(`Hallo tes ${this.a + this.c}, ${this.b}`); //dipanggil dengan string yang menggabungkan nilai hasil akhir yang di callback promise
        }, 3000);
    });
}

cobaDua()
.then((hasil) => {
    console.log(hasil);
    // memanggil fungsi cobaDua dan menangani hasil ketika Promise diselesaikan.
    // hasil adalah nilai yang dikembalikan dari resolve dalam Promise, dan console.log(hasil) mencetak hasil tersebut.
    return cobaTiga();
})
.then((hasil3) => {
    console.log(hasil3);  
})
