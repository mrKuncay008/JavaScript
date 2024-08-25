function beliMobil(gaji) {
    let objectMobil;

    // Gaji di atas 500.000.000 tetap membeli mobil Rush
    if (gaji >= 500000000) {
        objectMobil = {
            Merek: "Toyota",
            Nama: "Rush",
            Mesin: 1500,
            Harga: 200000000,
            Tahun: 2023
        };
    } else if (gaji >= 50000000) {
        // Jika gaji >= 50.000.000, Agus membeli mobil Fortuner
        objectMobil = {
            Merek: "Toyota",
            Nama: "Fortuner",
            Mesin: 2000,
            Harga: 500000000,
            Tahun: 2027
        };
    } else if (gaji >= 30000000) {
        // Jika gaji >= 30.000.000 dan kurang dari 50.000.000, Agus membeli mobil Ayla
        objectMobil = {
            Merek: "Toyota",
            Nama: "Ayla",
            Mesin: 1200,
            Harga: 150000000,
            Tahun: 2027
        };
    } else {
        // Jika gaji kurang dari 30.000.000, Agus membeli mobil Rush
        objectMobil = {
            Merek: "Toyota",
            Nama: "Rush",
            Mesin: 1500,
            Harga: 200000000,
            Tahun: 2023
        };
    }

    // Mengembalikan objectMobil
    return objectMobil;
}

// Contoh pemanggilan fungsi
console.log(beliMobil(10000000));
