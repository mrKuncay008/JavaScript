var penumpang = [document.getElementsByClassName('seet')];
for (var i = 0; i < penumpang.length; i++) {
	penumpang[i].innerHTML = undefined;
}
var tambah = function(nama, penumpang) {
	// Chek apakah penumpang kosong
	if (penumpang.length == 0) {
		// maka di tambah penumpang
		penumpang.push(nama);
		penumpang.innerHTML(nama);
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
	else{
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == nama) {
				penumpang[i] = undefined;
				return penumpang;
			}
			else if (i == penumpang.length - 1) {
				console.log(nama + " Sudah Di apus");
			}
		}
	}
	return penumpang;
}