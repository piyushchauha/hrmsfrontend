import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { designationservice } from './DesignationService';

function Designation() {
    const navigate = useNavigate();
    const [DesignationData, setDesignationData] = useState([]);

    useEffect(() => {
        setDesignationData(designationservice.getDesignationData());

    }, []);

    function handleDelete(designation: any) {
        if (window.confirm("Are you sure you want to delete this Manager?")) {
            designationservice.delete(designation);
            const filteredData = designationservice.getDesignationData().filter((des: any) => des.id !== designation.id);
            setDesignationData(filteredData);
            console.log("Designation Data", DesignationData);


        }
    }

    function handleEdit(designation: any) {
        navigate(`/u/designation/adddesignation/${designation.id}`);
    }

    return (
        <div className='maincontainer'>
            <div className='headingcontainer' style={headingcontainer}>
                {/* <Navbar className="bg-body-tertiary" > */}
                {/* <Container style={managercontainer}> */}
                <div className='titlecontainer'>
                    <h1>Designation</h1>
                </div>
                {/* <Navbar.Toggle /> */}
                {/* <Navbar.Collapse className="justify-content-end"> */}
                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" style={addbtn} onClick={() => navigate('/u/designation/adddesignation')}>
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
                        <tr style={trclass}>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Short Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {DesignationData.map((designation: any, des: number) => (
                            <tr key={des} style={trclass}>
                                <td style={tdclass}>{des + 1}</td>
                                <td style={tdclass}>{designation.Name}</td>
                                <td style={tdclass}>{designation.ShortName}</td>
                                <td style={btnclass}>
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
    marginBottom: '50px',
    // paddingTop: '10px',
    justifyContent: 'space-between',
    padding: '40px 40px 10px 40px'
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

