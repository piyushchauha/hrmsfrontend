import React, { useEffect } from 'react'
import Form from "react-bootstrap/Form";
import { Col } from 'react-bootstrap';
import { _employeeService } from '../employee/EmployeeService';
import CommonDropdwon from '../../common/CommonDropdown';
// import { leaveservice } from './LeaveService';
export default function LeaveForm({ FormData, setFormData }: any) {
    let EmployeeArr: any = [];
    EmployeeArr = _employeeService.getData();
    const employeeOptions = EmployeeArr.map((emp: any) => ({
        id: emp.id,
        Name: emp.Personal.Name
    }));


    function IntialDays() {
        const intialdays = [];
        const list = HandleDate();
        for (let i = 0; i < list.length; i++) {
            const currentdate = list[i].toISOString().split("T")[0];
            let existingday = null;

            for (let j = 0; j < FormData.Days.length; j++) {
                if (currentdate === FormData.Days[j].Date) {
                    existingday = FormData.Days[j];
                }
            }
            intialdays.push({
                Date: currentdate,
                Days: existingday ? existingday.Days : 'Full Day',
            })
        }
        setFormData({
            ...FormData,
            Days: intialdays,
        });
    }


    function InputChange(e: any) {

        const value = e.target.value;

        if (e.target.name === 'Days') {


            const selecteddate = e.target.dataset.date;
            const value = e.target.value;
            const updatedarr = FormData.Days;
            console.log("SelectedDate:-", selecteddate, "value:-", value);

            // console.log("FormDays", FormData.Days);
            let dayupdated = false;
            for (let i = 0; i < updatedarr.length; i++) {
                if (updatedarr[i].Date === selecteddate) {
                    updatedarr[i].Days = value;
                    dayupdated = true
                }
            }
            if (dayupdated) {
                setFormData({ ...FormData, Days: updatedarr });
            }
            else {

                setFormData({
                    ...FormData,
                    Days: [{
                        Days: 'Full Day'
                    }
                    ]
                });

            }

        }

        else {
            setFormData({ ...FormData, [e.target.name]: value });
        }
    }


    function HandleDate() {
        let arr: any = []
        const start = new Date(FormData.From);
        const end = new Date(FormData.To);

        while (start <= end) {
            arr.push(new Date(start));
            start.setDate(start.getDate() + 1)
        }
        return arr;
    }


    useEffect(() => {

        if (!FormData.From && !FormData.To) {
            setFormData({
                ...FormData,
                Days: [],
            });
            return;
        } else {
            IntialDays();
        }


    }, [FormData.From, FormData.To]);


    const handleDelete = (date: string) => {
        const newdates: any = []
        for (let i = 0; i < FormData.Days.length; i++) {
            if (FormData.Days[i].Date !== date) {
                newdates.push(FormData.Days[i]);
            }

        }

        setFormData({ ...FormData, Days: newdates });

    };




    return (
        <div className='supermaincontain'>
            <div className="formcontainer" style={formcontainer}>

                <Form.Group controlId="formGridjobtitle" style={{ marginBottom: '20px' }}>
                    {/*<Form.Label>Employee</Form.Label>*/}
                    {/* <Form.Select aria-label="Default select example" name="EmployeeName" value={FormData.EmployeeName} onChange={InputChange} >
                        <option>Select Employee</option>
                        {EmployeeArr.map((emp: any, index: number) => (
                            <option key={index} value={emp.id} id={emp.id}>{emp.Name}</option>
                        ))}
                    </Form.Select> */}
                    <CommonDropdwon type={employeeOptions} label="Employee" name="EmployeeName" value={FormData.EmployeeName} onChange={InputChange} />
                </Form.Group>
                {/* From to date */}
                <Form.Group as={Col} controlId="formGriddate" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }} >
                    <div className="fromcontainer" style={{ width: '100%' }}>
                        <Form.Label>From</Form.Label>
                        <Form.Control type="date" name="From" value={FormData.From} onChange={InputChange} />
                    </div>
                    <div className="tocontainer" style={{ width: '100%' }}>
                        <Form.Label>To</Form.Label>
                        <Form.Control type="date" name="To" value={FormData.To} onChange={InputChange} />
                    </div>
                </Form.Group>

                {/* selected */}
                {FormData.Days.length > 0 && FormData.Days.map((d: any, i: any) => {

                    const selecteddate = d.Date;
                    // console.log(d.Days);

                    return (
                        <div key={selecteddate} style={{ border: '1px solid #D3D3D3', padding: '8px', marginTop: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <span>{i + 1}</span>
                                </div>
                                <div>
                                    <span key={i}>{selecteddate}</span>
                                </div>{/* data-date={selecteddate} */}
                                <Form.Select aria-label="Default select example" name="Days" value={d.Days} data-date={selecteddate} onChange={InputChange} style={{ width: '130px' }}>

                                    {/* <option value="">Select</option> */}
                                    <option value="Full Day">Full Day</option>
                                    <option value="First Half">First Half</option>
                                    <option value="Second Half">Second Half</option>
                                </Form.Select>
                                {/* <span style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(selecteddate)}> x</span> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(236,4,4,1)" onClick={() => handleDelete(selecteddate)} style={{ height: '22px', width: '25px', cursor: 'pointer' }}>
                                    <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z">
                                    </path></svg>
                            </div>
                        </div>

                    );
                })}

                {/*  */}
                {/* Reason container */}
                <Form.Group className="mb-3 mt-3" controlId="formreason" >
                    <Form.Label>Reason</Form.Label>
                    <div>
                        <textarea className='reasontextarea' placeholder="Reason" name='Reason' value={FormData.Reason} onChange={InputChange} />
                    </div>
                </Form.Group>
            </div>
        </div>
    )
}

const formcontainer = {
    width: '100%'
};














