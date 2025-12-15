import React from 'react'
import { Button, Table } from 'react-bootstrap'

function CommonTable({ Headers = [], data = [], HandleEdit, HandleDelete, showactions = true }: any) {
    return (
        <div className='tablecontainer'>

            <Table striped bordered hover>
                <thead>
                    <tr className='trclass'>
                        {Headers.map((t: any, index: any) => (
                            <th key={index}>{t.label}</th>
                        ))}
                        {showactions === true && <th>Actions</th>}
                    </tr>
                </thead>
                {/* <tbody> */}
                <tbody>
                    {data.map((row: any, index: any) => (
                        <tr key={index}>
                            {Headers.map((h: any) => (
                                <td className="tdclass" key={h.key}>{row[h.key]}</td>
                            ))}

                            {showactions === true && (<td className='btnclass'>
                                <Button variant="primary" onClick={() => HandleEdit(row)} style={{ marginRight: '5px' }} >
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => HandleDelete(row)}>Delete</Button>
                            </td>
                            )}
                        </tr>

                    ))}
                </tbody>


                {/* </tbody> */}

            </Table>

        </div>
    )
}

export default CommonTable;