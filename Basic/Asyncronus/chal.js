// Mendefinisikan empat fungsi yang akan dicetak setelah 1 detik
function find1(callback) {
    setTimeout(() => {
        console.log("console log find1");
        callback(); // Memanggil callback jika ada
    }, 1000);
}

function find2(callback) {
    setTimeout(() => {
        console.log("console log find2");
        callback(); // Memanggil callback jika ada
    }, 1000);
}

function find3() {
    setTimeout(() => {
        console.log("console log find3"); // Memanggil callback jika ada

    }, 1000);
}

function find4(callback) {
    setTimeout(() => {
        console.log("console log find4");
        callback(); // Memanggil callback jika ada
    }, 1000);
}

// Mengatur urutan pemanggilan fungsi
find4(() => {
    find2(() => {
        find1(() => {
            find3();
        });
    });
});


/*  
Soal: 
Buatlah empat function dengan nama find1 yang akan dieksekusi setelah 1 detik, find2 yang akan dieksekusi setelah 1 detik,
find3 yang akan dieksekusi setelah 1 detik, 
dan find4 yang akan dieksekusi setelah 1 detik. Tiap function nya mencetak kata console log (nama function).

Kemudian buatlah pemanggilan callback function dimana function find4 adalah function pertama yang dipanggil,
function find2 adalah function kedua yang dipanggil, function find1 adalah function ketiga yang dipanggil,
function find3 adalah function terakhir yang dipanggil.
*/