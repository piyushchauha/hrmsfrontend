import { Button, Table } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { _employeeService } from './EmployeeService';
import { useEffect, useState } from 'react';
import { designationservice } from '../designation/DesignationService';
import CommonTable from '../../common/CommonTable';


function Employee() {
    const location = useLocation();
    const [EmployeeArr, setEmployeeArr] = useState([]);

    const Headers = [
        { key: 'No', label: 'No.' },
        { key: 'Full', label: 'Full Name' },
        { key: 'Email', label: 'Email' },
        { key: 'DesignationID', label: 'Designation' },
    ]

    const tabledata = EmployeeArr.map((employee: any, emp: any) => ({
        No: emp + 1,
        Full: employee.Personal.Name,
        Email: employee.Official.Email,
        DesignationID: GetName(employee.Official.DesignationID),
        original: employee
    }))

    useEffect(() => {
        setEmployeeArr(_employeeService.getData());
        console.log("EmployeeArr", EmployeeArr);
    }, [location]);



    function HandleEdit(employee: any) {
        // console.log("Clicked", employee);
        navigate(`/u/employee/${employee.id}`);
    }
    function GetName(DID: any) {

        const designation = designationservice.getDataById(Number(DID));
        if (designation) {
            return designation.Name;
        }

    }

    function HandleDelete(employee: any) {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            _employeeService.delete(employee);
            setEmployeeArr(_employeeService.getData());
            // const filteredData = EmployeeArr.filter((emp: any) => emp.id !== employee.id);
            // setEmployeeArr(filteredData);
            // setEmployeeArr(_employeeService.getData());
            // console.log("Employee Data", EmployeeArr);
            // localStorage.setItem("EmployeeArr", JSON.stringify(filteredData));

        }


    }


    const navigate = useNavigate();
    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Employee</h1>
                </div>
                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/employee/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgstyle'><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Employee</span>
                    </Button>
                </div>

            </div>
            <CommonTable Headers={Headers} data={tabledata} HandleEdit={(row: any) => HandleEdit(row.original)} HandleDelete={(row: any) => HandleDelete(row.original)} />

            {/* </Navbar> */}
            {/* <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr className='trclass'>
                            <th>No.</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody> */}

            {/* {EmployeeArr.map((employee: any, emp: number) => ( */}

            {/* <tr key={emp} className='trclass'> */}
            {/* <td className='tdclass'>{emp + 1}</td> */}
            {/* <td className='tdclass'>{employee.Personal.Name}</td> */}
            {/* <td className='tdclass'>{employee.Email}</td> */}
            {/* <td className='tdclass'>{employee.Mobile}</td> */}
            {/* <td className='tdclass'>{GetName(employee.DesignationID)}</td> */}
            {/* <td className='btnclass'> <Button variant="primary" onClick={() => HandleEdit(employee)} style={{ marginRight: '5px' }}>Edit</Button> */}
            {/* <Button variant="danger" onClick={() => handleDelete(employee)}>Delete</Button></td> */}
            {/* </tr> */}

            {/* ))} */}
            {/* {EmployeeArr.map((employee: any, emp: number) => (

                            <tr key={emp} className='trclass'>
                                <td className='tdclass'>{emp + 1}</td>
                                <td className='tdclass'>{employee.Personal.Name}</td>
                                <td className='tdclass'>{employee.Official.Email}</td>
                                <td className='tdclass'>{employee.Official.Mobile}</td>
                                <td className='tdclass'>{GetName(employee.Official.DesignationID)}</td>
                                <td className='btnclass'> <Button variant="primary" onClick={() => HandleEdit(employee)} style={{ marginRight: '5px' }}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleDelete(employee)}>Delete</Button></td>
                            </tr>

                        ))}
                    </tbody>
                </Table>

            </div> */}
            <Outlet />
        </div >

    )
}

export default Employee;










