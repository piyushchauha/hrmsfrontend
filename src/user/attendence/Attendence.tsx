import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { _employeeService } from '../employee/EmployeeService';

export function Attendence() {
    const [AttendenceData, setAttendenceData] = useState([]);

    useEffect(() => {
        setAttendenceData(_employeeService.getData());
    }, []);
    return (
        <div className='maincontainer'>
            <div className='headingcontainer' style={headingcontainer}>

                <div className='titlecontainer'>
                    <h1>Attendence</h1>
                </div>
                {/* <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" style={addbtn} onClick={() => navigate('/u/employee/addemployee')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Employee</span>
                    </Button>
                </div> */}

            </div>

            {/* </Navbar> */}
            <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr style={trclass}>
                            <th>No.</th>
                            <th> Name</th>
                            <th>Attendence</th>

                        </tr>
                    </thead>
                    <tbody>
                        {AttendenceData.map((attendence: any, att: number) => (
                            <tr key={att}>
                                <td style={tdclass}>{att + 1}</td>
                                <td style={tdclass}>{attendence.Name}</td>
                                <td style={tdclass}>
                                    <Button variant="success" style={{ marginRight: '10px' }}>Present</Button>
                                    <Button variant="danger">Absent</Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

            </div>
            <Outlet />
        </div >

    )
}

// export default Attendence;
const headingcontainer: any = {
    // display: 'flex',
    // justifyContent: 'space-between',
    padding: '40px 40px 60px 40px'
}
const trclass: any = {
    textAlign: 'center'
}

const tdclass: any = {
    textAlign: 'center',
    verticalAlign: 'middle',
    border: '1px solid #dee2e6'
}