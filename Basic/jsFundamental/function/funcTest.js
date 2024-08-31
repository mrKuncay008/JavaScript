function name(value) {
    const nameVar = [value] // Mendrklarasikan Value ke dalam array
    return nameVar // Mengembalikan nilai di dalam arrau NameVar
  }
 
  console.log(name(["budi","dayat","hamid","dodi","farhan"]));
  // Mencetak nilai array kedalam array funtion value

function student(value) {
    const studentFunct = ["Andi", "Budi", "Wahyu"];
    return studentFunct;
}

const list = student(); // Memanggil fungsi student() dan menyimpan hasilnya ke dalam list
console.log(typeof list); // Output: ["Andi", "Budi", "Wahyu"]
console.log( list); // Output: ["Andi", "Budi", "Wahyu"]

function camp(value) {
    const campVar = value
    const campInd = campVar[3]
    console.log(typeof campInd)
  }

camp(["Enigma", "Camp", "Code", "Node","Javascript"]);


