function coba1(callback) {
    setTimeout (() => {
        a = 2;
        b = 4;
        console.log(`${a + b}, Hasil Coba 1 Synchronus Succes`);

        callback(); // Memanggil callback yang diberikan
    }, 3000)
}

function coba2() {
    setTimeout (() => {
        console.log(`\n Proses Ke-2 ....`);
        
        console.log(`${b - a}, Hasil Coba 2 Synchronus Succes`);
    }, 4000)
}

function coba3() {
    setTimeout (() => {
        console.log(`\n Proses Ke-3 ....`);
        
        console.log(`${b * a}, Hasil Coba 3 Synchronus Succes`);
    }, 4000)
}

// Memanggil fungsi coba1 dengan callback
coba1(() => {
    console.log("Callback 2 Di panggil ....\n");
     // Memanggil fungsi coba2 tanpa callback, karena coba2 tidak memerlukan callback tambahan
    coba2(() => {
        console.log("Callback 3 di panggil ... ");
         // Memanggil fungsi coba3 tanpa callback, karena coba3 tidak memerlukan callback tambahan
        coba3();
    });
})

/*
Callback synkronus dipanggil segera setelah pemanggilan fungsi luar, 
tanpa intervensi tugas asinkron, sedangkan callback asinkron dipanggil nanti,
setelah operasi asynkronus selesai.
*/