import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import Form from './Form';
import { leaveservice } from './LeaveService';

export default function AddLeave() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        id: Date.now(), EmployeeName: '', From: '', To: '', Days: [{ Date: '', Days: '' }], Reason: ''
    })

    function HandleSave() {
        console.log("Save");

        if (id === 'add') {
            leaveservice.Add(FormData);
        }
        else {
            const updatedData = { ...FormData, id: Number(id) };
            leaveservice.Add(updatedData);
        }

        console.log("Leavearr", leaveservice.getData());
        navigate('../');
    }

    useEffect(() => {
        if (id !== 'add') {
            const existing = leaveservice.getById(Number(id));
            console.log("existing", existing);
            if (existing) {
                setFormData(existing);
            }
        }

    }, [id])


    return (
        <Modal className='modalcontainer' show={true} >
            <Modal.Header className='modalheader'>
                <div className="titleconatiner">
                    <h1 className='headingstyle'>
                        {id === 'add' ? 'Leave Details' : 'Edit Leave Details'}
                    </h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgstyle' onClick={() => navigate('../')} >
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
            </Modal.Header>

            <ModalBody>
                <div className="subcontainer">
                    <Form FormData={FormData} setFormData={setFormData} />
                    <div className="davecont" >
                        <Button variant="primary" onClick={HandleSave} >{id === 'add' ? 'Save' : 'Update'}</Button>
                    </div>
                </div>

            </ModalBody>

        </Modal >

    )
}
