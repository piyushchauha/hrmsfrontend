import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function OfficialDetails({ setOfficialData }: { setOfficialData: React.Dispatch<React.SetStateAction<any>> }) {

  const [FormData, setFormData] = useState({
    code: '', joiningdate: '', mobile: '', email: '', jobtitle: ''
  });

  function InputChange(e: any) {
    setFormData({ ...FormData, [e.target.name]: e.target.value });

    setOfficialData(FormData);
    console.log(FormData);


  }
  // useEffect(() => {
  //   console.log("FormData", FormData);
  // }, [FormData])

  return (
    <div className="officialcontainer" >
      <Row className="mb-1 mt-3">
        <Form.Group as={Col} controlId="formGridcode">
          <Form.Label>Code</Form.Label>
          <Form.Control type="text" placeholder="Code" name="code" value={FormData.code} onChange={InputChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGriddate">
          <Form.Label>Joining Date</Form.Label>
          <Form.Control type="date" name="joiningdate" value={FormData.joiningdate} onChange={InputChange} />
        </Form.Group>
      </Row>
      <Row className="mb-1 mt-3">
        <Form.Group as={Col} controlId="formGridmobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="tel" placeholder="Mobile" name="mobile" value={FormData.mobile} onChange={InputChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridemail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={FormData.email} onChange={InputChange} />
        </Form.Group>
        {/* </Row> */}
        <Form.Group controlId="formGridjobtitle" style={{ marginBottom: '20px' }}>
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Jobtitle" name="jobtitle" value={FormData.jobtitle} onChange={InputChange} />
        </Form.Group>
      </Row>
    </div>

  )
}

export default OfficialDetails;