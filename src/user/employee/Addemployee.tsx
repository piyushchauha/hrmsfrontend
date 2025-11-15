import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal, ModalBody } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import NewForm from "./NewForm";
import { _employeeService } from "./EmployeeService";

function AddEmployee() {
  const { id } = useParams();

  const [FormData, setFormData] = useState({
    id: Date.now(),
    Name: '', BirthDate: '', Gender: '', Code: '', JoiningDate: '', Mobile: '', Email: '', DesignationID: '',
    Contact: { mobile: '', email: '', alternativemobile: '', alternativeemail: '' },
    Address: {
      Current: { Block: '', Building: '', LandMark: '', PinCode: '' },
      Permanent: { PBlock: '', PBuilding: '', PLandMark: '', PPinCode: '' }
    },

  });


  useEffect(() => {
    if (id) {
      const existing = _employeeService.getById(Number(id));
      if (existing) {
        setFormData(existing);
      }
    }
  }, [id])

  function handleSave() {
    console.log("Employee FormData", FormData);
    _employeeService.Add(FormData);
    console.log(_employeeService.getData());
    navigate('../');
  }

  const navigate = useNavigate();

  return (

    <Modal style={modalcontainer} show={true} >
      <Modal.Header style={modalheader}>
        <div className="titleconatiner">
          <h1 style={headingstyle}>
            {id ? 'Edit Details' : 'Employee Details'}
          </h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={svgstyle} onClick={() => navigate('../')}>
          <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
      </Modal.Header>

      <ModalBody>
        <div className="subcontainer">
          <div className="uppersec " style={uppersec}>

          </div>
          <NewForm FormData={FormData} setFormData={setFormData} />
          <div className="davecont" >
            <Button variant="primary" onClick={handleSave} >{id ? 'Update' : 'Save'}</Button>
          </div>
        </div>

      </ModalBody>

    </Modal >



  );
}


export default AddEmployee;



const modalheader: any = {
  display: 'flex',
  justifyContent: 'space-between'
}

const modalcontainer: any = {
  maxHeight: '100vh'
}

const headingstyle: any = {
  textAlign: 'center'
}

const uppersec: any = {
  display: 'flex',
  justifyContent: 'space-between'
}

const svgstyle: any = {
  height: '1em',
  width: '1em',
  cursor: 'pointer'

}



































