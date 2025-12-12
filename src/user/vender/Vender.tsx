import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { venderservice } from './VenderService';
import CommonTable from '../../common/CommonTable';

function Vender() {
    const location = useLocation();
    const navigate = useNavigate();
    const [VenderArr, setVenderArr] = useState([]);

    useEffect(() => {
        setVenderArr(venderservice.GetData());
    }, [location])

    const Headers = [
        { key: 'No', label: 'No.' },
        { key: 'Name', label: 'Name' },
        { key: 'Email', label: 'Email' },
        { key: 'Mobile', label: 'Mobile' }
    ]

    const tabledata = VenderArr.map((vender: any, ven: any) => ({
        No: ven + 1,
        Name: vender.VenderName,
        Email: vender.VenderEmail,
        Mobile: vender.VenderMobile,
        original: vender,
    }))

    function HandleDelete(vender: any) {
        if (window.confirm("Are you sure you want to delte this record?")) {
            venderservice.Delete(vender);
            setVenderArr(venderservice.GetData());
        }
    }

    function HandleEdit(vender: any) {
        navigate(`/u/vender/${vender.id}`);
    }
    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Vender</h1>
                </div>

                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/vender/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Vender</span>
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
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {VenderArr.map((vender: any, ven: number) => (
                            <tr key={ven} >
                                <td className='tdclass'>{ven + 1}</td>
                                <td className='tdclass'>{vender.VenderName}</td>
                                <td className='tdclass'>{vender.VenderEmail}</td>
                                <td className='tdclass'>{vender.VenderMobile}</td>
                                <td className='btnclass'> <Button variant="primary" style={{ marginRight: '5px' }} onClick={() => HandleEdit(vender)}>Edit</Button>
                                    <Button variant="danger" onClick={() => HandleDelete(vender)}>Delete</Button></td>
                            </tr>

                        ))}

                    </tbody>
                </Table>

            </div> */}
            <Outlet />
        </div>

    )
}

export default Vender;