import React, { useState } from 'react'
import forget from '../Assets/Images/forgetpassword.png';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function ForgetPassword() {
    const navigate = useNavigate();
    let existing: any = [];
    const emailregex = /^\S+@\S+\.\S+$/;
    const [Email, setEmail] = useState('');
    let click = true;

    function HandleOtp() {

        function generateotp() {

            const genotp = (Math.floor(100000 + Math.random() * 900000));
            localStorage.setItem("OTP", JSON.stringify(genotp));
        }

        if (!Email) {
            alert("Fill up the email");
            // localStorage.setItem("Forgot", "");
            // localStorage.setItem("ResetEmail", '');
            click = false;
            return;

        }
        else if (!emailregex.test(Email)) {
            alert("Enter Valid Email");
            setEmail("");
            click = false;
            return;
        }
        else {

            localStorage.setItem("ResetEmail", Email);
            const storedvalue = localStorage.getItem('Forgot') || '';

            if (storedvalue) {
                existing = JSON.parse(storedvalue);

            }
            let found = false;
            for (let i = 0; i < existing.length; i++) {
                if (existing[i].email === Email) {
                    found = true;
                    break;
                }
            }

            if (found) {
                click = true;
                generateotp();
                navigate('/otpverification');

            }
            else {
                const creditionals = {
                    email: Email,
                    password: ''
                }
                existing.push(creditionals);
                generateotp();
                localStorage.setItem("Forgot", JSON.stringify(existing));
                if (click) {
                    navigate('/otpverification', { replace: true });
                }
            }
        }
    }



    return (
        <div className="firstcontainer">
            <div className="subforgetcontainer">
                <div className="Titleimagecontainer">
                    <img src={forget} alt="forgetpassword" style={{ height: '50%', width: '60%', }} />
                </div>
                <div className="titleforgetcontainer" >
                    <h2 className="textcenter">Forgot Password</h2>
                    <span className="textcenter">Enter your email and we'll send you a link to reset your password</span>
                </div>
                <div className="inputbtncontainer" >
                    <div className="inputcontainer">
                        <Form.Label htmlFor="inputemail" className='labelcontainer'>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            id="inputtext"
                            aria-describedby="passwordHelpBlock"
                            className='inputtext commonborderradius'
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <div className="forgetbtncontainer" >
                            <Button variant='primary' style={{ padding: '13px 45%', borderRadius: '28px', backgroundColor: '#4376d4ff' }} onClick={HandleOtp}>Submit</Button>
                        </div>

                        <div className="backcontainer" >
                            <Link to='/login' className='backanchor' > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '30px', width: '30px' }}>
                                <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z">
                                </path></svg>
                                <span style={{ fontSize: '22px' }}>Back to Login</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ForgetPassword




