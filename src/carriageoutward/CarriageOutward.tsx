import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { productService } from '../user/product/ProductService';
import { carriageoutwardService } from './carriageOutwardService';
import { customerservice } from '../user/customer/CustomerService';
import CommonTable from '../common/CommonTable';
import { stockService } from '../user/Stock/StockService';

function CarriageOutward() {
    let Headers = [
        { key: 'no', label: 'No.' },
        { key: 'proname', label: 'Product Name' },
        { key: 'custname', label: 'CustomerName' },
        { key: 'outquant', label: 'Outward Quantity' },
    ]

    const location = useLocation();
    const navigate = useNavigate();
    const [OutwardArr, setOutwardArr] = useState([]);

    useEffect(() => {
        setOutwardArr(carriageoutwardService.GetData());
    }, [location])

    let tabledata = OutwardArr.map((outward: any, out: any) => ({
        no: out + 1,
        proname: getProductName(outward.ProductID),
        custname: getCustomerName(outward.CustomerID),
        outquant: outward.OutwardQuantity,
        original: outward,
    }))

    function getProductName(proid: any) {
        const product = productService.GetById(Number(proid));
        if (product) {
            return product.ProductName;
        }
    }

    function getCustomerName(proid: any) {
        const customer = customerservice.GetById(Number(proid));
        if (customer) {
            return customer.CustomerName;
        }
    }
    function HandleDelete(outward: any) {
        // let outwardqty = stockService.getOutwardQuantity(outward.ProductID);
        // console.log(outwardqty);
        // let updatedoutwardqty = outwardqty - outward.OutwardQuantity;
        // console.log(updatedoutwardqty);
        if (window.confirm("Are you sure you want to delete this record>")) {
            let outwardqty = stockService.getOutwardQuantity(outward.ProductID);
            let updatedoutwardqty = outwardqty - outward.OutwardQuantity;
            carriageoutwardService.Delete(outward);
            stockService.Update(
                outward.ProductID,
                // stockService.getOutwardQuantity(outward.ProductID),\
                updatedoutwardqty,
                stockService.getInwardQuantity(outward.ProductID)
            )
            setOutwardArr(carriageoutwardService.GetData());

        }

    }

    function HandleEdit(outward: any) {
        navigate(`/u/carriageoutward/${outward.id}`);
    }

    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Carriage Outward</h1>
                </div>

                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/carriageoutward/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Outward</span>
                    </Button>
                </div>

            </div>
            <CommonTable Headers={Headers} data={tabledata} HandleEdit={(row: any) => HandleEdit(row.original)} HandleDelete={(row: any) => HandleDelete(row.original)} />
            {/* <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr className='trclass'>
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Outward Quantity</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {OutwardArr.map((outward: any, inw: number) => (
                            <tr key={inw} >
                                <td className='tdclass'>{inw + 1}</td>
                                <td className='tdclass'>{getProductName(outward.ProductID)}</td>
                                <td className='tdclass'>{getCustomerName(outward.CustomerID)}</td>
                                <td className='tdclass'>{outward.OutwardQuantity}</td>
                                <td className='btnclass'> <Button variant="primary" onClick={() => HandleEdit(outward)} style={{ marginRight: '5px' }}>Edit</Button>
                                    <Button variant="danger" onClick={() => HandleDelete(outward)}>Delete</Button></td>
                            </tr>

                        ))}

                    </tbody>
                </Table>

            </div> */}
            <Outlet />
        </div>)
}

export default CarriageOutward;