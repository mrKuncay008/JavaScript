const user = { name: "Maspren", saldo: 30000 };

// Fungsi untuk mengecek saldo dan mengembalikan Promise
function infoSaldo(user) {
    return new Promise((resolve, reject) => {
        // Memeriksa apakah properti saldo ada di objek user
        if ('saldo' in user) {
            resolve(user); // Mengembalikan objek user jika saldo ada
        } else {
            reject('Gagal mendapatkan info saldo'); // Menolak Promise jika saldo tidak ada
        }
    });
}

// Fungsi untuk mendapatkan informasi pengguna dengan menggunakan async/await
async function getInfoPengguna(user) {
    try {
        // Memanggil fungsi infoSaldo dan menunggu hasilnya
        const result = await infoSaldo(user);
        // Menampilkan informasi saldo jika berhasil
        console.log(`Nama ${result.name} memiliki sisa saldo ${result.saldo}`);
    } catch (error) {
        // Menampilkan pesan error jika terjadi kesalahan
        console.log(error);
    }
}

// Memanggil fungsi getInfoPengguna dengan objek user
getInfoPengguna(user);
