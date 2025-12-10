import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap';
import ProductForm from './Form';
import { useNavigate, useParams } from 'react-router-dom';
import { productService } from './ProductService';

function AddProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        id: Date.now(), ProductName: '', ProductQuantity: ''
    })
    // useEffect(() => {
    //     console.log(FormData);
    // })
    function HandleSave() {
        if (id === "add") {
            productService.Add(FormData);
        }
        else {

            const updatedData = { ...FormData, id: Number(id) };
            productService.Add(updatedData);

        }
        navigate('../');
    }

    useEffect(() => {
        if (id !== 'add') {
            const existing = productService.GetById(Number(id));
            if (existing) {
                setFormData(existing);
            }
        }

    }, [id])
    return (
        <Modal className='modalcontainer' show={true} >
            <Modal.Header className='modalheader'>
                <div className="titleconatiner">
                    <h1 className='headingstyle'>
                        {id === 'add' ? 'Product Details' : 'Edit Details'}
                    </h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgstyle' onClick={() => navigate('../')}>
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
            </Modal.Header>

            <ModalBody>
                <ProductForm FormData={FormData} setFormData={setFormData} />
                <div className="davecont" >
                    <Button variant="primary" onClick={HandleSave}>{id === 'add' ? 'Save' : 'Update'}</Button>
                </div>

            </ModalBody>

        </Modal >


    )
}

export default AddProduct;