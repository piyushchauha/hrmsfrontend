
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Login from './auth/Login';
import React, { Suspense } from 'react';

// import User from './user/User';
// import Employee from './user/employee/Employee';
// import Addemployee from './user/employee/Add';
// import { Attendence } from './user/attendence/Attendence';
// import Designation from './user/designation/Designation';
// import AddDesigantion from './user/designation/Add';
// import PrivateRoute from './privateroute/PrivateRoute';
// import ForgetPassword from './auth/ForgetPassword';
// import Logout from './auth/Logout';
// import { OtpVerification } from './auth/OtpVerification';
import { Spinner } from 'react-bootstrap';
import CommonDropdwon from './common/CommonDropdown';
import Add1 from './user/employee/Add1';
// import OtpVerification from './auth/OtpVerification';
// import Attendence from './user/attendence/Attendence';
// import { OtpVerification } from './auth/OtpVerification';
// import ResetPassword from './auth/ResetPassword';
// import Leave from './user/leave/Leave';
// // import Add from './user/leave/Add';
// import AddLeave from './user/leave/Add';
const User = React.lazy(() => import('./user/User'));
const Employee = React.lazy(() => import('./user/employee/Employee'));
// const Addemployee = React.lazy(() => import('./user/employee/Add'));
const Attendence = React.lazy(() => import('./user/attendence/Attendence'));
const OtpVerification = React.lazy(() => import('./auth/OtpVerification'))
const Designation = React.lazy(() => import('./user/designation/Designation'));
const AddDesigantion = React.lazy(() => import('./user/designation/Add'));
const PrivateRoute = React.lazy(() => import('./privateroute/PrivateRoute'));
const ForgetPassword = React.lazy(() => import('./auth/ForgetPassword'));
const Logout = React.lazy(() => import('./auth/Logout'));
const ResetPassword = React.lazy(() => import('./auth/ResetPassword'));
const Leave = React.lazy(() => import('./user/leave/Leave'));
const AddLeave = React.lazy(() => import('./user/leave/Add'));

// import { Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Suspense fallback={<Spinner animation="border" variant="primary" />
      }>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/otpverification' element={<OtpVerification />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/commondropdown' element={<CommonDropdwon />} />
          <Route element={<PrivateRoute />}>
            <Route index element={<Navigate to="/u/employee" replace />} />
            <Route path='/u' element={<User />} >
              {/* Attendence */}
              <Route path="/u/attendence" element={<Attendence />} ></Route>
              {/* Leave */}
              <Route path="/u/leave" element={<Leave />}>
                {/* <Route path='/u/leave/add' element={<Add />} /> */}
                <Route path='/u/leave/:id' element={<AddLeave />} />
              </Route>
              {/* Employee */}
              <Route path='/u/employee' element={<Employee />} >
                <Route path='/u/employee/:id' element={<Add1 />}></Route>
              </Route>
              {/* Designation */}
              <Route path='/u/designation' element={<Designation />}>
                <Route path='/u/designation/:id' element={<AddDesigantion />}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>

    </BrowserRouter>

  )
}
export default App;
