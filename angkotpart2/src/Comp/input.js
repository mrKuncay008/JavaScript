import React from 'react';

const Input = () => {
  return (
    <div class="tambah">
      <label for="pnp">Memasukan Penumpang </label>
      <input type="text" placeholder="Input Penumpang" id="pnp" one name="Tambah"
      maxlength="4" size="9" />
      <button id="tmbh">Submit</button>
    </div>
  );
}
export default Input
