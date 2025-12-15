import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CommonTable from '../../common/CommonTable';
import { carroutretService } from './carriageoutwardReturnService';
import { productService } from '../product/ProductService';
import { stockService } from '../Stock/StockService';

function CarriageOutwardreturn() {
    const navigate = useNavigate();
    const [outwardRetArr, setoutwardRetArr] = useState([]);
    const location = useLocation();

    function getProductName(proid: any) {
        const product = productService.GetById(Number(proid));
        if (product) {
            return product.ProductName;
        }
    }

    useEffect(() => {
        setoutwardRetArr(carroutretService.GetData());
    }, [location]);


    const Headers = [
        { key: 'No', label: 'No.' },
        { key: 'ProductName', label: 'Product Name' },
        { key: 'outwardReturnQty', label: 'Outward ReturnQty' },
    ]

    const tabledata = outwardRetArr.map((outret: any) => ({
        No: ProductNo(outret.ProductID),
        ProductName: getProductName(outret.ProductID),
        outwardReturnQty: outret.outwardReturnQty,
        original: outret,
    }))

    function ProductNo(ProductID: any) {

        const product = productService.GetData();
        for (let i = 0; i < product.length; i++) {
            if (product[i].id === Number(ProductID)) {
                return i + 1;
            }
        }
    }



    function HandleDelete(outret: any) {
        if (window.confirm("Are you sure you want to delte this record?")) {
            carroutretService.Delete(outret);
            stockService.Update(
                Number(outret.ProductID),
                stockService.getInwardQuantity(outret.ProductID),
                stockService.getOutwardQuantity(outret.ProductID) + Number(outret.outwardReturnQty),
            )
            setoutwardRetArr(carroutretService.GetData());
        }
    }

    function HandleEdit(outret: any) {
        navigate(`/u/carriageoutwardreturn/${outret.id}`);
    }

    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Carriage Outward Return</h1>
                </div>

                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/carriageoutwardreturn/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Return</span>
                    </Button>
                </div>

            </div>
            <CommonTable Headers={Headers} data={tabledata} HandleEdit={(row: any) => HandleEdit(row.original)} HandleDelete={(row: any) => HandleDelete(row.original)} showactions={true} />

            <Outlet />
        </div>
    )
}

export default CarriageOutwardreturn;