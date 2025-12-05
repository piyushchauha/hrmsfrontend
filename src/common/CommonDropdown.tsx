import React from 'react'
import Form from "react-bootstrap/Form";
// import { designationservice } from '../user/designation/DesignationService';
// import { _employeeService } from '../user/employee/EmployeeService';

function CommonDropdwon({ type, name, value, label, onChange }: any) {
    // const [Designation, setDesignationData] = useState([]);
    // const [Option, setOption] = useState([]);

    // useEffect(() => {
    //     if (type === 'Designation') {
    //         setOption(designationservice.GetData());
    //     }
    //     if (type === 'Employee') {
    //         setOption(_employeeService.getData());
    //     }


    // }, [type])
    return (
        // <Form.Group controlId="formGridjobtitle" style={{ marginBottom: '20px' }}>
        //     {/* {/* <Form.Label>Job Title</Form.Label> */}
        //     {/* <Form.Control type="text" placeholder="Jobtitle" name="JobTitle" value={FormData.JobTitle} onChange={InputChange} /> */}
        //     <Form.Label>Designation</Form.Label>
        //     <Form.Select aria-label="Default select example" name="DesignationID" >
        //         <option>Select Designation</option>
        //         {Designation.map((des: any, index: number) => (
        //             <option key={index} value={des.id} id={des.id}>{des.Name}</option>
        //         ))}
        //     </Form.Select>
        // </Form.Group>
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Select aria-label="Default select example" value={value} name={name} onChange={onChange}>
                <option>Select {label}</option>
                {type.map((item: any, index: number) => (
                    <option key={index} value={item.id} id={item.id}>{item.Name}</option>
                ))}
            </Form.Select>
        </div>

    )
}

export default CommonDropdwon;