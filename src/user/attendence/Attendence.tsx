import React, { useEffect, useState } from 'react'
import { Col, Form, Table } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';
import { _employeeService } from '../employee/EmployeeService';

function Attendence() {
    let [AttendenceArr, setAttendenceArr] = useState<any>([]);

    const [FilteredArr, setFilteredArr] = useState([]);

    const [Filter, setFilter] = useState({
        FilteredDate: '',
        FilteredDropdown: '',
        FilteredDropdownmy: '',
    })


    function getDateFunc() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
        // return `${dd}-${mm}-${yyyy}`;
    }

    function convertDateFunc() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');

        // return `${yyyy}-${mm}-${dd}`;
        return `${dd}-${mm}-${yyyy}`;
    }

    // useEffect(() => {
    //     setAttendenceList(Filter.FilteredDate, Filter.FilteredDropdown);
    // }, [Filter, AttendenceArr]);


    useEffect(() => {
        // localStorage.removeItem('AttendenceArr')
        let AttArr: any = localStorage.getItem('AttendenceArr');
        console.log('AttArr', AttArr);
        const date = Filter.FilteredDate;
        const currentdate = getDateFunc();
        if (date > currentdate) {
            alert("You cannot select the future date attendence");
            setFilter({
                FilteredDate: '',
                FilteredDropdown: '',
                FilteredDropdownmy: '',
            })

            return;
        }

        if (AttArr) {

            setAttendenceArr(JSON.parse(AttArr));
            console.log(AttendenceArr);
        }

        setAttendenceList(Filter.FilteredDate, Filter.FilteredDropdown, Filter.FilteredDropdownmy);
        // setAttendenceList(Filter.FilteredDate, Filter.FilteredDropdown);

    }, [Filter]);

    function getEmployeeName(empID: any) {
        const employee = _employeeService.getById(Number(empID));
        if (employee) {
            return employee.Personal.Name;
        }
        else {
            return '';

        }
    }


    function setAttendenceList(FilteredDate: any, FilteredDropdown: any, FilteredDropdownmy: any) {
        // function setAttendenceList(FilteredDate: any, FilteredDropdown: any) {
        let employeeList = _employeeService.getData();
        employeeList = employeeList.map((emp: any) => ({
            id: 0,
            // Date: getDateFunc(),
            Date: Filter.FilteredDate || getDateFunc(),
            EmployeeID: emp.id,
            Attendence: 'Present'
        }));

        console.log('AttendenceArr', AttendenceArr);

        let FilteredArr: any = [];
        for (let i = 0; i < employeeList.length; i++) {
            const emp = employeeList[i];

            for (let j = 0; j < AttendenceArr.length; j++) {
                const att = AttendenceArr[j];

                let dateflag = (FilteredDate === att.Date);
                if (att.EmployeeID === emp.EmployeeID && dateflag) {
                    if (att.EmployeeID === emp.EmployeeID) {
                        emp.id = att.id;
                        emp.Attendence = att.Attendence;
                    }
                }
            }

            let dropdownflag = true;
            if (FilteredDropdown && FilteredDropdown !== 'Select') {
                dropdownflag = (emp.Attendence.toLowerCase() === FilteredDropdown.toLowerCase());


            }


            let dropdownmyflag = true;
            if (FilteredDropdownmy && FilteredDropdownmy !== 'Select') {
                let currentmonth = new Date().getMonth() + 1
                let currentyear = new Date().getFullYear();
                let attdate = new Date(emp.Date);
                let attmonth = attdate.getMonth() + 1;
                let attyear = attdate.getFullYear();

                console.log("currentmonth", currentmonth, "attmonth", attmonth);
                console.log("currentyear", currentyear, "attyear", attyear);
                if (FilteredDropdownmy === 'Monthly') {
                    dropdownmyflag = (attmonth === currentmonth)
                }
                if (FilteredDropdownmy === 'Yearly') {
                    dropdownmyflag = (attyear === currentyear)
                }
            }
            // if ((dateflag && dropdownflag) || (dropdownflag && dropdownmyflag)) {
            if (dropdownflag && dropdownmyflag) {
                // if ((dropdownflag && dropdownmyflag) || (dropdownflag || dropdownmyflag)) {
                // if ((FilteredDate && dropdownflag) || (dropdownflag && dropdownmyflag) || (FilteredDate && dropdownmyflag)) {
                FilteredArr.push(emp);

            }


        }

        console.log('FilteredArr', FilteredArr)
        setFilteredArr(FilteredArr)

    }



    function handleFilter(e: any) {

        setFilter({ ...Filter, [e.target.name]: e.target.value });

        // setAttendenceList(Filter.FilteredDate, Filter.FilteredDropdown, Filter.FilteredDropdownmy);
        // setAttendenceList(Filter.FilteredDate, Filter.FilteredDropdown);


    }

    // useEffect(() => {
    //     console.log(Filter);
    // }, [Filter]);

    // function handleattendence(status: any, employee: any) {
    function handleattendence(e: any, employee: any) {
        // console.log(status, employee);

        const checked = e.target.checked;
        const status = checked ? 'Present' : 'Absent';

        if (employee.id) {
            for (let i = 0; i < AttendenceArr.length; i++) {
                if (AttendenceArr[i].id === employee.id) {
                    AttendenceArr[i].Attendence = status;
                }
            }
        }
        else {
            employee.id = Date.now();
            employee.Attendence = status;
            AttendenceArr.push(employee)
        }
        console.log(AttendenceArr);
        setAttendenceArr(AttendenceArr);
        localStorage.setItem('AttendenceArr', JSON.stringify(AttendenceArr));
        console.log(AttendenceArr);
        // setAttendenceList(Filter.FilteredDate, Filter.FilteredDropdown);

    }


    return (
        <div className='maincontainer'>
            <div className='headingcontainer' >

                <div className='titlecontainer'>
                    <h1>Attendence</h1>
                </div>

            </div>
            <div className='filtercontainer' style={{ border: '1px solid #f5f5f5', height: '80px', width: '100%', marginBottom: '50px', backgroundColor: '#f5f5f5', display: 'flex' }}>
                <div className='subfiltercontainer' style={{ display: 'flex', width: '50%', columnGap: '20px', alignItems: 'center' }}>
                    <Form.Group as={Col} controlId="formGriddate" >
                        {/* <Form.Label>From</Form.Label> */}
                        <Form.Control type="date" name="FilteredDate" value={Filter.FilteredDate} onChange={handleFilter} />
                    </Form.Group>
                    <div className='Dropdowncontainer'>
                        <select value={Filter.FilteredDropdown} name="FilteredDropdown" id="drop1" onChange={handleFilter}>
                            <option >Select</option>
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>

                        </select>
                    </div>
                    <div className='Dropdowncontainer'>
                        <select value={Filter.FilteredDropdownmy} name="FilteredDropdownmy" id="drop2" onChange={handleFilter}>
                            <option >Select</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>

                        </select>
                    </div>
                </div>
            </div>
            <div className='tablecontainer'>

                <Table striped bordered hover>
                    <thead>
                        <tr className='trclass'>
                            <th>No.</th>
                            <th>Date</th>
                            <th> Name</th>
                            <th>Attendence</th>

                        </tr>
                    </thead>
                    <tbody>
                        {FilteredArr.map((attendence: any, att: number) => (
                            <tr key={att}>
                                <td className='tdclass'>{att + 1}</td>
                                {/* <td className='tdclass'>attendence.Date{convertDateFunc()}</td> */}
                                {/* <td className='tdclass'>{Filter.FilteredDate || getDateFunc()}</td> */}
                                <td className='tdclass'>{attendence.Date}</td>
                                <td className='tdclass'>{getEmployeeName(attendence.EmployeeID)}</td>
                                <td className='tdclass' style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                                    {/* <Form.Check
                                        type="radio"
                                        label="Present"
                                        name={`Attendence${att}`}
                                        id={`Present${att}`}
                                        value="Present"
                                        checked={attendence.Attendence === 'Present'}
                                        style={{ color: 'green', fontWeight: 'bold' }}
                                        onChange={() => handleattendence('Present', attendence)}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Absent"
                                        name={`Attendence${att}`}
                                        id={`Absent${att}`}
                                        value="Absent"
                                        checked={attendence.Attendence === 'Absent'}
                                        style={{ color: 'Red', fontWeight: 'bold' }}

                                        onChange={() => handleattendence('Absent', attendence)}
                                    /> */}
                                    <Form.Check
                                        type="checkbox"
                                        label="Present"
                                        name={`Attendence${att}`}
                                        id={`Present${att}`}
                                        value="Present"
                                        checked={attendence.Attendence === 'Present'}
                                        style={{ color: 'green', fontWeight: 'bold' }}
                                        onChange={(e) => handleattendence(e, attendence)}
                                    />
                                    {/* <Form.Check
                                        type="checkbox"
                                        label="Absent"
                                        name={`Attendence${att}`}
                                        id={`Absent${att}`}
                                        value="Absent"
                                        checked={attendence.Attendence === 'Absent'}
                                        style={{ color: 'Red', fontWeight: 'bold' }}

                                        onChange={() => handleattendence('Absent', attendence)}
                                    /> */}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

            </div>
            <Outlet />
        </div >

    )
}

export default Attendence;