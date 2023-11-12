import React from 'react';
import KurSatu from '../Property/kursi.png';

const Seet = (props) => {

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
  </div>
  );
}

export default Seet;
