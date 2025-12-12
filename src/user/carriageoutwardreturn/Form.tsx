import React from 'react'
import { Form } from 'react-bootstrap';
import { productService } from '../product/ProductService';
import CommonDropdwon from '../../common/CommonDropdown';

function CarriageOutwardreturnform({ FormData, setFormData }: any) {

    let ProductArr: any = [];
    ProductArr = productService.GetData();
    const productoptions = ProductArr.map((pro: any) => ({
        id: pro.id,
        Name: pro.ProductName
    }));


    function InputChange(e: any) {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }
    return (
        <div className='supermaincontain'>
            <div className="formcontainer" >
                <Form.Group className="mb-3 mt-3" controlId="formGridQuantity">

                    <CommonDropdwon type={productoptions} label="Product" name="ProductID" value={FormData.ProductID} onChange={InputChange} />
                </Form.Group>



                <Form.Group className="mb-3 mt-3" controlId="formGridQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type='number' placeholder="Quantity" name='outwardReturnQty' value={FormData.outwardReturnQty} onChange={InputChange} />
                </Form.Group>


            </div>


        </div>
    )
}

export default CarriageOutwardreturnform;