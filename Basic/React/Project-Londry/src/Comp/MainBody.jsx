import "../assets/style/bodyMe.css"
import MainForm from "./LayoutMain/ListMain";

import { ShoppingCart, User, DollarSign, Trash2, Edit3 } from 'react-feather';
import { useConfirm } from "material-ui-confirm";
import { Table, Button, OverlayTrigger, Tooltip} from "react-bootstrap"
// import { confirmAlert } from "react-confirm-alert";

import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import restApi from "../API/rest";


function TdProps (propsme) {
  return (
        <td className="text-start">    
          <a className="text-green-500" >{propsme.propsId}</a> 
        </td> 
    )
}

function ListProps (propsme) {
  return (
    <td className="d-flex gap-2 justify-content-end">
      <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Delete</Tooltip>}>
        <button onClick={propsme.propsDel} role="button" data-toggle="tooltip" data-placement="top">
          <Trash2 size={20} color="red"/>
        </button>
      </OverlayTrigger>
        <br /> |
        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Edit</Tooltip>}>
          <button onClick={propsme.propsUpdate} role="button">
            <Edit3 size={20} color="grey"/>
          </button>
        </OverlayTrigger>
    </td>
    )
}

function ListCustProps (propsme) {
  return (
    <td className="d-flex gap-2 justify-content-end">
      <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Delete</Tooltip>}>
        <a onClick={propsme.onDelete} role="button" data-toggle="tooltip" data-placement="top">
          <Trash2 size={20} color="red"/>
        </a>
      </OverlayTrigger>
        
        <br /> |

        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Edit</Tooltip>}>
          <button onClick={propsme.propsUpdate} role="button">
            <Edit3 size={20} color="grey"/>
          </button>
        </OverlayTrigger>
    </td>
    )
}

TdProps.propTypes = {
  propsId : PropTypes.string.isRequired
};

ListProps.propTypes = {
  propsDel: PropTypes.any.isRequired,
  propsUpdate: PropTypes.any.isRequired
};

ListCustProps.propTypes = {
  propsDel: PropTypes.func.isRequired,
  propsUpdate: PropTypes.func.isRequired
};
  
