import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import InwardForm from './Form';
import { carriageinwardService } from './carriageInwardService';
import { productService } from '../product/ProductService';
import { stockService } from '../Stock/StockService';
// import { stockService } from '../user/Stock/StockService';
// import { productService } from '../user/product/ProductService';
// import { carrinretService } from '../user/carriageinwardreturn/carriageinwardReturnService';
// import { carroutretService } from '../user/carriageoutwardreturn/carriageoutwardReturnService';
// import { venderservice } from '../user/vender/VenderService';
// import { carriageoutwardService } from '../carriageoutward/carriageOutwardService';

function AddCarriageinward() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [FormData, setFormData] = useState({
        id: Date.now(), ProductID: '', VenderID: '', InwardQuantity: ''
    })

    useEffect(() => {
        // console.log(FormData);
        if (id !== 'add') {
            const existing = carriageinwardService.GetById(Number(id));
            if (existing) {
                setFormData(existing);
            }
        }
    }, [id])

    // useEffect(() => {


    // console.log(carrinretService.GetData());
    // console.log("ghj", [product.id]);
    // let inw = carrinretService.GetById(FormData.ProductID);
    // let out = carroutretService.GetById(FormData.ProductID);
    // let preInwardReturnQty = inw ? inw.inwardReturnQty : 0;
    // let preOutwardReturnQty = out ? out.outwardReturnQty : 0;
    // console.log("preInwardReturnQty", preInwardReturnQty, "preOutwardReturnQty", preOutwardReturnQty);
    // }, []);


    // useEffect(() => {
    //     let inw = carrinretService.GetById(FormData.ProductID);
    //     console.log("inw", inw);
    //     let out = carroutretService.GetById(FormData.ProductID);
    //     console.log("out", out);
    //     let preInwardReturnQty = inw ? inw.inwardReturnQty : 0;
    //     let preOutwardReturnQty = out ? out.outwardReturnQty : 0;

    //     console.log("preinward", preInwardReturnQty, "preoutward", preOutwardReturnQty);
    // }, [])
    function HandleSave() {



        let product = productService.GetById(Number(FormData.ProductID));
        // let outward = carriageoutwardService.GetData().find((o: any) => o.ProductID === FormData.ProductID)

        if (id === 'add') {

            carriageinwardService.Add(FormData);


            stockService.Add(
                Number(FormData.ProductID),
                product.ProductName,
                // Number(FormData.InwardQuantity),
                stockService.getInwardQuantity(FormData.ProductID),
                // outward ? outward.OutwardQuantity : 0
                stockService.getOutwardQuantity(FormData.ProductID),

            );

        }
        else {

            carriageinwardService.Update(FormData);

            stockService.Update(
                Number(FormData.ProductID),
                // Number(FormData.InwardQuantity),
                stockService.getInwardQuantity(FormData.ProductID),
                // outward ? outward.OutwardQuantity : 0
                stockService.getOutwardQuantity(FormData.ProductID),
            );

            console.log("InwardQty", stockService.getInwardQuantity(FormData.ProductID));

        }

        navigate('../');
    }


    return (
        <Modal className='modalcontainer' show={true} >
            <Modal.Header className='modalheader'>
                <div className="titleconatiner">
                    <h1 className='headingstyle'>
                        {id === 'add' ? 'Inward Details' : 'Edit Details'}
                    </h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgstyle' onClick={() => navigate('../')}>
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
            </Modal.Header>

            <ModalBody>
                <InwardForm FormData={FormData} setFormData={setFormData} />
                <div className="davecont" >
                    <Button variant="primary" onClick={HandleSave}>
                        {id === 'add' ? 'Save' : 'Update'}
                    </Button>
                </div>

            </ModalBody>

        </Modal >
    )
}

export default AddCarriageinward;


















