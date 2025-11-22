import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css';
function SidebarMenu() {
    const navigate = useNavigate();

    return (
        <div className='sidebar' style={TitleContainer}>
            <h1 style={TitleSidebar}>HRMS</h1>
            <ul style={ulstyle}>
                {/* <li style={listyle} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
                    </path></svg><span><Link style={{ textDecoration: "none", color: "black" }} to="/u/employee">Employee</Link></span></li>
                <li style={listyle} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                        <path d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z">
                        </path></svg><Link style={{ textDecoration: 'none', color: 'black' }} to='/u/designation'><span>Designation</span></Link></li> */}
                {/* Employee */}
                <button onClick={() => navigate('/u/employee')} > <li style={listyle} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
                    </path></svg><span>Employee{/*<Link style={{ textDecoration: "none", color: "black" }} to="/u/employee"></Link>*/}</span></li></button>
                {/* Designation */}
                <button onClick={() => navigate('/u/designation')}> <li style={listyle} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                        <path d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z">
                        </path></svg>{/*<Link style={{ textDecoration: 'none', color: 'black' }} to='/u/designation'></Link>*/}<span>Designation</span></li></button>
                <button onClick={() => navigate('/u/attendence')} > <li style={listyle} >
                    {/* Attendence */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z">
                        </path></svg>{/*<Link style={{ textDecoration: 'none', color: 'black' }} to='/u/attendence'></Link>*/}<span>Attendence</span></li></button>


                {/* Logout */}
                <button onClick={() => { navigate('/logout') }} > <li style={listyle} >
                    {/* Attendence */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                        <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z">
                        </path></svg>{/*<Link style={{ textDecoration: 'none', color: 'black' }} to='/u/attendence'></Link>*/}<span>Logout</span></li></button>
            </ul>
        </div>

    )
}

export default SidebarMenu;

const TitleSidebar: any = {
    textAlign: 'center',
    margin: '42px 0px 20px 0px'
}

const TitleContainer: any = {
    height: '900px',
    width: '250px',
    backgroundColor: '#A997DF'

}
const ulstyle: any = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px'
}

const listyle: any = {
    listStyleType: 'none',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
}