const Main = () => {
  const [customers, setCustomers] = useState(['']);
  const [packList, setPackList] = useState(['']);
  const [income, setIncome] = useState(['']);
  
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalCust, setTotalCust] = useState();
  const [totalOrder, setTotalOrder] = useState();
  
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);
  
  const [editCust, setEditCust] = useState(null);
  
  const handleClose3 = () => {
    setEditCust()
    setShow3(false);
    setShow(false);
  }
  const handleEdit = (customer) => {
    setEditCust(customer);
    handleShow3();
  }

  const [editProd, setEditProd] = useState(null);
  
  const handleClose4 = () => {
    setEditProd();
    setShow2(false);
    setShow4(false);
  }

  const handleEditProd = (product) => {
    setEditProd(product)
    handleShow4();
  }
  
  const apiFetch = async () => {
    try {
      const apiProds = await restApi.get('/products');
      setPackList(apiProds.data);
      
      const apiTrans = await restApi.get('/trans');
      setIncome(apiTrans.data);
      
      const apiCusts = await restApi.get('/customers');
      setCustomers(apiCusts.data);
      
    } catch (err) {
      console.error('Erorr Fetch Data ;( ', err);
    }
  }

  const confirm = useConfirm();

  const handleDel = async (id) => {
    confirm({
      title: "Delete Data",
      description: "Delete will be Permanent ",
  })
  .then(async () => {
    try {
       await restApi.delete(`/customers/${id}`);
       setCustomers(customers.filter((item) => item.id !== id));
      } 
      catch (err) {
        console.error(err.message)
      }
  })
  .catch(() => {
    console.log("Delete Cancel");
  })
      await apiFetch();
   }
  
   const handleDelProd = async (id) => {

    confirm({
      title: "Delete Data",
      description: "Delete will be Permanent ",
  })
  .then(async () => {
    try {
       await restApi.delete(`/products/${id}`);
       setPackList(packList.filter((itemProd) => itemProd.id !== id));
      } catch (err) {
        console.error(err.message)
      }
  })
    .catch(() => {
      console.log("Delete Cancel");
    })
      await apiFetch();
   }

  

  const outCust = customers.map((data, index) =>
    <tr key={data.id}>
        <td>{index + 1}</td>
        <td>
            {data.Name}
            <p >{data.Phone}</p>
        </td>
        <TdProps propsId={data.Id}/>
        <td className="text-end">
          <ListCustProps propsUpdate={() => handleEdit(data)} 
          onDelete={() => handleDel(data.id)}/>
        </td>
      </tr>
    );

  const outProd = packList.map((listData, index) =>
    <tr key={listData.id}>
      <td>{index + 1}</td>
        <td colSpan={5}>
          {listData.Name}
           <p>Rp.{listData.Harga}</p>
        </td>
      <ListProps propsDel={() => handleDelProd(listData.id)} 
      propsUpdate={() => handleEditProd(listData)}/>
    </tr>
  );
    
  // const outputInc = income ? income[2] : null kondisi Menampilkan data array
  useEffect(() => {
    const total = income.reduce((acc, data) => acc + data.Total, 0);
    setTotalIncome(total);
  }, [income]);

  useEffect(() => {
    apiFetch()
  },[]);

  useEffect(() => {
    setTotalOrder(income.length);
  },[income]);

  useEffect(() => {
    setTotalCust(customers.length);
  },[customers]);
  

    return (
      <>
           <div className="container font-semibold container__one mx-auto p-3">
              <div className="row flex justify-center">
              <div className="col-md-3 mb-4">
              <div className="flex items-center text-slate-800 p-3 rounded shadow-md bg-white">
                <User size={40} color="white" className="bg-gray-500 rounded-md" />
                <div className="p-3">
                  <h3 className="text-lg">Total Orders</h3>
                  <p className="text-2xl font-normal">{totalOrder}</p>
                </div>
              </div>
              </div>

              <div className="col-md-3">
                  <div className="flex items-center bg-white text-slate-800 p-3 rounded shadow-md">
                    <DollarSign size={40}  color="white" className="bg-green-600 rounded-md" />
                      <div className="p-3">
                        <h3 className="text-lg">Total Income</h3>
                        {/* {outputInc ? (
                          <p className="text-2xl" key={outputInc.No}>Rp.{outputInc.Total}</p>
                        ): (<p>Not Found</p>)} */}
                        <p className="text-2xl font-normal">Rp.{totalIncome.toLocaleString()}</p>
                      </div>
                  </div>
              </div>

              <div className="col-md-3">
                  <div className="flex items-center bg-white text-slate-800 p-3 rounded shadow-md">
                    <div className="bg-yellow-400 h-11 w-11 p-1 rounded-md">
                    <ShoppingCart  size={35} color="white" />
                    </div>
                      <div className="p-3">
                        <h3 className="text-lg">Total Customers</h3>
                        <p className="text-2xl font-normal">{totalCust}</p>
                      </div>
                  </div>
              </div>
            </div>

          <div className="row">
              <div className="col-md-6 mb-4">
              <div className="bg-white font-semibold p-4 rounded shadow">
                <div className="flex justify-end ">
                  
                  <Button variant="info" className="btn btn-sm font-semibold" onClick={handleShow}>
                    New Customers
                  </Button>

                </div>
                <h3 className="text-lg border-b border-gray-500 pb-2 mb-4">List Customers</h3>                  
                  <Table className="flex gap-2 text-sm table-borderless ">
                      <tbody>
                        {outCust}
                      </tbody>
                    </Table>
                </div>
            </div>

            {/* List Loudnry */}
            <div className="col-md-6 mb-4">
                <div className="bg-white font-semibold text-slate-900 p-4 rounded shadow">
                <div className="flex justify-end">
                  <Button variant="info" className="btn btn-sm font-semibold" onClick={handleShow2}>
                    New Products
                  </Button>
                </div>
                        <h3 className="text-lg border-b border-gray-500 pb-2 mb-4">List Laundry</h3>
                      <Table className="h-48 text-sm table table-borderless ">
                          <tbody>
                            {outProd}
                          </tbody>
                      </Table>
                    </div>
                </div>
            </div>
        </div>
        <MainForm show2={show2} show4={show4} show={show} show3={show3}
        handleClose3={handleClose3} handleClose4={handleClose4} editCust={editCust} editProd={editProd}
        setCustomers={setCustomers} setPackList={setPackList}
        handleClose2={handleClose2} handleClose={handleClose}  />

    </>
    )
  }

export default Main