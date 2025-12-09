import React from 'react'
import Form from 'react-bootstrap/Form'
function CustomerForm({ FormData, setFormData }: any) {
    function InputChange(e: any) {
        setFormData({ ...FormData, [e.target.name]: e.target.value })

    }
    return (
        <div className='supermaincontain'>
            <div className="formcontainer" >
                <Form.Group className="mb-3 mt-3" controlId="formGridName">
                    <Form.Label> Customer Name</Form.Label>
                    <Form.Control type='text' placeholder="Name" name='CustomerName' value={FormData.CustomerName} onChange={InputChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGridShortName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder="Email" name='CustomerEmail' value={FormData.CustomerEmail} onChange={InputChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGridShortName">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control type='tel' placeholder="Mobile No." name='CustomerMobile' value={FormData.CustomerMobile} onChange={InputChange} />
                </Form.Group>

            </div>


        </div>
    )
}

export default CustomerForm;