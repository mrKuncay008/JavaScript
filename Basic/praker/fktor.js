// console.log("Progrma Mencari Bilangan faktor");

// let angka = 15;

// for (let i = 1; i <= angka; i++) {
//     if (angka % i == 0) {
//         console.log("Faktor dari " + angka +" Adalah " + i);
//     } 
// }

console.log("Progrma Mencari Bilangan faktor");

let angka = 17;
let dibagi = 0;

for (let i = 1; i <= angka; i++) {
    if (angka % i == 0) {
        dibagi = dibagi+1;
    } 
}
if (dibagi == 2) {
    console.log(angka + " Adalah Bilangan Prima !");
}

