const camp = (value) => {
    const campFunct = value;
    const campInd = campFunct[3]; // Pastikan nama variabel konsisten
    return campInd;
}

console.log(camp(["Enigma", "Camp", "Code", "Node", "Javascript"]));

const student = (value) => {
      const studentVar = value
      const arraySlice = studentVar.slice(0,1);
      return studentVar
  }
  console.log(student(["budi","dayat","hamid","dodi","farhan"]));

const nameArray = (value) => {
    const nameVar = value;
    return nameVar ;
  }
console.log(nameArray(["Bagas","Agil","Doni"]));

function nameArray2(value) {
    const nameIndx = value.map((newName)=>newName[0]);
    return nameIndx;
  }

console.log(nameArray2(["budi","dayat","hamid","dodi","farhan"]));

function nameArray3(value) {
    const nameIndx = value.filter((newName)=>newName[0]!=="a");
    return nameIndx;
  }

  console.log(nameArray3(["asus","lenovo","acer","hp","axioo"]));

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
console.log(txt += value);
}
