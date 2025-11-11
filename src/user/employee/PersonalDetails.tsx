import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function PersonalDetails({ setPersonalData }: { setPersonalData: React.Dispatch<React.SetStateAction<any>> }) {

  const [FormData, setFormData] = useState({
    Name: '', BirthDate: '', Gender: '',
    Contact: { mobile: '', email: '', alternativemobile: '', alternativeemail: '' },
    Address: {
      Current: { Block: '', Building: '', LandMark: '', PinCode: '' },
      Permanent: { PBlock: '', PBuilding: '', PLandMark: '', PPinCode: '' }
    }
  });


  function onInputChange(e: any) {

    if (e.target.name in FormData.Contact) {
      setFormData(prev => ({
        ...prev,
        Contact: {
          ...prev.Contact,
          [e.target.name]: e.target.value
        }
      }));
    }

    else if (e.target.name in FormData.Address.Current) {
      setFormData(prev => ({
        ...prev,
        Address: {
          ...prev.Address,
          Current: {
            ...prev.Address.Current,
            [e.target.name]: e.target.value
          }
        }
      }));
    }

    else if (e.target.name in FormData.Address.Permanent) {
      setFormData(prev => ({
        ...prev,
        Address: {
          ...prev.Address,
          Permanent: {
            ...prev.Address.Permanent,
            [e.target.name]: e.target.value
          }
        }
      }));
    }
    else {
      setFormData({ ...FormData, [e.target.name]: e.target.value })

    }
    // console.log(FormData);
    setPersonalData(FormData);

  }



  return (
    <div className="formcontainer" style={formcontainer}>
      <Form.Group className="mb-3 mt-3" controlId="formGridAddress1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control placeholder="Full name" name='Name' value={FormData.Name} onChange={onInputChange} />
      </Form.Group>
      <div className="d-flex" >
        <Form.Group as={Col} controlId="formGriddate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control type="date" name='BirthDate' value={FormData.BirthDate} onChange={onInputChange} />
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
                  onChange={onInputChange}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="Gender"
                  id="formHorizontalRadios2"
                  value="female"
                  checked={FormData.Gender === 'female'}
                  onChange={onInputChange}
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="Gender"
                  id="formHorizontalRadios3"
                  value="other"
                  checked={FormData.Gender === 'other'}
                  onChange={onInputChange}
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
            <Form.Control type="tel" placeholder="Mobile" name="mobile" value={FormData.Contact.mobile} onChange={onInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" value={FormData.Contact.email} onChange={onInputChange} />
          </Form.Group>
        </Row>
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridMobile">
            <Form.Label>Alternative Mobile</Form.Label>
            <Form.Control type="tel" placeholder="Mobile" name="alternativemobile" value={FormData.Contact.alternativemobile} onChange={onInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Alternative Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="alternativeemail" value={FormData.Contact.alternativeemail} onChange={onInputChange} />
          </Form.Group>
        </Row>
      </div>
      <div style={contactline}>
        ________________________________Address______________________________
      </div>
      <div className="addresscontainer " style={{ display: 'flex', justifyContent: 'center', columnGap: '50px' }}>
        <Col md={5} className="mb-3 mt-3 d-grid gap-2">
          <Form.Label>Current</Form.Label>
          <Form.Group as={Row} controlId="formGridBlock">
            <Form.Control type="text" placeholder="No./Block" name='Block' value={FormData.Address.Current.Block} onChange={onInputChange} />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridbuilding">
            <Form.Control
              type="text"
              placeholder="Building Name/Society Name"
              name='Building' value={FormData.Address.Current.Building} onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridlandmark">
            <Form.Control type="text" placeholder="Landmark"
              name='LandMark' value={FormData.Address.Current.LandMark} onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridpincode">
            <Form.Control type="text" placeholder="Pincode"
              name='PinCode' value={FormData.Address.Current.PinCode} onChange={onInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={5} className="mb-3 mt-3 d-grid gap-2">
          <Form.Label>Permanement</Form.Label>
          <Form.Group as={Row} controlId="formGridBlock">
            <Form.Control type="text" placeholder="No./Block" name='PBlock' value={FormData.Address.Permanent.PBlock} onChange={onInputChange} />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridbuilding">
            <Form.Control
              type="text"
              placeholder="Building Name/Society Name"
              name='PBuilding' value={FormData.Address.Permanent.PBuilding} onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridlandmark">
            <Form.Control type="text" placeholder="Landmark" name='PLandMark' value={FormData.Address.Permanent.PLandMark} onChange={onInputChange} />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridpincode">
            <Form.Control type="text" placeholder="Pincode" name='PPinCode' value={FormData.Address.Permanent.PPinCode} onChange={onInputChange} />
          </Form.Group>
        </Col>
      </div>
      {/* <button onClick={handlesubmit}>click</button> */}
    </div>

  )
}
const formcontainer = {
  // width: "450px",
  width: '100%'
};
const contactline = {
  marginTop: "30px",
};
export default PersonalDetails;