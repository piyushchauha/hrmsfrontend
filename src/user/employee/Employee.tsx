import { Button, Table } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { _employeeService } from './EmployeeService';
import { useEffect, useState } from 'react';
import { designationservice } from '../manager/DesignationService';


function Employee() {
    const [EmployeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        setEmployeeData(_employeeService.getData());
    }, []);


    function handleEdit(employee: any) {
        // console.log("Clicked", employee);
        navigate(`/u/employee/addemployee/${employee.id}`);
    }
    function getName(DID: any) {

        const designation = designationservice.getDataById(Number(DID));
        if (designation) {
            return designation.Name;
        }

    }

    function handleDelete(employee: any) {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            _employeeService.delete(employee);
            const filteredData = EmployeeData.filter((emp: any) => emp.id !== employee.id);
            setEmployeeData(filteredData);
            // setEmployeeData(_employeeService.getData());
            console.log("Employee Data", EmployeeData);

        }


    }


    const navigate = useNavigate();
    return (
        <div className='maincontainer'>
            <div className='headingcontainer' style={headingcontainer}>

                <div className='titlecontainer'>
                    <h1>Employee</h1>
                </div>
                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" style={addbtn} onClick={() => navigate('/u/employee/addemployee')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Employee</span>
                    </Button>
                </div>

            </div>

            {/* </Navbar> */}
            <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr style={trclass}>
                            <th>No.</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {EmployeeData.map((employee: any, emp: number) => (

                            <tr key={emp} style={trclass}>
                                <td style={tdclass}>{emp + 1}</td>
                                <td style={tdclass}>{employee.Name}</td>
                                <td style={tdclass}>{employee.Email}</td>
                                <td style={tdclass}>{employee.Mobile}</td>
                                <td style={tdclass}>{getName(employee.DesignationID)}</td>
                                <td style={btnclass}> <Button variant="primary" onClick={() => handleEdit(employee)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleDelete(employee)}>Delete</Button></td>
                            </tr>

                        ))}
                    </tbody>
                </Table>

            </div>
            <Outlet />
        </div >

    )
}

export default Employee;
const tdclass: any = {
    textAlign: 'center',
    verticalAlign: 'middle',
    border: '1px solid #dee2e6'
}
const trclass: any = {
    textAlign: 'center'
}

const headingcontainer: any = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px 40px 60px 40px'
}


const btnclass: any = {
    textAlign: 'center',
    display: ' flex',
    justifyContent: 'center',
    columnGap: '10px'
}

const addbtn: any = {
    backgroundColor: '#8E7DAD',
    border: '1px solid #8E7DAD',
}
