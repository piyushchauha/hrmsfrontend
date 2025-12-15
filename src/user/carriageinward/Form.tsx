import React from 'react'
// import CommonDropdwon from '../common/CommonDropdown';
// import { productService } from '../user/product/ProductService';
// import { venderservice } from '../user/vender/VenderService';
import { Form } from 'react-bootstrap';
import { productService } from '../product/ProductService';
// import { venderservice } from '../vender/VenderService';
import CommonDropdwon from '../../common/CommonDropdown';
import { venderservice } from '../vender/VenderService';

function InwardForm({ FormData, setFormData }: any) {
    let ProductArr: any = [];
    ProductArr = productService.GetData();
    const productoptions = ProductArr.map((pro: any) => ({
        id: pro.id,
        Name: pro.ProductName
    }));

    let VenderArr: any = [];
    VenderArr = venderservice.GetData();
    const venderoptions = VenderArr.map((ven: any) => ({
        id: ven.id,
        Name: ven.VenderName
    }))

    function InputChange(e: any) {
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }
    return (
        <div className='supermaincontain'>
            <div className="formcontainer" >
                <Form.Group className="mb-3 mt-3" controlId="formGridQuantity">

                    <CommonDropdwon type={productoptions} label="Product" name="ProductID" value={FormData.ProductID} onChange={InputChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGridQuantity">

                    <CommonDropdwon type={venderoptions} label="Vender" name="VenderID" value={FormData.VenderID} onChange={InputChange} />
                </Form.Group>


                <Form.Group className="mb-3 mt-3" controlId="formGridQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type='number' placeholder="Quantity" name='InwardQuantity' value={FormData.InwardQuantity} onChange={InputChange} />
                </Form.Group>


            </div>


        </div>
    )
}

export default InwardForm;