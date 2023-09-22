function hitungVokal(string) {
  let vokal = 'aiueo';
  let countVokal = {};

  // Inisialisasi objek countVokal dengan nilai awal 0 untuk setiap huruf vokal
  for (var i = 0; i < vokal.length; i++) {
    countVokal[vokal[i]] = 0;
  }

  for (var i = 0; i < string.length; i++) {
    let huruf = string[i].toLowerCase();
    if (vokal.indexOf(huruf) !== -1) {
      countVokal[huruf]++;
    }
  }

  return countVokal;
}

var kalimat = "Selamat Pagi Indonesia";
console.log("Kalimat: " + kalimat);
console.log("Jumlah Huruf Vokal:");
console.log("---------------------");

var hasilHitung = hitungVokal(kalimat);
for (var huruf in hasilHitung) {
  console.log(huruf + ": " + hasilHitung[huruf]);
}

var total = Object.values(hasilHitung).reduce((a, b) => a + b, 0);
console.log("Total: " + total);