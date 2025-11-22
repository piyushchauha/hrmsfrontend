import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom';
import { _employeeService } from '../user/employee/EmployeeService';

function Login() {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        email: '', password: ''
    })

    function InputChange(e: any) {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }


    function HandleLogin() {
        let email = "";
        let password = "";
        let found = false;

        const user = _employeeService.getData();
        for (let i = 0; i < user.length; i++) {
            email = user[i].Email;
            password = user[i].Password;
            if (email === FormData.email && password === FormData.password) {
                found = true;
                break;
            }
        }
        if (found) {
            localStorage.setItem("Logged", JSON.stringify({ password, email }));
            navigate('/u/employee', { replace: true });
            // setTimeout(() => {
            //     localStorage.setItem("Logged", "");
            // }, 3000);
        }
        else {
            localStorage.setItem("Logged", "");
            if (FormData.email === '' || FormData.password === '') {
                alert("Fill up the Email or Password");
            }
            else {
                alert("Not Valid Email or Password");
            }
        }

    }
    return (
        <div className="firstcontainer">
            <div className="sublogincontainer" >
                <div className="titlelogincontainer" >

                    <h1 className='titleline'>Login</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ height: '60px', width: '60px' }}>
                        <path d="M9.99945 11H2.04883C2.55055 5.94668 6.8141 2 11.9995 2C17.5223 2 21.9995 6.47715 21.9995 12C21.9995 17.5228 17.5223 22 11.9995 22C6.8141 22 2.55055 18.0533 2.04883 13H9.99945V16L14.9995 12L9.99945 8V11Z">
                        </path></svg>
                </div>
                <div className="logininputcontainer" >
                    <div className="emailcontainer">
                        <Form.Label htmlFor="inputemail" className='labelcontainer' >Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            id="inputemail"
                            value={FormData.email}
                            aria-describedby="passwordHelpBlock"
                            className='inputtext commonborderradius'
                            onChange={InputChange}

                        />
                    </div>
                    <div className="passwordcontainer">
                        <Form.Label htmlFor="inputPassword5" className='labelcontainer'>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            id="inputPassword"
                            className='inputtext commonborderradius'
                            value={FormData.password}
                            aria-describedby="passwordHelpBlock"
                            onChange={InputChange}

                        />
                    </div>

                </div>
                <div className="forgetcontainer" >
                    <Link to='/forgetpassword' style={{ textDecoration: 'none' }} >
                        <span className='forgetline'>Forget Password?</span>
                    </Link>
                </div>
                <div className="loginbtncontainer" >
                    <Button className='loginbtn' variant="primary" onClick={HandleLogin}>Login</Button>
                </div>

            </div>

        </div>
    )
}

export default Login