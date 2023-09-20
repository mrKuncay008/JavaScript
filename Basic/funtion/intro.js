function obj() {
    let user2 = {
      nama: "Mateus",
      umur: 20,
      tinggal : "Tangerang"
  };
  console.log(user2);
}
return obj();

function x(ganjgen) {
    if(ganjgen % 2 == 0) {
        console.log("genap");
    }
    else {
        console.log("Ganjil");
    }
}
return x(5);

function durian(obje) {
    var hasil = {}
    hasil.jenis = obje[0];
    hasil.harga = obje[1];
    hasil.enak = obje[2];
    return hasil;
}
console.log(durian(["Mentok","80.000",true]));

function passUrut(str) {
    var passWord = str.length;
    return passWord;
}
function checkUrut(str) {
    var strUrut = passUrut(str);
    if (strUrut >= 5) {
        return "Pass Acceptd";
    }
    else {
        return "Pass must be 5-12 word";
    }
}
console.log(checkUrut("123566gg"));