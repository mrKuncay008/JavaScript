for (let i = 0; i < rows; i++) {
    let line = '';

    // Menambahkan spasi di depan
    for (let j = 0; j < rows - i - 1; j++) {
        line += ' ';
    }

    // Menambahkan karakter #
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '#';
    }

    console.log(line);
}
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// let i = 0;
//   while (i < 10) {
//     console.log(i++);
//     if (i===5) {
//         break;
//     }
//   }
  
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i % 2) {
//         console.log("ini habis dibagi 2");
//         i++
//     }
// }

// let i = 10
// do {
//   console.log(i)
//   i++
// } while (i < 5)

const rows = 5; // Jumlah baris dalam pola
