import React, { useState } from 'react'
import resetpassword from '../Assets/Images/resetpassword.png';
import { Form } from 'react-bootstrap';
export default function ResetPassword() {
    const [FormData, setFormData] = useState({
        newpassword: '', confirmpassword: ''
    })

    function HandleSubmit() {

        if (FormData.newpassword === FormData.confirmpassword) {
            alert("New Password Updated");
        }
        else {
            alert("New Password and Confirm Password should have same value");
        }

    }
    function InputChange(e: any) {
        setFormData({ ...FormData, [e.target.name]: e.target.value })

    }

    return (
        <div className="firstcontainer">
            <div className="subresetcontainer commonborderradius">
                <div className="titleresetcontainer" >
                    <h4 className='textcenter'>New Password</h4>
                </div>
                <div className="resetimgcontainer" >
                    <img src={resetpassword} alt="resetpassword" style={{ width: '50%' }} />
                </div>
                <div className="resetinputcoontainer" >
                    <div className="newpasscontainer">
                        <Form.Label htmlFor="currentpassword" className='labelcontainer' >New Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="newpassword"
                            id="newpassword"
                            aria-describedby="passwordHelpBlock"
                            className='inputtext commonborderradius'
                            value={FormData.newpassword}
                            onChange={InputChange}

                        />
                    </div>
                    <div className="confirmpasscontainer">
                        <Form.Label htmlFor="confirmpassword" className='labelcontainer' >Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            value={FormData.confirmpassword}
                            aria-describedby="passwordHelpBlock"
                            className='inputtext commonborderradius'
                            onChange={InputChange}

                        />
                    </div>
                </div>
                <div className="resetbtncontainer" >
                    <button className='resetbtn commonborderradius' onClick={HandleSubmit} >Submit</button>
                </div>
            </div>
        </div>
    )
}
