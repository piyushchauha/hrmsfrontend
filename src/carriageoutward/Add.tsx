import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import OutwardForm from './Form';
import { carriageoutwardService } from './carriageOutwardService';
// import { carriageinwardService } from '../carriageinward/carriageInwardService';
import { stockService } from '../user/Stock/StockService';
import { productService } from '../user/product/ProductService';

function AddCarriageoutward() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [FormData, setFormData] = useState({
        id: Date.now(), ProductID: '', CustomerID: '', OutwardQuantity: ''
    })

    function CheckQuantity() {
        // let InwardArr = carriageinwardService.GetData();
        // let product;
        // for (let i = 0; i < InwardArr.length; i++) {
        //     if (InwardArr[i].ProductID === FormData.ProductID) {
        //         product = InwardArr[i];
        //         break;
        //     }
        // }
        // if (product.InwardQuantity < FormData.OutwardQuantity.padStart(2, "0")) {
        //     alert("Inward Quantity should be less than outward Quantity");
        //     return false;
        // }
        let inwardqty = stockService.getInwardQuantity(FormData.ProductID);
        let outwardqty = stockService.getOutwardQuantity(FormData.ProductID);
        console.log("inwardqty", inwardqty, "outwardqty", outwardqty);
        if (inwardqty < outwardqty) {
            alert("Outward Quantity should be less than inward quantity ");
            console.log("inwardqty", inwardqty, "outwardqty", outwardqty);

            return false;
        }
        return true;
    }

    useEffect(() => {
        if (id !== 'add') {
            const existing = carriageoutwardService.GetById(Number(id));
            if (existing) {
                setFormData(existing);
            }
        }
    }, [id])

    function HandleSave() {


        let product = productService.GetById(Number(FormData.ProductID));

        if (id === 'add') {
            carriageoutwardService.Add(FormData);
            stockService.Add(
                Number(FormData.ProductID),
                product.ProductName,
                // inward ? inward.InwardQuantity : 0,
                stockService.getInwardQuantity(FormData.ProductID),

                // Number(FormData.OutwardQuantity)
                stockService.getOutwardQuantity(FormData.ProductID)

            );

        }
        else {


            carriageoutwardService.Update(FormData);

            stockService.Update(
                Number(FormData.ProductID),
                // product.ProductName,
                // inward ? inward.InwardQuantity : 0,
                stockService.getInwardQuantity(FormData.ProductID),
                // Number(FormData.OutwardQuantity)
                stockService.getOutwardQuantity(FormData.ProductID),
            );
            console.log("OutwardQty", stockService.getOutwardQuantity(FormData.ProductID));
        }
        if (!CheckQuantity()) {
            return;
        }

        navigate('../');

    }
    return (
        <Modal className='modalcontainer' show={true} >
            <Modal.Header className='modalheader'>
                <div className="titleconatiner">
                    <h1 className='headingstyle'>
                        {id === 'add' ? 'Outward Details' : 'Edit Details'}
                    </h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgstyle' onClick={() => navigate('../')}>
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
            </Modal.Header>

            <ModalBody>
                <OutwardForm FormData={FormData} setFormData={setFormData} />
                <div className="davecont" >
                    <Button variant="primary" onClick={HandleSave}>
                        {id === 'add' ? 'Save' : 'Update'}
                    </Button>
                </div>

            </ModalBody>

        </Modal >
    )
}

export default AddCarriageoutward;


































