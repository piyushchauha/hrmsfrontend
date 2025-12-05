import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { designationservice } from './DesignationService';

function Designation() {
    const location=useLocation();
    const navigate = useNavigate();
    const [DesignationArr, setDesignationArr] = useState([]);

    useEffect(() => {
        setDesignationArr(designationservice.getDesignationData());

    }, [location]);


    function handleDelete(designation: any) {
        if (window.confirm("Are you sure you want to delete this Manager?")) {
            designationservice.delete(designation);
            const filteredData = designationservice.getDesignationData().filter((des: any) => des.id !== designation.id);
            setDesignationArr(filteredData);
            console.log("Designation Data", DesignationArr);


        }
    }

    function handleEdit(designation: any) {
        navigate(`/u/designation/${designation.id}`);
    }

    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >
                {/* <Navbar className="bg-body-tertiary" > */}
                {/* <Container style={managercontainer}> */}
                <div className='titlecontainer'>
                    <h1>Designation</h1>
                </div>
                {/* <Navbar.Toggle /> */}
                {/* <Navbar.Collapse className="justify-content-end"> */}
                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/designation/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Designation</span>
                    </Button>
                </div>
                {/* </Navbar.Collapse>
                    </Container>
                </Navbar> */}
            </div>
            <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr className='trclass'>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Short Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {DesignationArr.map((designation: any, des: number) => (
                            <tr key={des} >
                                <td className='tdclass'>{des + 1}</td>
                                <td className='tdclass'>{designation.Name}</td>
                                <td className='tdclass'>{designation.ShortName}</td>
                                <td className='btnclass'>
                                    <Button variant="primary" style={{ marginRight: '10px' }} onClick={() => handleEdit(designation)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleDelete(designation)}>Delete</Button>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </Table>

            </div>
            <Outlet />
        </div>
    )
}

export default Designation;

