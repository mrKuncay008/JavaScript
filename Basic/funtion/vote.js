
var vote = ['maspren', 'jon', 'maspren', 'jon'];
countVote(vote);

function countVote(ar) {
	var hasil = {
		maspren: 0,
		jon: 0,
	};
	for (var i = 0; i < ar.length; i++) {
		if (ar[i].toLowerCase() === "maspren") {
			hasil.maspren++;
		}
		else if (ar[i].toLowerCase() === "jon") {
			hasil.jon++;
		}
	}
			console.log(hasil);
}