import PropTypes from "prop-types"
import { Modal, Button ,Form} from "react-bootstrap"
import restApi from "../../API/rest"
import { useEffect, useState } from "react"

function BtnProps (propsme) {
  return (
    <div className="d-flex gap-2 justify-content-start">
        <Button variant="warning" className="btn btn-sm font-semibold">
            {propsme.propsBtn}
        </Button>
        <Button variant="danger" className="btn btn-sm font-semibold">
            {propsme.propsDel}
        </Button>
  </div>
  )
}

const MainForm = ({show, handleClose, show2, show4, handleClose2, show3
                 ,handleClose3, handleClose4, editCust, editProd, setCustomers, setPackList}) => {
  // const genId = () => {
  //     return `#${Date.now().toString().slice(-5)}${Math.floor(Math.random() * 1000)}`
  //     return <p>cok</p>
  //   }
  const [inputValName, setInputValName] = useState();
  const [inputValPhone, setInputValPhone] = useState();
  const [inputValProd, setInputValProd] = useState();
  const [inputValPrice, setInputValPrice] = useState();

  const handleInputChangeOne = (event) => {
    if (event.target.value.length < 10) {
      setInputValName(event.target.value);
    }
  };

  const handleInputChangeTwo = (event) => {
    const val = event.target.value; 
    if (Number(val)) {
      setInputValPhone(event.target.value);
    }
  };

  const handleInputProdeOne = (event) => {
    if (event.target.value.length < 20) {
      setInputValProd(event.target.value);
    }
  };

  const handleInputProdeTwo = (event) => {
    const val = event.target.value; 
    if (Number(val)) {
      setInputValPrice(event.target.value);
    }
  };

  const apiCust = async() => {
    const apiData = await restApi.get('/customers');
    setCustomers(apiData.data);
  }
  const apiProd = async() => {
    const apiData = await restApi.get('/products');
      setPackList(apiData.data);
  }

  useEffect(() => {
    if (editCust) {
      setInputValName(editCust.Name);
      setInputValPhone(editCust.Phone);
    } else {
      setInputValName('');
      setInputValPhone('');
    }
  }, [editCust]);

  useEffect(() => {
    if (editProd) {
      setInputValProd(editProd.Name);
      setInputValPrice(editProd.Harga);
    } else {
      setInputValProd('');
      setInputValPrice('');
    }
  }, [editProd]);

  const addCust = async () => {
    await restApi.post("/customers", {
      Name: inputValName,
      Phone: inputValPhone,
      Id: `#${Date.now().toString().slice(-5)}${Math.floor(Math.random() * 1000)}`
    });
    window.location.reload()
    apiCust();
    setInputValName('');
    setInputValPhone('');
  }
  const addProd = async () => {
    await restApi.post("/products", {
      Name: inputValProd,
      Harga: inputValPrice,  
    });

    window.location.reload()
    apiProd();
    setInputValProd('');
    setInputValPrice('');
  }

  const handleupd = async() => {
    if (editCust) {
      await restApi.put(`/customers/${editCust.id}`, {
        Name: inputValName,
        Phone: inputValPhone,
        Id:editCust.Id
      });
      apiCust();
      handleClose3();
    }
  }

  const handleUpProd = async() => {
    if (editProd) {
      await restApi.put(`/products/${editProd.id}`, {
        Name: inputValProd,
        Harga: inputValPrice,
      });

      apiProd()
      window.location.reload();
      handleClose4();
    }
  }

  useEffect(() => {
    apiCust();
    apiProd();
  })

    return (
        <>
            {/* -- Modal Customers -- */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Customers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
           size="md" type="text" placeholder="Input Name" value={inputValName} // Untuk mengosongkan string input
           onChange={handleInputChangeOne} // untuk perubahan
           onKeyDown={(e) => { // Fungsi untuk tekan enter
            if(e.key === "Enter")
              addCust();}}
           />
          <br />
          <Form.Control size="md" type="text" placeholder="Input Telephone Number"
            value={inputValPhone}
            onChange={handleInputChangeTwo} // untuk perubahan
            onKeyDown={(e) => { // Fungsi untuk tekan enter
            if(e.key === "Enter")
              addCust();}}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Edit */}

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
           size="md" type="text" placeholder="Input Name" value={inputValName} // Untuk mengosongkan string input
           onChange={handleInputChangeOne} // untuk perubahan
           onKeyDown={(e) => { // Fungsi untuk tekan enter
            if(e.key === "Enter")
              handleupd();}}
           />
          <br />
          <Form.Control size="md" type="text" placeholder="Input Telephone Number"
            value={inputValPhone}
            onChange={handleInputChangeTwo} // untuk perubahan
            onKeyDown={(e) => { // Fungsi untuk tekan enter
            if(e.key === "Enter")
              handleupd();}}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        {/* Modal Table Product */}
      <Modal className="container" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
        <Modal.Title>New Products</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <Form.Control
                size="md" type="text" placeholder="Input Product" value={inputValProd} // Untuk mengosongkan string input
                onChange={handleInputProdeOne} // untuk perubahan
                onKeyDown={(e) => { // Fungsi untuk tekan enter
                  if(e.key === "Enter")
                    addProd();}}
                />
                <br />
                <Form.Control size="md" type="text" placeholder="Input Price Product"
                  value={inputValPrice}
                  onChange={handleInputProdeTwo} // untuk perubahan
                  onKeyDown={(e) => { // Fungsi untuk tekan enter
                  if(e.key === "Enter")
                    addProd();}}
                />
                <br />
              </Modal.Body>
            <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
          Close
        </Button>
          <Button variant="primary" onClick={addProd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal edit Product */}
      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
           size="md" type="text" placeholder="Input Name" 
           value={inputValProd} // Untuk mengosongkan string input
           onChange={handleInputProdeOne} // untuk perubahan
           onKeyDown={(e) => { // Fungsi untuk tekan enter
            if(e.key === "Enter")
              handleUpProd();}}
           />
          <br />
          <Form.Control size="md" type="text" placeholder="Input Price"
            value={inputValPrice}
            onChange={handleInputProdeTwo} // untuk perubahan
            onKeyDown={(e) => { // Fungsi untuk tekan enter
            if(e.key === "Enter")
              handleUpProd();}}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpProd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
MainForm.propTypes = {
  show: PropTypes.bool.isRequired,
  show2: PropTypes.bool.isRequired,
  show3: PropTypes.bool.isRequired,
  show4: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleClose2: PropTypes.func.isRequired,
  handleClose3: PropTypes.func.isRequired,
  handleClose4: PropTypes.func.isRequired,
  editCust: PropTypes.object,
  editProd:PropTypes.object,
  setCustomers: PropTypes.func,
  setPackList: PropTypes.func,
}

BtnProps.propTypes = {
  propsBtn: PropTypes.func.isRequired, 
  propsDel: PropTypes.func.isRequired,
}

export default MainForm