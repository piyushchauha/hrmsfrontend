import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { designationservice } from '../manager/DesignationService';
// import Designation from '../manager/Designation';


function NewForm({ FormData, setFormData }: any) {

    const [designation, setDesignationData] = useState([]);

    useEffect(() => {
        setDesignationData(designationservice.getDesignationData());

    }, [])


    function InputChange(e: any) {

        if (e.target.name in FormData.Contact) {
            setFormData({
                ...FormData,
                Contact: {
                    ...FormData.Contact,
                    [e.target.name]: e.target.value
                }
            });
        }

        else if (e.target.name in FormData.Address.Current) {
            setFormData({
                ...FormData,
                Address: {
                    ...FormData.Address,
                    Current: {
                        ...FormData.Address.Current,
                        [e.target.name]: e.target.value
                    }
                }
            });
        }

        else if (e.target.name in FormData.Address.Permanent) {
            setFormData({
                ...FormData,
                Address: {
                    ...FormData.Address,
                    Permanent: {
                        ...FormData.Address.Permanent,
                        [e.target.name]: e.target.value
                    }
                }
            });
        }
        else {
            setFormData({ ...FormData, [e.target.name]: e.target.value })

        }
    }
    return (
        <div className='supermaincontain'>
            <div className="formcontainer" style={formcontainer}>
                <Form.Group className="mb-3 mt-3" controlId="formGridAddress1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control placeholder="Full name" name='Name' value={FormData.Name} onChange={InputChange} />
                </Form.Group>
                <div className="d-flex" >
                    <Form.Group as={Col} controlId="formGriddate">
                        <Form.Label>Birth Date</Form.Label>
                        <Form.Control type="date" name='BirthDate' value={FormData.BirthDate} onChange={InputChange} />
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} className="mb-0" style={{ display: 'table-cell' }}>
                            <Form.Label as="legend" column sm={2}>
                                Gender
                            </Form.Label>
                            <Col sm={10}>
                                <div className="d-flex">
                                    <Form.Check
                                        type="radio"
                                        label="Male"
                                        name="Gender"
                                        id="formHorizontalRadios1"
                                        value="male"
                                        checked={FormData.Gender === 'male'}
                                        onChange={InputChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Female"
                                        name="Gender"
                                        id="formHorizontalRadios2"
                                        value="female"
                                        checked={FormData.Gender === 'female'}
                                        onChange={InputChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Other"
                                        name="Gender"
                                        id="formHorizontalRadios3"
                                        value="other"
                                        checked={FormData.Gender === 'other'}
                                        onChange={InputChange}
                                    />
                                </div>
                            </Col>
                        </Form.Group>
                    </fieldset>
                </div>

                <div style={contactline}>
                    _______________________________Contacts______________________________
                </div>
                <div className="contactcontainer">
                    <Row className="mb-1 mt-3">
                        <Form.Group as={Col} controlId="formGridMobile">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="tel" placeholder="Mobile" name="mobile" value={FormData.Contact.mobile} onChange={InputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" value={FormData.Contact.email} onChange={InputChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 mt-3">
                        <Form.Group as={Col} controlId="formGridMobile">
                            <Form.Label>Alternative Mobile</Form.Label>
                            <Form.Control type="tel" placeholder="Mobile" name="alternativemobile" value={FormData.Contact.alternativemobile} onChange={InputChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Alternative Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="alternativeemail" value={FormData.Contact.alternativeemail} onChange={InputChange} />
                        </Form.Group>
                    </Row>
                </div>
                <div style={contactline}>
                    ________________________________Address______________________________
                </div>
                <div className="addresscontainer " style={addresscontainer}>
                    <Col md={5} className="mb-3 mt-3 d-grid gap-2">
                        <Form.Label>Current</Form.Label>
                        <Form.Group as={Row} controlId="formGridBlock">
                            <Form.Control type="text" placeholder="No./Block" name='Block' value={FormData.Address.Current.Block} onChange={InputChange} />
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridbuilding">
                            <Form.Control
                                type="text"
                                placeholder="Building Name/Society Name"
                                name='Building' value={FormData.Address.Current.Building} onChange={InputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridlandmark">
                            <Form.Control type="text" placeholder="Landmark"
                                name='LandMark' value={FormData.Address.Current.LandMark} onChange={InputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridpincode">
                            <Form.Control type="text" placeholder="Pincode"
                                name='PinCode' value={FormData.Address.Current.PinCode} onChange={InputChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={5} className="mb-3 mt-3 d-grid gap-2">
                        <Form.Label>Permanement</Form.Label>
                        <Form.Group as={Row} controlId="formGridBlock">
                            <Form.Control type="text" placeholder="No./Block" name='PBlock' value={FormData.Address.Permanent.PBlock} onChange={InputChange} />
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridbuilding">
                            <Form.Control
                                type="text"
                                placeholder="Building Name/Society Name"
                                name='PBuilding' value={FormData.Address.Permanent.PBuilding} onChange={InputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridlandmark">
                            <Form.Control type="text" placeholder="Landmark" name='PLandMark' value={FormData.Address.Permanent.PLandMark} onChange={InputChange} />
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGridpincode">
                            <Form.Control type="text" placeholder="Pincode" name='PPinCode' value={FormData.Address.Permanent.PPinCode} onChange={InputChange} />
                        </Form.Group>
                    </Col>
                </div>
                {/* <button onClick={handlesubmit}>click</button> */}
            </div>

            <div className="officialcontainer" >
                <Row className="mb-1 mt-3">
                    <Form.Group as={Col} controlId="formGridcode">
                        <Form.Label>Code</Form.Label>
                        <Form.Control type="text" placeholder="Code" name="Code" value={FormData.Code} onChange={InputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGriddate">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control type="date" name="JoiningDate" value={FormData.JoiningDate} onChange={InputChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-1 mt-3">
                    <Form.Group as={Col} controlId="formGridmobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="tel" placeholder="Mobile" name="Mobile" value={FormData.Mobile} onChange={InputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridemail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="Email" value={FormData.Email} onChange={InputChange} />
                    </Form.Group>
                    <Form.Group controlId="formGridjobtitle" style={{ marginBottom: '20px' }}>
                        {/* {/* <Form.Label>Job Title</Form.Label> */}
                        {/* <Form.Control type="text" placeholder="Jobtitle" name="JobTitle" value={FormData.JobTitle} onChange={InputChange} /> */}
                        <Form.Label>Designation</Form.Label>
                        <Form.Select aria-label="Default select example" name="DesignationID" value={FormData.DesignationID} onChange={InputChange}>
                            <option>Select Designation</option>
                            {designation.map((des: any, index: number) => (
                                <option key={index} value={des.id} id={des.id}>{des.Name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>
            </div>
        </div>

    )
}

export default NewForm;

const formcontainer = {
    // width: "450px",
    width: '100%'
};
const contactline = {
    marginTop: "30px",
};

const addresscontainer = {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '50px'
}