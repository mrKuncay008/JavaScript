// array foreach
var angka = [1,2,3,4,5,6,7,8];

function array1() {
	var tekan = document.getElementById('tekan');
	angka.forEach(function(i) {
		tekan.innerHTML = angka.join('-');
	});
}
function array2() {
	var tekan2 = document.getElementById('tekan2');
	angka.map(function(x) {
	tekan2.innerHTML = angka.join(',')
	return x * 2
	});
}
function array3() {
	var nama = ['kuncay', 'popy', 'mansur', 'oren'];
	var tekan3 = document.getElementById('tekan3');
	var out = '';
	nama.forEach(function(a, i) {
		out += 'Kucing ke- ' + (i + 1) + ' adalah ' + a + '<br>';
	});

	tekan3.innerHTML = out;
}