import React, { useState } from 'react'
import otpimage from '../Assets/Images/otpverify.png'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
function OtpVerification() {
    const navigate = useNavigate();
    const [Otp, setOtp] = useState('');
    function HandleOtp() {
        const storedotp = localStorage.getItem("OTP");
        if (storedotp === Otp) {
            alert("Otp Verified");
            navigate('/resetpassword', { replace: true });
            localStorage.setItem("OTP", "");
        }
        else {
            alert("Otp Invalid");
        }
    }
    return (
        <div className="firstcontainer" >
            <div className="subotpcontainer commonborderradius " >
                <div className="titletext">
                    <h4 className='verifytext'>Verify Account</h4>
                </div>
                <div className="titleimagecontainer" >
                    <img src={otpimage} className='otpimage' alt="otpimage" />
                </div>
                <div className="textcenter"  >
                    <span style={{ color: '#515050ff', fontSize: '18px' }}>We have send the OTP on email </span>
                </div>
                <div className="inputverifycontainer" >
                    <Form.Control
                        type="tel"
                        id="otp"
                        maxLength={6}
                        aria-describedby="otpHelpBlock"
                        value={Otp}
                        className='otpinput'
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </div>
                <div className="verifybtncontainer" >
                    <Button variant="danger" onClick={HandleOtp} className='verifybtn commonborderradius'>Verify</Button>
                </div>
            </div>
        </div>
    )
}

export default OtpVerification