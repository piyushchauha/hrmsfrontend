import React from 'react'
import Form from "react-bootstrap/Form";

function DesignationForm({ FormData, setFormData }: any) {

    function InputChange(e: any) {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })

    }


    return (
        <div className='supermaincontain'>
            <div className="formcontainer" >
                <Form.Group className="mb-3 mt-3" controlId="formGridName">
                    <Form.Label> Name</Form.Label>
                    <Form.Control placeholder="Name" name='Name' value={FormData.Name} onChange={InputChange} />
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGridShortName">
                    <Form.Label>Short Name</Form.Label>
                    <Form.Control placeholder="Short Name" name='ShortName' value={FormData.ShortName} onChange={InputChange} />
                </Form.Group>

            </div>


        </div>

    )
}

export default DesignationForm;

