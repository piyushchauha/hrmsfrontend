import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import OfficialDetails from './OfficialDetails';
import PersonalDetails from './PersonalDetails';
import { _employeeService } from './EmployeeService';

function Add1() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ActiveTab, setActiveTab] = useState("personal");
    const [FormData, setFormData] = useState({
        id: Date.now(),

        Personal: {
            Name: '', BirthDate: '', Gender: '', Password: '',
            Contact: { mobile: '', email: '', alternativemobile: '', alternativeemail: '' },
            Address: {
                Current: { Block: '', Building: '', LandMark: '', PinCode: '' },
                Permanent: { PBlock: '', PBuilding: '', PLandMark: '', PPinCode: '' }
            },

        },
        Official: {
            Code: '', JoiningDate: '', Mobile: '', Email: '', JobTitle: '', DesignationID: '',
        }
    })

    function HandleTab(tab: any) {
        setActiveTab(tab)
    }
    useEffect(() => {
        if (id !== 'add') {
            const existing = _employeeService.getById(Number(id));
            if (existing) {
                setFormData(existing);
            }
        }
    }, [id])

    function HandleSave() {
        console.log("Employee FormData", FormData);
        if (id === 'add') {
            _employeeService.Add(FormData);
        }
        else {

            const updatedData = { ...FormData, id: Number(id) };
            _employeeService.Add(updatedData);

        }
        console.log(_employeeService.getData());
        navigate('../');
    }
    return (

        <Modal className='modalcontainer' show={true} >
            <Modal.Header className='modalheader'>
                <div className="titleconatiner">
                    <h1 className='headingstyle'>
                        {id === 'add' ? 'Employee Details' : 'Edit Details'}
                    </h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgstyle' onClick={() => navigate('../')}>
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
            </Modal.Header>

            <ModalBody>
                <div className="subcontainer">
                    <div >
                        <Button className="personalbtn"
                            // style={{
                            //     borderRadius: '24px 0px 0px 24px'

                            // }}
                            variant={ActiveTab === "personal" ? "primary" : "outline-primary"} onClick={() => HandleTab('personal')}>Personal</Button>

                        <Button className='officialbtn'
                            // style={{
                            //     borderRadius: '0px 24px 24px 0px',
                            //     padding: '6px 22px 6px 12px'

                            // }}
                            variant={ActiveTab === "official" ? "primary" : "outline-primary"} onClick={() => HandleTab('official')}>Official</Button>
                    </div>
                    {ActiveTab === "official" ? (
                        <OfficialDetails FormData={FormData} setFormData={setFormData} />
                    ) : (
                        <PersonalDetails FormData={FormData} setFormData={setFormData} />
                    )}
                    {/* <NewForm FormData={FormData} setFormData={setFormData} /> */}
                    <div className="davecont" >
                        {/* <Button variant="primary" onClick={HandleSave} >{id === 'add' ? 'Save' : 'Update'}</Button> */}
                        <Button variant="primary" onClick={HandleSave} >{id === 'add' ? 'Save' : 'Update'}</Button>
                    </div>
                </div>

            </ModalBody>

        </Modal >


    )
}

export default Add1