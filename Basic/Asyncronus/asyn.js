// Synchronus
function coba1() {
    a = 2;
    b = 4;
    console.log(`${a + b}, Hasil Coba 1 Synchronus Succes`);
}

function coba2() {
    a = 4;
    b = 6;
    console.log(`${a + b}, Hasil Coba 2 Synchronus Succes`);
}

coba1();
coba2();

// Note 
/* 
Sycronus adalah proses code dari atas ke bawah
jika di atas masih belum ada yang belum di ekskusi maka
tidak berlanjut kebawah
*/

// Asyncronus

console.log('\n');

function cobaSatu() {

   console.log('Menunggu proses Asyncrous ...'); 
   setTimeout (() => {
    a = 3;
    b = `name`;
    c = 5;

        console.log(`Hallo tes ${this.a + this.c}, ${this.b}`);
   

    }, 2000);

   setTimeout (() => {
    
    console.log(`Proses Selsai 2 Detik ..!`);
   
        
    }, 3000);
};

cobaSatu();