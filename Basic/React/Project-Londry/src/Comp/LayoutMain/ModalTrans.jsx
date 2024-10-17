import PropTypes from "prop-types";
import { Button, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";

const ModalTrans = ({ handleChaneTransfour, handleChaneTranstwo, handleChaneTransThree,
                    handleInputChangeTrans, showTrans, valDateTrans, valQtyTrans, addTrans,
                    handleCloseTrans, valNameTrans, valOrderTrans}) => {
    
    return (
        <>
            <Modal show={showTrans} onHide={handleCloseTrans}>
                <ModalHeader closeButton >
                    <ModalTitle>New Transaction</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <FormControl 
                    //   inputName
                    size="md" type="text" placeholder="Input Name" 
                    value={valNameTrans}
                    onChange={handleInputChangeTrans}
                    onKeyDown={(e) => { // Fungsi untuk tekan enter
                        if(e.key === "Enter")
                          addTrans();}}
                    /> <br />

                    <FormControl 
                    //   inputDate
                    size="md" type="text" placeholder="Input Date" 
                    value={valDateTrans}
                    onChange={handleChaneTransThree}
                    onKeyDown={(e) => { // Fungsi untuk tekan enter
                        if(e.key === "Enter")
                          addTrans();}}
                    /> <br />

                    <FormControl 
                    //   inputOrder  
                    size="md" type="text" placeholder="Input Order" 
                    value={valOrderTrans}
                    onChange={handleChaneTranstwo}
                    onKeyDown={(e) => { // Fungsi untuk tekan enter
                        if(e.key === "Enter")
                          addTrans();}}
                    /> <br />
                    <FormControl 
                    //   inputQty 
                    size="md" type="text" placeholder="Input Quantity" 
                    value={valQtyTrans}
                    onChange={handleChaneTransfour}
                    onKeyDown={(e) => { // Fungsi untuk tekan enter
                        if(e.key === "Enter")
                            addTrans();
                        }}
                    /> <br />

                </ModalBody>
                <ModalFooter>
                    <Button  variant="secondary" onClick={handleCloseTrans}>
                        Close
                    </Button>

                    <Button  variant="info" onClick={handleCloseTrans}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

ModalTrans.propTypes = {
    addTrans:PropTypes.func,
    showTrans:PropTypes.bool,
    handleCloseTrans:PropTypes.func,
    handleInputChangeTrans:PropTypes.func,
    handleChaneTransfour:PropTypes.func,
    handleChaneTranstwo: PropTypes.func,
    handleChaneTransThree: PropTypes.func,
    handleShowTrans:PropTypes.func,
    valNameTrans: PropTypes.any,
    valDateTrans: PropTypes.any,
    valOrderTrans:PropTypes.any,
    valQtyTrans: PropTypes.any,
    valTotalTrans: PropTypes.any,
}

export default ModalTrans;