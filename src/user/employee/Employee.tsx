import { Button, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';


function Employee() {

    const navigate = useNavigate();
    return (
        <div className='maincontainer'>
            <div className='headingcontainer' style={{ marginBottom: '50px' }}>
                <Navbar className="bg-body-tertiary" >
                    <Container style={{ padding: '10px' }}>
                        <h1>Employee</h1>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Button variant="primary" size="lg" onClick={() => navigate('/u/employee/addemployee')}>Add Employee</Button>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='tablecontainer'>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <th>No.</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>

                </Table>
            </div>
            <Outlet />
        </div>

    )
}

export default Employee;