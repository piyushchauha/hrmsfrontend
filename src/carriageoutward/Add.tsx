import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import OutwardForm from './Form';
import { carriageoutwardService } from './carriageOutwardService';
import { carriageinwardService } from '../carriageinward/carriageInwardService';

function AddCarriageoutward() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [FormData, setFormData] = useState({
        id: Date.now(), ProductID: '', CustomerID: '', OutwardQuantity: ''
    })

    function CheckQuantity() {
        let InwardArr = carriageinwardService.GetData();
        let product;
        for (let i = 0; i < InwardArr.length; i++) {
            if (InwardArr[i].ProductID === FormData.ProductID) {
                product = InwardArr[i];
                break;
            }
        }
        if (product.InwardQuantity < FormData.OutwardQuantity) {
            alert("Inward Quantity should be less than outward Quantity");
            return false;
        }
        return true;
    }
    useEffect(() => {
        // console.log(FormData);
        if (id !== 'add') {
            const existing = carriageoutwardService.GetById(Number(id));
            if (existing) {
                setFormData(existing);
            }
        }
    }, [id])

    function HandleSave() {

        if (!CheckQuantity()) {
            return;
        }
        if (id === 'add') {
            carriageoutwardService.Add(FormData);
            CheckQuantity();
        }
        else {
            const updatedData = { ...FormData, id: Number(id) };
            carriageoutwardService.Add(updatedData);
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
















