
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
import Customer from './user/customer/Customer';
import AddCustomer from './user/customer/Add';
import Vender from './user/vender/Vender';
import AddVender from './user/vender/Add';
import Product from './user/product/Product';
import AddProduct from './user/product/Add';
// import Stock from './Stock/Stock';
import CarriageInward from './carriageinward/CarriageInward';
import AddCarriageinward from './carriageinward/Add';
import CarriageOutward from './carriageoutward/CarriageOutward';
import AddCarriageoutward from './carriageoutward/Add';
import Stock from './user/Stock/Stock';
// import CarriageInwardreturn from './user/CarriageInwardreturn/CarriageInwardreturn';
import AddCarriageinwardreturn from './user/carriageinwardreturn/Add';
import CarriageInwardreturn from './user/carriageinwardreturn/CarriageInwardreturn';
import CarriageOutwardreturn from './user/carriageoutwardreturn/CarriageOutwardreturn';
import AddCarriageoutwardreturn from './user/carriageoutwardreturn/Add';


// import CarriageInward from './carriageinward/CarriageInward';
// import AddCarriageinward from './carriageinward/Add';
// import AddCarriageoutward from './carriageoutward/Add';
// import CarriageOutward from './carriageoutward/CarriageOutward';
// import Stock from './Stock/Stock';
// import { MonthlyReports } from './attenedencereports/MonthlyReports';
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
const MonthlyReports = React.lazy(() => import('./attenedencereports/MonthlyReports'));
// const MonthlyReports = React.lazy(() => import('./attenedencereports/MonthlyReports'));
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
              {/* Stock */}
              <Route path='/u/stock' element={<Stock />} />
              {/* Customer */}
              <Route path='/u/customer' element={<Customer />} >
                <Route path='/u/customer/:id' element={<AddCustomer />} />
              </Route>
              {/* Vendor */}
              <Route path='/u/vender' element={<Vender />}>
                <Route path='/u/vender/:id' element={<AddVender />} />
              </Route>
              {/* Product */}
              <Route path='/u/product' element={<Product />}>
                <Route path='/u/product/:id' element={<AddProduct />} />
              </Route>
              {/* CarriageInward */}
              <Route path='/u/carriageinward' element={<CarriageInward />}>
                <Route path='/u/carriageinward/:id' element={<AddCarriageinward />} />
              </Route>
              {/* CarriageOutward */}
              <Route path='/u/carriageoutward' element={<CarriageOutward />}>
                <Route path='/u/carriageoutward/:id' element={<AddCarriageoutward />} />
              </Route>
              {/* CarriageInwardReturns */}
              <Route path='/u/carriageinwardreturn' element={<CarriageInwardreturn />}>
                <Route path='/u/carriageinwardreturn/:id' element={<AddCarriageinwardreturn />} />
              </Route>
              {/* CarriageOutwardReturn */}
              <Route path='/u/carriageoutwardreturn' element={<CarriageOutwardreturn />}>
                <Route path='/u/carriageoutwardreturn/:id' element={<AddCarriageoutwardreturn />} />
              </Route>
              {/* Attendence */}
              <Route path="/u/attendence" element={<Attendence />} ></Route>
              <Route path='/u/attendence/monthlyreports' element={<MonthlyReports />} />

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
