import React from 'react';
import KurSatu from '../Property/kursi.png';
const Seet = (props) => {

  const algo = () => {
    window.alert("Kursi Masih Kosong");
  
    // var Penumpang = [];
  
    // var dataPenump = document.getElementById('tambah');
    // var input = document.getElementById('penumpang');
    // var output1 = document.getElementById('kotak1');
    // var output2 = document.getElementById('kotak2'); 
    // var output3 = document.getElementById('kotak3');
  }
  const handle = () => {
    algo(); // Memanggil fungsi asu saat kursi diklik
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
