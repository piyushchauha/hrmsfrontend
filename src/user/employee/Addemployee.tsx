import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OfficialDetails from "./OfficialDetails";
import PersonalDetails from "./PersonalDetails";
import { Modal, ModalBody } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function AddEmployee() {
  const [active, setactive] = useState('personal');
  const [toggle, settoggle] = useState('personal');

  const [PersonalData, setPersonalData] = useState('');
  const [OfficialData, setOfficialData] = useState('');

  function handlepersonal() {
    setactive('personal');
    settoggle('personal')
  }
  function handleofficial() {
    setactive('offical');
    settoggle('official');

  }

  function handleSave() {
    const employee = {
      personal: PersonalData,
      official: OfficialData
    }
    console.log(employee, "Saving");
  }
  const navigate = useNavigate();

  return (

    <Modal style={{ maxHeight: '100vh' }} show={true} >
      <Modal.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="titleconatiner">
          <h1 style={{ textAlign: 'center' }}>Employee Details</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '1em', width: '1em', cursor: 'pointer' }} onClick={() => navigate('../')}>
          <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
      </Modal.Header>

      <ModalBody>
        <div className="subcontainer">
          <div className="uppersec " style={{ display: 'flex', justifyContent: 'space-between' }}>

            <div className="togglecont" >
              <Button variant={toggle === 'personal' ? 'primary' : 'outline-primary'} style={{ marginRight: '10px' }} onClick={handlepersonal}>Personal</Button>
              <Button variant={toggle === 'official' ? 'primary' : 'outline-primary'} onClick={handleofficial}>Offical</Button>
            </div>


          </div>

          {active === 'personal' && <PersonalDetails setPersonalData={setPersonalData} />}
          {active === 'offical' && <OfficialDetails setOfficialData={setOfficialData} />}
          <div className="davecont" >
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </div>
        </div>

      </ModalBody>

    </Modal >



  );
}


export default AddEmployee;




















































