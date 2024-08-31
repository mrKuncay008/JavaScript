let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];
let gpu = [4070, 4090, 4050, 4080, 4060];

const laptopGpu = (valLap, valGpu) => {
    valLap.sort();
    valGpu.sort();
    let result = [];
    
    for (let i = 0; i < laptop.length; i++) {
        const lapIndex = valLap.indexOf(laptop[i]);
        const gpuItem = gpu[i];
        result.push(`{${valLap[lapIndex]} dengan gpu ${gpuItem}}`);
    }  
    return result;
};
console.log(laptopGpu(laptop, gpu));

/* 
    Deskripsi

Fungsi laptopGpu menerima dua array sebagai parameter: valLap (array yang berisi nama-nama laptop) dan 
valGpu (array yang berisi nilai-nilai GPU). Fungsi ini mengurutkan kedua array, kemudian menggabungkan
elemen dari valLap dengan elemen dari valGpu sesuai dengan indeks yang sama setelah pengurutan, dan 
mengembalikan array hasil dalam format string yang ditentukan.

Parameter

    valLap: Array yang berisi nama-nama laptop (contoh: ["asus", "lenovo", "acer", "hp", "axioo"]).
    valGpu: Array yang berisi nilai-nilai GPU (contoh: [4070, 4090, 4050, 4080, 4060]).

Fungsi

    sort(): Mengurutkan kedua array secara default (urutkan secara alfabet untuk valLap dan secara numerik untuk valGpu).
    result: Array untuk menyimpan hasil format string.
    for Loop: Mengiterasi elemen dari array valLap dan valGpu, dan menggabungkannya dalam format string yang ditentukan.
    push(): Menambahkan string yang telah diformat ke array result.

Pengembalian

    Mengembalikan array result yang berisi string dengan format {laptopName dengan gpu gpuValue}, 
    di mana laptopName dan gpuValue sesuai dengan urutan setelah pengurutan.

*/