import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function PersonalDetails({ FormData, setFormData }: any) {

  // const [FormData, setFormData] = useState({
  //   Name: '', BirthDate: '', Gender: '',
  //   Contact: { mobile: '', email: '', alternativemobile: '', alternativeemail: '' },
  //   Address: {
  //     Current: { Block: '', Building: '', LandMark: '', PinCode: '' },
  //     Permanent: { PBlock: '', PBuilding: '', PLandMark: '', PPinCode: '' }
  //   }
  // });


  function InputChange(e: any) {

    // if (e.target.name in FormData.Personal.Contact) {
    //   setFormData({
    //     ...FormData,
    //     Contact: {
    //       // ...prev.Contact,
    //       [e.target.name]: e.target.value
    //     }
    //   });
    // }

    if (e.target.name in FormData.Personal.Contact) {
      setFormData({
        ...FormData,
        Personal: {
          ...FormData.Personal,
          Contact: {
            ...FormData.Personal.Contact,
            [e.target.name]: e.target.value,
          }
        }
      })
    }
    // else if (e.target.name in FormData.Personal.Address.Current) {
    //   setFormData({
    //     ...FormData,
    //     Address: {
    //       // ...prev.Address,
    //       ...FormData.Address,
    //       Current: {
    //         // ...prev.Address.Current,
    //         ...FormData.Address.Current,
    //         [e.target.name]: e.target.value
    //       }
    //     }
    //   });
    // }
    else if (e.target.name in FormData.Personal.Address.Current) {
      setFormData({
        ...FormData,
        Personal: {
          ...FormData.Personal,
          Address: {
            ...FormData.Personal.Address,
            Current: {
              ...FormData.Personal.Address.Current,
              [e.target.name]: e.target.value,
            }
          }
        }
      })
    }

    else if (e.target.name in FormData.Personal.Address.Permanent) {
      setFormData({
        ...FormData,
        Personal: {
          ...FormData.Personal,
          Address: {
            ...FormData.Personal.Address,
            Permanent: {
              ...FormData.Personal.Address.Permanent,
              [e.target.name]: e.target.value,
            }
          }
        }
      })
    }
    else {
      setFormData({
        ...FormData,
        Personal: {
          ...FormData.Personal,
          [e.target.name]: e.target.value,
        }
      })

    }
    // console.log(FormData);
    // setPersonalData(FormData);

  }



  return (
    <div className="formcontainer" style={formcontainer}>
      <Form.Group className="mb-3 mt-3" controlId="formGridAddress1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control placeholder="Full name" name='Name' value={FormData.Personal.Name} onChange={InputChange} />
      </Form.Group>
      <div className="d-flex" >
        <Form.Group as={Col} controlId="formGriddate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control type="date" name='BirthDate' value={FormData.Personal.BirthDate} onChange={InputChange} />
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
                  checked={FormData.Personal.Gender === 'male'}
                  onChange={InputChange}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="Gender"
                  id="formHorizontalRadios2"
                  value="female"
                  checked={FormData.Personal.Gender === 'female'}
                  onChange={InputChange}
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="Gender"
                  id="formHorizontalRadios3"
                  value="other"
                  checked={FormData.Personal.Gender === 'other'}
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
            <Form.Control type="tel" placeholder="Mobile" name="mobile" value={FormData.Personal.Contact.mobile} onChange={InputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" value={FormData.Personal.Contact.email} onChange={InputChange} />
          </Form.Group>
        </Row>
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridAlternativeMobile">
            <Form.Label>Alternative Mobile</Form.Label>
            <Form.Control type="tel" placeholder="Mobile" name="alternativemobile" value={FormData.Personal.Contact.alternativemobile} onChange={InputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAlternativeEmail">
            <Form.Label>Alternative Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="alternativeemail" value={FormData.Personal.Contact.alternativeemail} onChange={InputChange} />
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
            <Form.Control type="text" placeholder="No./Block" name='Block' value={FormData.Personal.Address.Current.Block} onChange={InputChange} />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridbuilding">
            <Form.Control
              type="text"
              placeholder="Building Name/Society Name"
              name='Building' value={FormData.Personal.Address.Current.Building} onChange={InputChange}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridlandmark">
            <Form.Control type="text" placeholder="Landmark"
              name='LandMark' value={FormData.Personal.Address.Current.LandMark} onChange={InputChange}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridpincode">
            <Form.Control type="text" placeholder="Pincode"
              name='PinCode' value={FormData.Personal.Address.Current.PinCode} onChange={InputChange}
            />
          </Form.Group>
        </Col>
        <Col md={5} className="mb-3 mt-3 d-grid gap-2">
          <Form.Label>Permanement</Form.Label>
          <Form.Group as={Row} controlId="formGridPBlock">
            <Form.Control type="text" placeholder="No./Block" name='PBlock' value={FormData.Personal.Address.Permanent.PBlock} onChange={InputChange} />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridPbuilding">
            <Form.Control
              type="text"
              placeholder="Building Name/Society Name"
              name='PBuilding' value={FormData.Personal.Address.Permanent.PBuilding} onChange={InputChange}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridPlandmark">
            <Form.Control type="text" placeholder="Landmark" name='PLandMark' value={FormData.Personal.Address.Permanent.PLandMark} onChange={InputChange} />
          </Form.Group>
          <Form.Group as={Row} controlId="formGridPpincode">
            <Form.Control type="text" placeholder="Pincode" name='PPinCode' value={FormData.Personal.Address.Permanent.PPinCode} onChange={InputChange} />
          </Form.Group>
        </Col>
      </div>
      {/* <button onClick={handlesubmit}>click</button> */}
      <Form.Group className="mb-3 " controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Password" name='Password' value={FormData.Password} onChange={InputChange} />
      </Form.Group>
    </div>

  )
}
const formcontainer = {
  width: '100%'
};
const contactline = {
  marginTop: "30px",
};
export default PersonalDetails;