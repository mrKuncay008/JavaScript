# Dokumentasi Komponen CatsApi

## Deskripsi
Komponen `CatsApi` adalah komponen React yang mengambil data dari The Cat API dan menampilkannya dalam bentuk tabel. Komponen ini menggunakan Axios untuk melakukan permintaan HTTP dan React Bootstrap untuk menampilkan tabel.

## Struktur Kode

### Import
```javascript
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
```

- axios: Digunakan untuk melakukan permintaan HTTP.
- useEffect, useState: Hook dari React untuk mengelola efek samping dan state.
- Table: Komponen dari React Bootstrap untuk membuat tabel.

```js
const CatsApi = () => {
    const [listData, setListData] = useState([]);
}
```
- CatsApi: Nama komponen.
- listData: State untuk menyimpan data kucing yang diambil dari API, diinisialisasi sebagai array kosong.
- setListData: Fungsi untuk mengupdate listData.

```js
const fetchData = async () => {
    try {
        const ApiCat = await axios.get('https://api.thecatapi.com/v1/breeds');
        setListData(ApiCat.data);
    } 
    catch(err) {
        console.error(err);
    }
};

```
- fetchData: Fungsi asinkron untuk mengambil data dari API.
- axios.get: Melakukan permintaan GET ke URL API yang diberikan.
- setListData: Memperbarui state listData dengan data yang diterima dari API.
- catch: Menangani error jika permintaan gagal.

```js
useEffect (() => {
    fetchData();
}, []);
```

- useEffect: Hook yang digunakan untuk menjalankan efek samping (di sini, untuk mengambil data saat komponen pertama kali dimuat).
- Array kosong [] sebagai dependensi memastikan bahwa fetchData hanya dipanggil satu kali saat komponen pertama kali dirender.

## Proptyep Validation
Fitur dari react yang digunakan untuk mengvalidasi terhadap props untuk memastikan tipe data yang benar dan terhindar dari bugs. 
- Validasi Tipe Data: Memastikan bahwa props yang diterima sesuai dengan tipe data yang diharapkan (misalnya, string, number, array, dll.). 

```bash
npm install prop-types

import PropTypes from 'prop-types';

```
# Horder Component
