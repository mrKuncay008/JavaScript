function hitungTotal(produkArray) {
    return new Promise((resolve, reject) => {
        let total = 0;

        // Periksa apakah produkArray adalah array
        if (!Array.isArray(produkArray)) {
            return reject('Data Produk tidak valid');
        }

        // Iterasi melalui setiap objek produk dalam array
        for (const produk of produkArray) {
            // Periksa apakah setiap produk memiliki properti nama, harga, dan jumlah
            if (typeof produk.nama !== 'string' || 
                typeof produk.harga !== 'number' || 
                typeof produk.jumlah !== 'number') {
                return reject('Data Produk tidak valid');
            }

            // Hitung total pembelian untuk produk yang valid
            total += produk.harga * produk.jumlah;
        }

        // Selesaikan Promise dengan total pembelian
        resolve(total);
    });
}

const produk = [{nama:"Kemeja",harga:80,jumlah:2},{nama:"Selendang",harga:20,jumlah:13},{nama:"Jeans",harga:150,jumlah:12}];

// Memanggil fungsi dan menangani hasil dengan .then dan .catch
hitungTotal(produk)
    .then(total => {
        console.log('Total Pembelian:', total);
    })
    .catch(error => {
        console.error('Error:', error);
    });