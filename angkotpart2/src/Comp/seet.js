import React from 'react';
import KurSatu from '../Property/kursi.png';
const Seet = () => {
  // nanti algoritma java nya menggunakan Prop
  return (
  <div className="Area">
    <div className="supir" />
    <img src={KurSatu} alt="Kursi 1" className="kotak1" />
    <img src={KurSatu} alt="Kursi 1" className="kotak2" />
  </div>
  );
}

export default Seet;
