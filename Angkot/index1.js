var penumpang = [];
var seet = document.getElementsByClassName('seet');
penumpang.forEach(function(i) {
	seet.innerHTML = penumpang.join('x');
});

var tambah = function(nama, penumpang) {
	// Chek apakah penumpang kosong
	if (penumpang.length == 0) {
		// maka di tambah penumpang
		penumpang.push(nama);
		// kembalikan nila
		return penumpang
	}
	else {
		// telusuri setiap kursi kosong
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == undefined) {
				penumpang[i] = nama;
				penumpang[i] = document.getElementsByClassName('seet');
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