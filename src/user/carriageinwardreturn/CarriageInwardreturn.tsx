import React, { use, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CommonTable from '../../common/CommonTable';
import { carrinretService } from './carriageinwardReturnService';
import { productService } from '../product/ProductService';
import { stockService } from '../Stock/StockService';

function CarriageInwardreturn() {
    const navigate = useNavigate();
    const location = useLocation();

    const [inwardRetArr, setinwardRetArr] = useState([]);

    useEffect(() => {
        setinwardRetArr(carrinretService.GetData());
    }, [])
    function getProductName(proid: any) {
        const product = productService.GetById(Number(proid));
        if (product) {
            return product.ProductName;
        }
    }
    useEffect(() => {
        setinwardRetArr(carrinretService.GetData());
    }, [location]);


    const Headers = [
        { key: 'No', label: 'No.' },
        { key: 'ProductName', label: 'Product Name' },
        { key: 'InwardReturnQty', label: 'Inward ReturnQty' },
    ]

    const tabledata = inwardRetArr.map((inret: any, int: any) => ({
        No: ProductNo(inret.ProductID),
        ProductName: getProductName(inret.ProductID),
        InwardReturnQty: inret.inwardReturnQty,
        original: inret,
    }))

    function ProductNo(ProductID: any) {

        const product = productService.GetData();
        for (let i = 0; i < product.length; i++) {
            if (product[i].id === Number(ProductID)) {
                return i + 1;
            }
        }
    }


    function HandleDelete(inret: any) {
        if (window.confirm("Are you sure you want to delete this record?")) {
            carrinretService.Delete(inret);
            stockService.Update(
                Number(inret.ProductID),
                stockService.getInwardQuantity(inret.ProductID) + Number(inret.inwardReturnQty),

                stockService.getOutwardQuantity(inret.ProductID),
            )
            setinwardRetArr(carrinretService.GetData());
        }
    }

    function HandleEdit(inret: any) {
        navigate(`/u/carriageinwardreturn/${inret.id}`);
    }

    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Carriage Inward Return</h1>
                </div>

                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/carriageinwardreturn/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Return</span>
                    </Button>
                </div>

            </div>
            <CommonTable Headers={Headers} data={tabledata} HandleEdit={(row: any) => HandleEdit(row.original)} HandleDelete={(row: any) => HandleDelete(row.original)} />

            <Outlet />
        </div>
    )
}

export default CarriageInwardreturn;