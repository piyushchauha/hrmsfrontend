import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { _employeeService } from '../user/employee/EmployeeService';
// import Attendence from '../user/attendence/Attendence';
import { useNavigate } from 'react-router-dom';

function MonthlyReports() {
    const navigate = useNavigate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'October', 'November', 'December'];
    const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014];
    const [SelectedMonth, setSelectedMonth] = useState('January');
    const [SelectedYear, setSelectedYear] = useState('2025');
    const [FilteredEmployee, setFilteredEmployee] = useState([]);
    // const[]

    function HandleMonth(e: any) {
        setSelectedMonth(e.target.value);
        // console.log(SelectedMonth);
    }

    function HandleYear(e: any) {
        setSelectedYear(e.target.value);
    }

    function getMonth(Month: any) {
        const month = new Date(Month);
        return months[month.getMonth()];

    }

    function monthindex(month: any) {
        const monthIndex = months.indexOf(month);
        return monthIndex + 1;
    }

    function GetName(emp: any) {
        const employee = _employeeService.getById(emp);
        if (employee) {
            return employee.Personal.Name;
        }
        else {
            return '';
        }

    }

    // function daysInMonth(year: any, month: any) {
    //     // let month = 2;
    //     // let year = 2020;

    //     return new Date(year, month, 0).getDate();
    // }
    function daysInMonth(year: any, month: any) {
        // let month = 2;
        // let year = 2020;

        return new Date(year, month, 0).getDate();
    }


    function FilterList() {
        // console.log(SelectedYear);
        // console.log(monthindex('February'));
        // const y = daysInMonth();
        // console.log(y);
        let year = 0;
        let recordedEmployeeArr: any = [];
        let EmployeeArr: any = [];
        let filterAttendence: any = [];

        EmployeeArr = _employeeService.getData();


        recordedEmployeeArr = JSON.parse(localStorage.getItem("AttendenceArr") || '');
        // const stored = new Date(recordedEmployeeArr.Date);
        // const year = stored.getFullYear();
        // console.log(year);
        // const stored = recordedEmployeeArr.;
        // const year = stored.getFullYear();
        // console.log(stored);

        for (let i = 0; i < EmployeeArr.length; i++) {
            let employee = EmployeeArr[i];
            // console.log("employee", employee);

            let presentcnt = 0;
            let absentcnt = 0;
            for (let j = 0; j < recordedEmployeeArr.length; j++) {
                let recordedemployee = recordedEmployeeArr[j];
                year = new Date(recordedemployee.Date).getFullYear();
                console.log(year);
                // const year = stored.getFullYear();
                // console.log(stored);

                // console.log("recordedemployee", recordedemployee);
                if (employee.id === recordedemployee.EmployeeID && getMonth(recordedemployee.Date) === SelectedMonth && year === Number(SelectedYear)) {

                    console.log("recotrd", getMonth(recordedemployee.Date));
                    if (recordedemployee.Attendence === 'Present') {
                        presentcnt += 1;
                    }
                    else {
                        absentcnt += 1;

                    }

                }
                const selectmonth = daysInMonth(year, monthindex(SelectedMonth));
                presentcnt = selectmonth - absentcnt;

            }
            // console.log(year);
            // console.log(monthindex(SelectedMonth));
            // const selectmonth = daysInMonth(year, monthindex(SelectedMonth));
            // console.log(selectmonth);
            // presentcnt = selectmonth - absentcnt;


            filterAttendence.push({
                EmployeeId: employee.id,
                name: GetName(employee.id),
                PresentDays: presentcnt,
                AbsentDays: absentcnt,
                TotalDays: presentcnt + absentcnt,
            });
        }

        setFilteredEmployee(filterAttendence);
        // console.log(EmployeeArr);
        // console.log(recordedEmployeeArr);


    }
    useEffect(() => {

        FilterList();


    }, [SelectedMonth, SelectedYear])
    return (
        <div className="maincontainer">
            <div className="headingcontainer1">
                <div className="subheadingcontainer1"
                //  style={{
                //     border: '1px solid #f5f5f5', height: '80px', width: '100%', marginBottom: '50px',
                //     backgroundColor: '#f5f5f5', display: 'flex', justifyContent: '', alignItems: 'center'
                // }}
                >
                    <div className='backarr'  >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='svgbackarr' onClick={() => navigate('/u/attendence')}>
                            <path d="M8.3685 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.3685 12Z"></path></svg>
                    </div>
                    <div>
                        <h1 >Monthly Reports</h1>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className='maindropcontainer' >
                <div className='monthdropcontainer' style={{ paddingRight: '15px' }}>
                    <select
                        style={{ width: '155px', padding: '5px 5px 5px 6px', borderRadius: '24px' }}
                        value={SelectedMonth}
                        onChange={HandleMonth}
                    >
                        <option>Select the month</option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>{month}</option>
                        ))}
                    </select>
                </div>
                {/* </div> */}
                {/* <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}> */}
                <div className='yeardropcontainer'>
                    <select
                        style={{ width: '155px', padding: '5px 5px 5px 6px', borderRadius: '24px' }}
                        value={SelectedYear}
                        onChange={HandleYear}
                    >
                        <option>Select the year</option>
                        {years.map((years, index) => (
                            <option key={index} value={years}>{years}</option>
                        ))}
                    </select>
                </div>
                {/* </div> */}
            </div>

            <div className="tablecontainer">
                <Table striped bordered hover>
                    <thead>
                        <tr className="trclass">
                            <th>No.</th>
                            <th>Employee Name</th>
                            <th>Total Days</th>
                            <th>Days Present</th>
                            <th>Days Absent</th>
                        </tr>
                    </thead>

                    <tbody>
                        {FilteredEmployee.map((employee: any, index: any) => (
                            <tr key={index} className="trclass">
                                <td className="tdclass">{index + 1}</td>
                                <td className="tdclass">{employee.name}</td>
                                <td className="tdclass">{employee.TotalDays}</td>
                                <td className="tdclass">{employee.PresentDays}</td>
                                <td className="tdclass">{employee.AbsentDays}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MonthlyReports