import React from 'react'
import Form from "react-bootstrap/Form";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommonDropdwon from '../../common/CommonDropdown';
import { designationservice } from '../designation/DesignationService';
function OfficialDetails({ FormData, setFormData }: any) {

  // const [FormData, setFormData] = useState({
  //   code: '', joiningdate: '', mobile: '', email: '', jobtitle: ''
  // });
  let Designation: any = [];
  Designation = designationservice.getDesignationData();
  function InputChange(e: any) {
    setFormData({
      ...FormData,
      Official: {
        ...FormData.Official,
        [e.target.name]: e.target.value,
      }

    })
    // console.log(FormData);
  }

  // useEffect(() => {
  //   console.log("FormData", FormData);
  // }, [FormData])

  return (
    <div className="officialcontainer" >
      <Row className="mb-1 mt-3">
        <Form.Group as={Col} controlId="formGridcode">
          <Form.Label>Code</Form.Label>
          <Form.Control type="text" placeholder="Code" name="Code" value={FormData.Official.Code} onChange={InputChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGriddate">
          <Form.Label>Joining Date</Form.Label>
          <Form.Control type="date" name="JoiningDate" value={FormData.Official.JoiningDate} onChange={InputChange} />
        </Form.Group>
      </Row>
      <Row className="mb-1 mt-3">
        <Form.Group as={Col} controlId="formGridmobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="tel" placeholder="Mobile" name="Mobile" value={FormData.Official.Mobile} onChange={InputChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridemail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="Email" value={FormData.Official.Email} onChange={InputChange} />
        </Form.Group>
        {/* </Row> */}
        <Form.Group controlId="formGridjobtitle" style={{ marginBottom: '20px' }}>
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Jobtitle" name="JobTitle" value={FormData.Official.JobTitle} onChange={InputChange} />
        </Form.Group>
        <div style={{ marginBottom: '15px' }}>
          <CommonDropdwon type={Designation} label="Designation" name="DesignationID" value={FormData.DesignationID} onChange={InputChange} />
        </div>
      </Row>
    </div>

  )
}

export default OfficialDetails;