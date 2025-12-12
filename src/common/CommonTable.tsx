import React from 'react'
import { Button, Table } from 'react-bootstrap'

function CommonTable({ Headers = [], data = [], HandleEdit, HandleDelete }: any) {
    return (
        <div className='tablecontainer'>

            <Table striped bordered hover>
                <thead>
                    <tr className='trclass'>
                        {Headers.map((t: any, index: any) => (
                            <th key={index}>{t.label}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* <tbody> */}
                <tbody>
                    {data.map((row: any, index: any) => (
                        <tr key={index}>
                            {Headers.map((h: any) => (
                                <td className="tdclass" key={h.key}>{row[h.key]}</td>
                            ))}

                            <td className='btnclass'>
                                <Button variant="primary" onClick={() => HandleEdit(row)} style={{ marginRight: '5px' }} >
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => HandleDelete(row)}>Delete</Button>
                            </td>
                        </tr>

                    ))}
                </tbody>


                {/* </tbody> */}
                {/* <tbody>
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
    
                        </tbody> */}
            </Table>

        </div>
    )
}

export default CommonTable;