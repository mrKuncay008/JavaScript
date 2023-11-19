import React from 'react';

const Input = () => {
  // buat algoritma input tambah di sini
  return (
    <div class="tambah">
      <label for="penumpang">Memasukan Penumpang </label>
      <input type="text" placeholder="Input Penumpang" id="penumpang" one name="Tambah"
      maxlength="6" size="9" />
      <button id="tambah">Submit</button>
    </div>
  );
}
export default Input
