var penumpang = [];

function tambah(nama,penumpang){
	// Chek apakah penumpang kosong
	if (penumpang.length === 0) {
		// maka di tambah penumpang
		penumpang.push(nama);
		// kembalikan nila
		return penumpang
	}
	else {
		// telusuri setiap kursi kosong
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] === undefined) {
<<<<<<< HEAD
				
=======

>>>>>>> 8a8a4fccdac4f7a8e65266fdd64371166ec97494
				penumpang[i] = nama;
			}
			else if (penumpang[i] == nama) {
				console.log(nama + ' Error Sudah Ada !!');
			return penumpang;
			}
			else if(i == penumpang.length - 1) {
				penumpang.push(nama);
			return penumpang;
			}
		}
	}
}
var hapus = function(nama, penumpang) {
	if (penumpang.length == 0) {
		console.log("Angkot Kosong")
	}
	else {
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == nama) {
				penumpang[i] = undefined;
				return penumpang;
			}
			else if (i == penumpang.length - 1) {
				console.log(nama + " Sudah Di apus");
			}
			else {
				console.log(nama + " Sudah Tidak ada di anggkot")
			}
		}
	}
	return penumpang;
}

// var Penumpang = [];
<<<<<<< HEAD

// var dataPenump = document.getElementById('tmbh');
// var input = document.getElementById('pnp');
// var output = document.getElementById('kotak1');
// var output2 = document.getElementById('kotak2'); 
// var output3 = document.getElementById('kotak3');
// var output4 = document.getElementById('kotak4');
// var output5 = document.getElementById('kotak5');
// var output6 = document.getElementById('kotak6'); 
// var isOutput = output;

// dataPenump.addEventListener("click", function () {
// 	 tambahPenump();
// });

=======
//
// var dataPenump = document.getElementById('tmbh');
// var input = document.getElementById('pnp');
// var output = document.getElementById('kotak1');
// var output2 = document.getElementById('kotak2');
// var output3 = document.getElementById('kotak3');
// var output4 = document.getElementById('kotak4');
// var output5 = document.getElementById('kotak5');
// var output6 = document.getElementById('kotak6');
// var isOutput = output;
//
// dataPenump.addEventListener("click", function () {
// 	 tambahPenump();
// });
//
>>>>>>> 8a8a4fccdac4f7a8e65266fdd64371166ec97494
// input.addEventListener("keypress", function(event) {
// 	 if (event.key === "Enter") {
// 		 tambahPenump();
// 	 }
// });
<<<<<<< HEAD

// function tambahPenump() {
//  var nama = input.value;  
=======
//
// function tambahPenump() {
//  var nama = input.value;
>>>>>>> 8a8a4fccdac4f7a8e65266fdd64371166ec97494
//  if (nama === '') {
// 	 window.alert("Masukan nama");
// 	 return;
//  }
// 	 if (nama.trim() !== '') {
// 		 // fungsi tampil
// 		 Penumpang.push(nama);
// 		 tampil(isOutput);
<<<<<<< HEAD

=======
//
>>>>>>> 8a8a4fccdac4f7a8e65266fdd64371166ec97494
// 		 // Ganti output saat ini secara bergantian
// 	 if (isOutput === output) {
// 			 isOutput = output2;
// 		 } else if (isOutput === output2) {
// 			 isOutput = output3;
// 		 } else if (isOutput === output3) {
// 			 isOutput = output4;
// 		 } else if (isOutput === output4) {
// 			 isOutput = output5;
// 		 } else if (isOutput === output5) {
// 			 isOutput = output6;
// 		 } else if (Penumpang.length > 6 ) {
// 			 Penumpang.pop();
// 			 window.alert("Sudah Full");
<<<<<<< HEAD
// 		 } 
// 		 input.value = '';
// 	 }   
//  }

// function tampil(outputElement) {
// 	 outputElement.innerHTML = '';

// 	 Penumpang.forEach(function(nama) {
// 	 var att = document.createAttribute("style");
// 	 att.value = "position: absolute;display: inline-block;width: 20px;height: 20px;border: 7px solid #f56b00;line-height: 100px;text-align: center;background:linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#fff 45%,#fff 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%),linear-gradient(135deg, #f56b00 0%,#f56b00 43%,#fff 45%,#fff 55%,#f56b00 57%,#f56b00 100%);";
// 	 outputElement.setAttributeNode(att); 
//  });
// }
=======
// 		 }
// 		 input.value = '';
// 	 }
//  }
//
// function tampil(outputElement) {
// 	 outputElement.innerHTML = '';
//
// 	 Penumpang.forEach(function(nama) {
// 	 var att = document.createAttribute("style");
// 	 att.value = "position: absolute;display: inline-block;width: 20px;height: 20px;border: 7px solid #f56b00;line-height: 100px;text-align: center;background:linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#fff 45%,#fff 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%),linear-gradient(135deg, #f56b00 0%,#f56b00 43%,#fff 45%,#fff 55%,#f56b00 57%,#f56b00 100%);";
// 	 outputElement.setAttributeNode(att);
//  });
// }
>>>>>>> 8a8a4fccdac4f7a8e65266fdd64371166ec97494
