function checkVal(value) {
    if (value){
        console.log(value, "Adalaha True")
    } else {
        console.log(value, "Adalaha True")
    }
}

// Daftar nilai untuk diuji
const values = 
[0, 1, '', 'text', null, undefined, NaN, [], {}, true, false];

// Memeriksa setiap nilai
values.forEach(checkVal);