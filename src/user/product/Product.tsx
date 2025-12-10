import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { productService } from './ProductService';
import CommonTable from '../../common/CommonTable';

function Product() {
    const location = useLocation();
    const navigate = useNavigate();
    const [ProductArr, setProductArr] = useState([]);


    let Headers = [
        { key: 'No', label: 'No.' },
        { key: 'Name', label: 'Name' },
        // { key: 'Quantity', label: 'Quantity' },
    ]

    let tabledata = ProductArr.map((product: any, pro: any) => ({
        No: pro + 1,
        Name: product.ProductName,
        // Quantity: product.ProductQuantity,
        original: product,
    }))
    useEffect(() => {
        setProductArr(productService.GetData());
    }, [location])

    function HandleDelete(p: any) {
        if (window.confirm("Are you sure you want to delete this record>")) {
            productService.Delete(p);
            setProductArr(productService.GetData());

        }

    }

    function HandleEdit(product: any) {
        navigate(`/u/product/${product.id}`);
    }
    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Product</h1>
                </div>

                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/product/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Product</span>
                    </Button>
                </div>

            </div>
            <CommonTable Headers={Headers} data={tabledata} HandleEdit={(row: any) => HandleEdit(row.original)} HandleDelete={(row: any) => HandleDelete(row.original)} />

            {/* <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr className='trclass'>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {ProductArr.map((product: any, pro: number) => (
                            <tr key={pro} >
                                <td className='tdclass'>{pro + 1}</td>
                                <td className='tdclass'>{product.ProductName}</td>
                                <td className='tdclass'>{product.ProductQuantity}</td>
                                <td className='btnclass'> <Button variant="primary" style={{ marginRight: '5px' }} onClick={() => HandleEdit(product)}>Edit</Button>
                                    <Button variant="danger" onClick={() => HandleDelete(product)}>Delete</Button></td>


                            </tr>

                        ))}

                    </tbody>
                </Table>

            </div> */}
            <Outlet />
        </div>
    )
}

export default Product