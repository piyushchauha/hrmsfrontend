import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { customerservice } from './CustomerService';
import CommonTable from '../../common/CommonTable';

function Customer() {
    const navigate = useNavigate();
    const location = useLocation();
    const [CustomerArr, setCustomerArr] = useState([]);

    let Headers = [
        { key: 'No', label: 'No.' },
        { key: 'Name', label: 'Name' },
        { key: 'Email', label: 'Email' },
        { key: 'Mobile', label: 'Mobile No.' },
    ]

    const tabledata = CustomerArr.map((customer: any, cust: any) => ({
        No: cust + 1,
        Name: customer.CustomerName,
        Email: customer.CustomerEmail,
        Mobile: customer.CustomerMobile,
        original: customer,
    }))

    useEffect(() => {
        setCustomerArr(customerservice.GetData());
        // console.log(CustomerArr);
    }, [location])

    function HandleDelete(c: any) {
        if (window.confirm("Are you sure you want to delete this record?")) {
            customerservice.Delete(c);
            setCustomerArr(customerservice.GetData());
            // const FilteredData = CustomerArr.filter((customer: any) => customer.id !== c.id);
            // setCustomerArr(FilteredData);
        }
    }

    function HandleEdit(customer: any) {
        navigate(`/u/customer/${customer.id}`);
    }
    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Customer</h1>
                </div>

                <div className='buttoncontainer'>
                    <Button variant="primary" size="lg" className='addbtn' onClick={() => navigate('/u/customer/add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', verticalAlign: 'middle' }}><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                        <span> Add Customer</span>
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
                            <th>Mobile No.</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {CustomerArr.map((customer: any, cust: number) => (
                            <tr key={cust} >
                                <td className='tdclass'>{cust + 1}</td>
                                <td className='tdclass'>{customer.CustomerName}</td>
                                <td className='tdclass'>{customer.CustomerEmail}</td>
                                <td className='tdclass'>{customer.CustomerMobile}</td>
                                <td className='btnclass'> <Button variant="primary" style={{ marginRight: '5px' }} onClick={() => HandleEdit(customer)}>Edit</Button>
                                    <Button variant="danger" onClick={() => HandleDelete(customer)}>Delete</Button></td>
                            </tr>

                        ))}

                    </tbody>
                </Table>

            </div> */}
            <Outlet />
        </div>
    )
}

export default Customer;