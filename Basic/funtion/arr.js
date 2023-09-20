function arrObjt(Bar) {
    var hasil = [];
    var obj = {};

    for (let i = 0; i < Bar.length; i++) {
        obj.Tipe = Bar[i][1];
        obj.Nama = Bar[i][0];
        obj.Harga = Bar[i][2];
        hasil.push(Bar);
        bar = {};
    }
    return hasil;
    console.log(Bar(['Montong','Kuncay','90000']));
}