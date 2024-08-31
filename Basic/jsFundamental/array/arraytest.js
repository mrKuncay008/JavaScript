// Mendeklarasikan array dengan beberapa elemen dan menyimpan panjangnya dalam variabel 'size'
const training = ["Enigma", "Camp", "Code", "Node"];
let size = training.length;

// Mencetak panjang array 'training' ke konsol
console.log(size); // Output: 4 (jumlah elemen dalam array 'training')

// Mendeklarasikan array buah dan menambahkan elemen baru menggunakan metode 'push'
const buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
buah.push("Anggur"); // Menambahkan "Anggur" ke akhir array 'buah'

// Mencetak array 'buah' ke konsol setelah penambahan elemen
console.log(buah); // Output: ["Pisang", "Jeruk", "Apel", "Mangga", "Anggur"]

// Menggabungkan beberapa array menjadi satu array menggunakan metode 'concat'
const name1 = ["Cecilie", "Lone"];
const name2 = ["Emil", "Tobias", "Linus"];
const name3 = ["Robin", "Morgan"];
const students = name1.concat(name2, name3); // Menggabungkan 'name1', 'name2', dan 'name3' menjadi satu array baru

// Mencetak array 'students' ke konsol
console.log(students); // Output: ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]


/* Fungsi dari setiap bagian:

    training.length: Menghitung jumlah elemen dalam array training dan menyimpannya 
    dalam variabel size.
    
    buah.push("Anggur"): Menambahkan elemen "Anggur" ke akhir array buah.
    
    name1.concat(name2, name3): Menggabungkan array name1, name2, dan name3 
    menjadi satu array baru students.

*/