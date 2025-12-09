import React from 'react'
import { Form } from 'react-bootstrap'

function VendorForm({ FormData, setFormData }: any) {

    function InputChange(e: any) {
        setFormData({ ...FormData, [e.target.name]: e.target.value })
    }
    return (
        <div className='supermaincontain'>
            <div className="formcontainer" >
                <Form.Group className="mb-3 mt-3" controlId="formGridName">
                    <Form.Label> Vender Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name='VenderName' value={FormData.VenderName} onChange={InputChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGridShortName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder="Email" name='VenderEmail' value={FormData.VenderEmail} onChange={InputChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGridShortName">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control type='tel' placeholder="Mobile No." name='VenderMobile' value={FormData.VenderMobile} onChange={InputChange} />
                </Form.Group>

            </div>


        </div>
    )
}

export default VendorForm