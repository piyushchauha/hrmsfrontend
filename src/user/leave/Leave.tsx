import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { leaveservice } from './LeaveService';
// import { designationservice } from '../designation/DesignationService';
import { _employeeService } from '../employee/EmployeeService';

function Leave() {
    const location = useLocation()
    const navigate = useNavigate();
    const [LeaveArr, setLeaveArr] = useState<any[]>([]);
    useEffect(() => {
        setLeaveArr(leaveservice.getData());
    }, [location]);

    // useEffect(() => {
    //     console.log("Leave", LeaveArr);
    // })
    // function GetName(name: any) {
    //     const designationname = designationservice.getDataById(Number(name));
    //     if (designationname) {
    //         return designationname.Name;
    //     }
    //     else {
    //         return '';
    //     }

    // }

    // function getDuration(leave: any) {
    //     const start = new Date(leave.From);
    //     const end = new Date(leave.To);

    //     const duration = end.getTime() - start.getTime();

    //     const millisecond = 1000 * 60 * 60 * 24;
    //     const durationDays = Math.ceil(duration / millisecond);

    //     return durationDays + 1;
    // }
    function getEmployeeName(empname: any) {
        const employeename = _employeeService.getById(Number(empname));
        if (employeename) {
            return employeename.Personal.Name;
        }
        else {
            return '';
        }
    }

    function HandleEdit(emp: any) {
        navigate(`/u/leave/${emp.id}`);
    }

    function HandleDelete(leave: any) {
        console.log("hii");
        if (window.confirm("Are sure you want to delete the leave dat of this employee")) {
            leaveservice.deleteById(leave);
            const filteredData = LeaveArr.filter((emp: any) => emp.id !== leave.id);
            setLeaveArr(filteredData);
        }

    }


    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Leave</h1>
                </div>
                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/leave/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgstyle'><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Leave</span>
                    </Button>
                </div>

            </div>

            <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr className='trclass'>
                            <th>No.</th>
                            <th>Employee Name</th>
                            {/* <th>Designation</th> */}
                            <th>From</th>
                            <th>to</th>
                            <th>Days</th>
                            {/*<th>Duration</th>*/}
                            <th>Reason</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {LeaveArr.map((leave: any, index: number) => (

                            <tr key={index} className='trclass'>

                                <td className='tdclass'>{index + 1}</td>
                                <td className='tdclass'>{getEmployeeName(leave.EmployeeName)}</td>
                                {/* <td className='tdclass'>{GetName(leave.DesignationID)}</td> */}
                                <td className='tdclass'>{leave.From}</td>
                                <td className='tdclass'>{leave.To}</td>
                                <td style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }} >
                                    {leave.Days.map((l: any, i: number) => (
                                        <div style={{ borderBottom: '1px solid #D3D3D3', textAlign: 'left' }} key={i}>
                                            <span > {l.Date}-{l.Days}</span>
                                        </div>
                                    ))}
                                </td>
                                <td className='tdclass'>{leave.Reason}</td>
                                <td className='btnclass'>
                                    <Button variant="primary" style={{ marginRight: '10px' }} onClick={() => HandleEdit(leave)}>Edit</Button>
                                    <Button variant="danger" onClick={() => HandleDelete(leave)}>Delete</Button>
                                </td>
                            </tr>

                        ))}


                    </tbody>
                </Table>


                {/*  */}
            </div>
            <Outlet />
        </div >

    )
}

export default Leave