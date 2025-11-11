
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import User from './user/user';
import Employee from './user/employee/Employee';
import Addemployee from './user/employee/Addemployee';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/u' element={<User />} >
          <Route path='/u/employee' element={<Employee />} >
            <Route path='/u/employee/addemployee' element={<Addemployee />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
