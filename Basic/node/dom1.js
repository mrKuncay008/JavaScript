exports.kunc = function() {
let kucing = {
    Aisma: ["Pony","Boy","Ratu"],
    Masse: ["Kuncay","Popy"]
}
// Menampilkan array kucing
console.log(kucing);
// Menampilkan  Array Kucing objrct Aisma
console.log(kucing["Aisma"]); // Dengan array

console.log("Kucing Aisma: ");
console.log(kucing.Aisma.join()); // Dengan Join
};
// Menampilkan arrray Kucing dengan object Masse
console.log("Kucing Masse",kucing["Masse"]); // denga array
console.log("Kucing Masse: ");
console.log(kucing.Masse.join()); // Dengan Join
console.log("Kucing Aisma Mati satu Namanya:", kucing.Aisma[2]);
console.log(" ");
console.log("Kucing aisma: ");
kucing.Aisma.forEach(aisma => console.log(aisma)); // Dengan Foreach
console.log("");
console.log("Kucing Masse: ");
kucing.Masse.forEach(Masse => console.log(Masse));

const a = document.getElementById('judul');
a.style.color = 'red';
a.style.fontFamily = 'Lucida Console';

function cat() {
    let cat = 5;
    let print = '';
    for (let i = 0; i < cat; i++) {
        print += "Kucing ada "+ i + "<br>";
    }
    document.getElementById('cat').innerHTML = print;
 }