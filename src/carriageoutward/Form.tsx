import React from 'react'
import CommonDropdwon from '../common/CommonDropdown';
import { productService } from '../user/product/ProductService';
import { Form } from 'react-bootstrap';
import { customerservice } from '../user/customer/CustomerService';

function OutwardForm({ FormData, setFormData }: any) {
    let ProductArr: any = [];
    ProductArr = productService.GetData();
    const productoptions = ProductArr.map((pro: any) => ({
        id: pro.id,
        Name: pro.ProductName
    }));

    let CustomerArr: any = [];
    CustomerArr = customerservice.GetData();
    const customeroptions = CustomerArr.map((cus: any) => ({
        id: cus.id,
        Name: cus.CustomerName
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

                    <CommonDropdwon type={customeroptions} label="Customer" name="CustomerID" value={FormData.CustomerID} onChange={InputChange} />
                </Form.Group>


                <Form.Group className="mb-3 mt-3" controlId="formGridQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type='number' placeholder="Quantity" name='OutwardQuantity' value={FormData.OutwardQuantity} onChange={InputChange} />
                </Form.Group>


            </div>


        </div>
    )
}

export default OutwardForm;