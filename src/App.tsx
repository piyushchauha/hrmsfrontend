
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Login from './auth/Login';

import User from './user/User';
import Employee from './user/employee/Employee';
import Addemployee from './user/employee/Add';
import { Attendence } from './user/attendence/Attendence';
import Designation from './user/designation/Designation';
import AddDesigantion from './user/designation/Add';
import PrivateRoute from './privateroute/PrivateRoute';
import ForgetPassword from './auth/ForgetPassword';
import Logout from './auth/Logout';
import { OtpVerification } from './auth/OtpVerification';
import ResetPassword from './auth/ResetPassword';

// import { Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/otpverification' element={<OtpVerification />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path='/u' element={<User />} >
            <Route path="/u/attendence" element={<Attendence />} ></Route>
            <Route path='/u/employee' element={<Employee />} >
              {/* <Route path='/u/employee/addemployee' element={<Addemployee />}></Route> */}
              <Route path='/u/employee/:id' element={<Addemployee />}></Route>
            </Route>
            <Route path='/u/designation' element={<Designation />}>
              {/* <Route path='/u/designation/add' element={<AddDesigantion />}></Route> */}
              <Route path='/u/designation/:id' element={<AddDesigantion />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
export default App;
