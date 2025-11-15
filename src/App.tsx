
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import User from './user/User';
import Employee from './user/employee/Employee';
import Addemployee from './user/employee/Addemployee';
import Designation from './user/manager/Designation';
import AddDesigantion from './user/manager/AddDesignation';
import { Attendence } from './user/attendence/Attendence';
// import Attendence from './user/attendence/Attendence';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/u' element={<User />} >
          <Route path="/u/attendence" element={<Attendence />} ></Route>
          <Route path='/u/employee' element={<Employee />} >
            <Route path='/u/employee/addemployee' element={<Addemployee />}></Route>
            <Route path='/u/employee/addemployee/:id' element={<Addemployee />}></Route>
          </Route>
          <Route path='/u/designation' element={<Designation />}>
            <Route path='/u/designation/adddesignation' element={<AddDesigantion />}></Route>
            <Route path='/u/designation/adddesignation/:id' element={<AddDesigantion />}></Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App;
