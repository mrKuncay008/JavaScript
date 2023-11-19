import React from 'react';
import KurSatu from '../Property/kursi.png';
const Seet = (props) => {
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
  </div>
  );
}

export default Seet;
