import React from 'react';
import KurSatu from '../Property/kursi.png';

const Seet = (props) => {
<<<<<<< HEAD
  const algo = () => {
    window.alert("Kursi Masih Kosong");
  }
  const handle = () => {
    algo(); // Memanggil fungsi asu saat kursi diklik
    const CobArray = [];
    function tambah(nama,CobArray){
      // Chek apakah penumpang kosong
      if (CobArray.length === 0) {
        // maka di tambah penumpang
        CobArray.push(nama);
        // kembalikan nila
        return CobArray;
      }
  }
}
  // nanti algoritma java nya menggunakan Prop
  return (
    <div className="Area">
    <div className="supir" />
    <img src={KurSatu} alt="Kursi 1" className="kotak1" id='kotak1' onClick={handle} />
    <img src={KurSatu} alt="Kursi 1" className="kotak2" id='kotak2' onClick={handle} />
    <img src={KurSatu} alt="Kursi 1" className="kotak3" id='kotak3'onClick={handle} />
=======

const algo = () => {
  alert("Kursi Masih Kosong");
}

const test = () => {
  var kucing = [];
  function tambah(nama, kucing) {
    if (kucing.length === 0) {
  		// maka di tambah penumpang
  		kucing.push(nama);
  		// kembalikan nila
  		return kucing;
    }
  }
}
return (
  <div className="Area">
  {test()}
  <div className="supir" />
      <img src={KurSatu} alt="Kursi 1" className="kotak1" id='kotak1' onClick={algo} />
      <img src={KurSatu} alt="Kursi 1" className="kotak2" id='kotak2' onClick={algo} />
      <img src={KurSatu} alt="Kursi 1" className="kotak3" id='kotak3' onClick={algo} />
>>>>>>> 8a8a4fccdac4f7a8e65266fdd64371166ec97494
  </div>
  );
}

export default Seet;
