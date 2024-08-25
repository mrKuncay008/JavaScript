# Perbedaan Promise Asyn dan Await Asyn

Keduanya, Promise dan async/await, adalah mekanisme untuk menangani operasi asinkron dalam JavaScript. Namun, mereka digunakan dalam cara yang berbeda dan memiliki kelebihan masing-masing.

## Promise

Promise adalah objek yang mewakili hasil dari operasi asinkron. Dengan Promise, kamu dapat menggunakan .then() untuk menangani hasil yang berhasil dan .catch() untuk menangani error.


```js
function infoSaldo(user) {
    return new Promise((resolve, reject) => {
        if ('saldo' in user) {
            resolve(user);
        } else {
            reject('Gagal mendapatkan info saldo');
        }
    });
}

function getInfoPengguna(user) {
    infoSaldo(user)
        .then(result => {
            console.log(`Nama ${result.name} memiliki sisa saldo ${result.saldo}`);
        })
        .catch(error => {
            console.log(error);
        });
}

const user = { name: "Park Doe", saldo: 3000000 };

getInfoPengguna(user);
```

## Await Asyn

Async/await adalah sintaks yang lebih baru dan lebih bersih untuk bekerja dengan Promise.
async membuat fungsi mengembalikan Promise, dan await digunakan di dalam fungsi async untuk
menunggu hasil dari Promise.

```js

async function infoSaldo(user) {
    return new Promise((resolve, reject) => {
        if ('saldo' in user) {
            resolve(user);
        } else {
            reject('Gagal mendapatkan info saldo');
        }
    });
}

async function getInfoPengguna(user) {
    try {
        const result = await infoSaldo(user);
        console.log(`Nama ${result.name} memiliki sisa saldo ${result.saldo}`);
    } catch (error) {
        console.log(error);
    }
}

const user = { name: "Park Doe", saldo: 3000000 };
getInfoPengguna(user);

```

# PERBANDINGAN

- Async/Await: Umumnya lebih mudah dibaca dan dipahami karena lebih mirip dengan kode sinkron. Penanganan alur kontrol menjadi lebih jelas, seperti halnya dengan menggunakan try/catch.

- Promise: Dapat menjadi sulit dibaca jika rantai .then() dan .catch() menjadi panjang atau rumit.

- Async/Await: Mengurangi jumlah callback yang bersarang dan membuat alur kode lebih terstruktur.

- Promise: Meskipun .then() dan .catch() bisa dirantai, mereka bisa menjadi rumit jika banyak chain yang diperlukan.

- Async/Await: Memudahkan penanganan error menggunakan try/catch, yang lebih intuitif.

- Promise: Menggunakan .catch() untuk menangani error. Jika ada banyak then yang perlu ditangani, penanganan error bisa menjadi kurang jelas.


Secara umum, async/await adalah pilihan yang lebih baik untuk penulisan kode yang bersih dan mudah dipahami, jika ada project yang 
mengharusakan menggunakan banyak asynchornus. 
Sementara Promise adalah dasar yang mendasari penggunaan async/await.