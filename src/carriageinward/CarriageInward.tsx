import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { carriageinwardService } from './carriageInwardService';
import { productService } from '../user/product/ProductService';
import { venderservice } from '../user/vender/VenderService';
import CommonTable from '../common/CommonTable';

function CarriageInward() {
    const location = useLocation();
    const navigate = useNavigate();
    const [InwardArr, setInwardArr] = useState([]);

    const Headers = [
        { key: 'No', label: 'No.' },
        { key: 'proname', label: 'Product Name' },
        { key: 'venname', label: 'Vender Name' },
        { key: 'inwqty', label: 'Inward Quantity' },
    ]

    useEffect(() => {
        setInwardArr(carriageinwardService.GetData());
    }, [location])


    let tabledata = InwardArr.map((inward: any, inw: any) => ({
        No: inw + 1,
        proname: getProductName(inward.ProductID),
        venname: getVenderName(inward.VenderID),
        inwqty: inward.InwardQuantity,
        original: inward,

    }))

    function getProductName(proid: any) {
        const product = productService.GetById(Number(proid));
        if (product) {
            return product.ProductName;
        }
    }

    function getVenderName(proid: any) {
        const vender = venderservice.GetById(Number(proid));
        if (vender) {
            return vender.VenderName;
        }
    }
    function HandleDelete(inward: any) {
        if (window.confirm("Are you sure you want to delete this record>")) {
            carriageinwardService.Delete(inward);
            setInwardArr(carriageinwardService.GetData());

        }

    }

    function HandleEdit(inward: any) {
        navigate(`/u/carriageinward/${inward.id}`);
    }

    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Carriage Inward</h1>
                </div>

                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/carriageinward/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Inward</span>
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
                            <th>Vender Name</th>
                            <th>Inward Quantity</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {InwardArr.map((inward: any, inw: number) => (
                            <tr key={inw} >
                                <td className='tdclass'>{inw + 1}</td>
                                <td className='tdclass'>{getProductName(inward.ProductID)}</td>
                                <td className='tdclass'>{getVenderName(inward.VenderID)}</td>
                                <td className='tdclass'>{inward.InwardQuantity}</td>
                                <td className='btnclass'> <Button variant="primary" onClick={() => HandleEdit(inward)} style={{ marginRight: '5px' }}>Edit</Button>
                                    <Button variant="danger" onClick={() => HandleDelete(inward)}>Delete</Button></td>


                            </tr>

                        ))}

                    </tbody>
                </Table>

            </div> */}
            <Outlet />
        </div>)
}

export default CarriageInward