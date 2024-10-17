import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useConfirm } from "material-ui-confirm";
import PropTypes from "prop-types";

import restApi from "../API/rest";
import ModalTrans from "./LayoutMain/ModalTrans";

function BtnProps (propsme) {
    return (
        <div className="d-flex gap-2 justify-content-start">
            <Button variant="danger" onClick={propsme.propsDel} className="btn btn-sm font-semibold">
                Delete
            </Button>
      </div>
      )
  }
  
BtnProps.propTypes = {
    propsDel: PropTypes.any.isRequired,
}

const TransMain = () => {

    const [customersTrans, setCustomersTrans] = useState([]);
    const [product, setProduct] = useState([]);
    
    const confirm = useConfirm();
    const [showTrans, setShowTrans] = useState(false);
    const [editTrans, setEditTrans] = useState(null);

    const [valNameTrans, setValNameTrans] = useState();
    const [valDateTrans, setValDateTrans] = useState();
    const [valOrderTrans, setValOrderTrans] = useState();
    const [valQtyTrans, setValQtyTrans] = useState();
    const [valTotalTrans, setValTotalTrans] = useState();
    
    const handleShowTrans = () => setShowTrans(true);

    const handleCloseTrans = () => {
        setEditTrans('');   
        setShowTrans(false);
    }

    const apiTrans = async () => {
        const apiCust = await restApi.get('/trans');
        setCustomersTrans(apiCust.data);
        const apiProds = await restApi.get('/products');
        setProduct(apiProds.data);
    }

    const handleInputChangeTrans = (event) => {
        if (event.target.value.length < 10) {
          setValNameTrans(event.target.value);
        }
    };

    
    const handleChaneTranstwo = (event) => { 
        if (event.target.value.length < 30) {
            setValOrderTrans(event.target.value);
        }
    };
    
    const handleChaneTransThree = (event) => {
        if (event.target.value.length < 11) {
            setValDateTrans(event.target.value);
        }
    };

    const handleChaneTransfour = (event) => {
        const val = event.target.value; 
        if (Number(val)) {
            setValQtyTrans(event.target.value);
        }
    }
    
    const addTrans = async () => {
        try {
            // Validasi input
            if (!valNameTrans || !valDateTrans || !valOrderTrans || !valQtyTrans) {
                alert("Semua kolom harus diisi!");
                return;
            }
    
            const sumTotal = product.find(item => item.Name === valOrderTrans); // Pastikan menggunakan `Name` yang sesuai
    
            if (sumTotal) {
                const totalPrice = sumTotal.Harga * valQtyTrans; // Menghitung total harga
                
                // Mengirim data transaksi
                await restApi.post("/trans", {
                    Name: valNameTrans,
                    Date: valDateTrans,
                    Order: valOrderTrans,
                    Quantity: valQtyTrans,
                    Total: totalPrice,
                    Id: `T-00${Date.now().toString().slice(-5)}${Math.floor(Math.random() * 100)}`
                });

                apiTrans(); // Memanggil fungsi untuk mendapatkan data terbaru

                // Mengosongkan input setelah transaksi ditambahkan
                setValNameTrans('');
                setValDateTrans('');
                setValOrderTrans('');
                setValQtyTrans('');
                setValTotalTrans('');

                alert("Data Berhasil Di tambah");
            } 
            else {
                alert("Produk tidak ditemukan!");
            }
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan saat menambahkan transaksi.");
        }
    };
    
    const handleDelTrans = async (id) => {

        confirm({
            title: "Delete Data",
            description: "Delete will be Permanent ",
        })
        .then(async () => {
            try {
                await restApi.delete(`/trans/${id}`);
                setCustomersTrans(customersTrans.filter((Trans) => Trans.id !== id));
            } 
            catch (err) {
                console.error(err.message);
                alert("Delete Failur.");
            }
        })
        .catch(() => {
            console.log("Delete Cancel");
        })
        await apiTrans();
    }

    useEffect(() => {
        apiTrans();
    },[])

    return (
    <>
        <div className="row flex justify-center font-semibold container__Trans mx-auto ">
            <div className="col-mb-3 mb-4">
                <div className=" bg-white font-semibold text-slate-900 p-4 rounded shadow">
                    <h2 className="text-xl container">Transaction</h2>
                <div className="flex gap-2 justify-end border-b border-black pb-3">
                  <Button variant="info" className="btn btn-sm font-semibold" onClick={handleShowTrans}>
                    + New
                  </Button>
                </div>
                    <Table striped responsive className="table text-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Action</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Order</th>
                                <th>Qty</th>
                                <th>Total Pay</th>
                                <th>ID</th>
                            </tr>
                        </thead>
                        <tbody>
                        {customersTrans.map((dataTrans, index) => (
                            <tr key={dataTrans.id}>
                                <td>{index + 1}</td>
                                <td><BtnProps propsDel={() => handleDelTrans(dataTrans.id)}/></td>
                                <td>{dataTrans.Name}</td>
                                <td>{dataTrans.Date}</td>
                                <td>{dataTrans.Order}</td>
                                <td>{dataTrans.Quantity} Kg</td>
                                <td>Rp.{dataTrans.Total.toLocaleString()}</td>
                                <td>T-{dataTrans.id}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        <ModalTrans 
        addTrans={addTrans} handleChaneTransfour={handleChaneTransfour} handleChaneTranstwo={handleChaneTranstwo} handleChaneTransThree={handleChaneTransThree} 
        handleInputChangeTrans={handleInputChangeTrans} showTrans={showTrans} handleShowTrans={handleShowTrans}
        handleCloseTrans={handleCloseTrans} valNameTrans={valNameTrans} valDateTrans={valDateTrans}
        valOrderTrans={valOrderTrans} valQtyTrans={valQtyTrans} valTotalTrans={valTotalTrans}
        editTrans={editTrans}
        />
    </>
    )
}

export default TransMain;