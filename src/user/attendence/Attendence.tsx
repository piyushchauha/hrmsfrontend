import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Table } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { _employeeService } from '../employee/EmployeeService';

export function Attendence() {
    const [AttendenceData, setAttendenceData] = useState<any[]>([]);
    const [AttData, setAttData] = useState<any[]>([]);
    const [FilteredDate, setFilteredDate] = useState('');
    const attendencestore = JSON.stringify(AttData);
    localStorage.setItem("Attendence", attendencestore);

    function date() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = (today.getMonth() + 1);
        const dd = (today.getDate());

        return `${yyyy}-${mm}-${dd}`;
        // return `${dd}-${mm}-${yyyy}`;
    }

    function converteddate() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = (today.getMonth() + 1);
        const dd = (today.getDate());

        // today.setDate(today.getDate() + 5);

        // return `${yyyy}-${mm}-${dd}`;
        return `${dd}-${mm}-${yyyy}`;
    }

    // console.log(new Date().toLocaleDateString('en-US'));

    function getName(attendname: any) {

        const employee = _employeeService.getById(Number(attendname));
        if (employee) {
            return employee.Name;
        }

    }

    let filtereddata = [];

    for (let i = 0; i < AttendenceData.length; i++) {
        let emp = AttendenceData[i];
        let marked = false;

        for (let j = 0; j < AttData.length; j++) {

            if (AttData[j].Name === emp.id && FilteredDate === AttData[j].Date) {
                marked = true;
                break;
            }
        }
        if (!marked) {
            filtereddata.push(emp);
        }


    }

    function handleFilter(e: any) {
        let selected = e.target.value;

        setFilteredDate(selected);
        console.log("selected", selected);
    }

    function handleattendence(status: any, employee: any) {
        const cdate = date();
        // const emp = getName(employee);
        // console.log('emp.id', employee.id);
        for (let i = 0; i < AttData.length; i++) {
            // console.log('employee', employee);
            if (AttData[i].Name === employee && AttData[i].Date === cdate) {

                return;
            }
        }

        const attdata = {
            id: Date.now(),
            Date: cdate,
            Name: employee,
            Attendence: status
        }

        setAttData([...AttData, attdata]);
    }
    useEffect(() => {
        console.log(AttData);
    }, [AttData])

    useEffect(() => {
        setAttendenceData(_employeeService.getData());
        // console.log(AttendenceData);
    }, []);


    useEffect(() => {

    }, []);
    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Attendence</h1>
                </div>

            </div>
            <div className='filtercontainer' style={{ border: '1px solid #f5f5f5', height: '80px', width: '100%', marginBottom: '50px', backgroundColor: '#f5f5f5' }}>
                <div className='subfiltercontainer' style={{ display: 'flex', width: '50%', columnGap: '20px' }}>
                    <Form.Group as={Col} controlId="formGriddate" >
                        <Form.Label>From</Form.Label>
                        <Form.Control type="date" name='from' value={FilteredDate} onChange={handleFilter} />
                    </Form.Group>

                </div>
            </div>
            <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr className='trclass'>
                            <th>No.</th>
                            <th>Date</th>
                            <th> Name</th>
                            <th>Attendence</th>

                        </tr>
                    </thead>
                    <tbody>
                        {filtereddata.map((attendence: any, att: number) => (
                            <tr key={att}>
                                <td className='tdclass'>{att + 1}</td>
                                <td className='tdclass'>{/*attendence.Date*/}{converteddate()}</td>
                                <td className='tdclass'>{getName(attendence.id)}</td>
                                <td className='tdclass'>
                                    <Button variant="success" style={{ marginRight: '10px' }} onClick={() => handleattendence('Present', attendence.id)}>Present</Button>
                                    <Button variant="danger" onClick={() => handleattendence('Absent', attendence.id)}>Absent</Button>
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
