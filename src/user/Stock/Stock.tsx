import React, { useEffect, useState } from 'react'
// import { Table } from 'react-bootstrap';
// import { carriageinwardService } from '../carriageinward/carriageInwardService';
// import { carriageoutwardService } from '../carriageoutward/carriageOutwardService';
import { Outlet } from 'react-router-dom';
// import { productService } from '../product/ProductService';
import { stockService } from './StockService';
import CommonTable from '../../common/CommonTable';
// import { productService } from '../user/product/ProductService';

function Stock() {

    const [StockArr, setStockArr] = useState<any>([]);
    const Headers = [
        { key: 'no', label: 'No.' },
        { key: 'proname', label: 'Product Name' },
        { key: 'inwqty', label: 'Inward Quantity' },
        { key: 'outqty', label: 'Outward Quantity' },
        { key: 'total', label: 'Total' },
    ]

    const tabledata = StockArr.map((stock: any, st: any) => ({
        no: st + 1,
        proname: stock.ProductName,
        inwqty: stock.InwardQuantity,
        outqty: stock.OutwardQuantity,
        total: stock.Total,
    }))

    useEffect(() => {
        // const product = productService.GetData();

        // const Stockdata = product.map((pro: any) => ({
        //     id: Date.now(),
        //     ProductName: pro.ProductName,
        //     InwardQuantity: 0,
        //     OutwardQuantity: 0,
        //     Total: 0
        // }))
        // setStockArr(Stockdata);
        const stockdata = stockService.GetData();
        setStockArr(stockdata);
    }, [])

    // const product = productservice.GetData();
    // const productlist = product.map((m: any) => ({
    //     id: m.id,
    //     ProductName: m.ProductName,
    // }))

    // const inward = carriageinwardService.GetData();
    // const inwardlist = inward.map((i: any) => ({
    //     id: i.id,
    //     InwardQuantity: i.InwardQuantity,
    // }))

    // const outward = carriageoutwardService.GetData();
    // const outwardlist = outward.map((o: any) => ({
    //     id: o.id,
    //     OutwardQuantity: o.OutwardQuantity,
    // }))



    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Stock</h1>
                </div>

            </div>
            <div className='tablecontainer'>

                {/* <Table striped bordered hover>
                    <thead>
                        <tr className='trclass'>
                            <th>No.</th>
                            <th>Product</th>
                            <th>Inward Quantity</th>
                            <th>Outward Quantity</th>
                            <th>Total</th>

                        </tr>
                    </thead>
                    <tbody>
                        {StockArr.map((stock: any, st: number) => (
                            <tr key={st} >
                                <td className='tdclass'>{st + 1}</td>
                                <td className='tdclass'>{stock.ProductName}</td>
                                <td className='tdclass'>{stock.InwardQuantity}</td>
                                <td className='tdclass'>{stock.OutwardQuantity}</td>
                                <td className='tdclass'>{stock.Total}</td>

                            </tr>

                        ))}

                    </tbody>
                </Table> */}
                <CommonTable Headers={Headers} data={tabledata} showactions={false} />
            </div>
            <Outlet />
        </div>)
}

export default Stock;