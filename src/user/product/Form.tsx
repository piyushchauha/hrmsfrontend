import React from 'react'
import { Form } from 'react-bootstrap';

function ProductForm({ FormData, setFormData }: any) {
    function InputChange(e: any) {
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }

    return (
        <div className='supermaincontain'>
            <div className="formcontainer" >
                <Form.Group className="mb-3 mt-3" controlId="formGridName">
                    <Form.Label> Product Name</Form.Label>
                    <Form.Control type='text' placeholder="Name" name='ProductName' value={FormData.ProductName} onChange={InputChange} />
                </Form.Group>
                {/* <Form.Group className="mb-3 mt-3" controlId="formGridQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type='number' placeholder="Quantity" name='ProductQuantity' value={FormData.ProductQuantity} onChange={InputChange} />
                </Form.Group> */}


            </div>


        </div>
    )
}

export default ProductForm;