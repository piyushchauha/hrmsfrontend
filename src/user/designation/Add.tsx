import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal, ModalBody } from "react-bootstrap";
import ManagerForm from "./Form";
import { useNavigate, useParams } from "react-router-dom";
import { designationservice } from "./DesignationService";
// import './App.css';
function AddDesigantion() {

    const { id } = useParams();
    const [FormData, setFormData] = useState({
        id: Date.now(),
        Name: '', ShortName: ''
    })

    function handleSave() {
        console.log("DesignationFormData", FormData);
        if (id === "add") {
            designationservice.AddData(FormData);
        }
        else {

            const updatedData = { ...FormData, id: Number(id) };
            designationservice.AddData(updatedData);

        }
        navigate('../');
    }
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== 'add') {
            const existing = designationservice.getDataById(Number(id));
            if (existing) {
                setFormData(existing);
            }
        }
    }, [id])
    return (
        <Modal className="modalcontainer" show={true} >
            <Modal.Header className="modalheader">
                <div className="titleconatiner">
                    <h1 className="headingstyle">
                        {id === 'add' ? 'Add Designation' : 'Edit Designation'}
                    </h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svgstyle" onClick={() => navigate('../')}>
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
            </Modal.Header>

            <ModalBody>
                <div className="subcontainer">
                    <div className="uppersec " >

                    </div>
                    <ManagerForm FormData={FormData} setFormData={setFormData} />
                    <div className="davecont" >
                        <Button variant="primary" onClick={handleSave}>{id === 'add' ? 'Save' : 'Update'}</Button>
                    </div>
                </div>

            </ModalBody>

        </Modal >


    )
}

export default AddDesigantion;

// const modalheader: any = {
//     display: 'flex',
//     justifyContent: 'space-between'
// }

// const modalcontainer: any = {
//     maxHeight: '100vh'
// }

// const headingstyle: any = {
//     textAlign: 'center'
// }

// const uppersec: any = {
//     display: 'flex',
//     justifyContent: 'space-between'
// }

// const svgstyle: any = {
//     height: '1em',
//     width: '1em',
//     cursor: 'pointer'

// }
