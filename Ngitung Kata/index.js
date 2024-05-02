function Hitung_kata() {
    var pesan = document.Formku.pesan.value;
    banyak_kata = pesan.split(" ");
    document.Formku.jumlah.value = banyak_kata.length;
}