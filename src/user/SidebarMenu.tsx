import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';
function SidebarMenu() {
    const navigate = useNavigate();

    return (
        <div className="TitleContainer">
            <div className="subtitlecontainer" style={{ height: '100vh', overflowY: 'auto' }}>
                <h1 className="TitleSidebar">HRMS</h1>
                <ul className='ulstyle'>
                    {/* <li style={listyle} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
                    </path></svg><span><Link style={{ textDecoration: "none", color: "black" }} to="/u/employee">Employee</Link></span></li>
                <li style={listyle} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                        <path d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z">
                        </path></svg><Link style={{ textDecoration: 'none', color: 'black' }} to='/u/designation'><span>Designation</span></Link></li> */}
                    {/* Employee */}
                    <button className="btndiv" onClick={() => navigate('/u/employee')} > <li className="listyle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
                        </path></svg><span>Employee</span></li></button>
                    {/* Designation */}
                    <button className="btndiv" onClick={() => navigate('/u/designation')}> <li className="listyle" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M9 13V16H15V13H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13H9ZM11 11H13V14H11V11ZM7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V11H15V9H9V11H2V6C2 5.44772 2.44772 5 3 5H7ZM9 3V5H15V3H9Z">
                            </path></svg><span>Designation</span></li></button>
                    <button className="btndiv" onClick={() => navigate('/u/attendence')} > <li className="listyle" >
                        {/* Attendence */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z">
                            </path></svg><span>Attendence</span></li></button>
                    {/* Leave */}
                    <button className="btndiv" onClick={() => { navigate('/u/leave') }} > <li className="listyle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM23 18V20H15V18H23Z">
                            </path></svg><span>Leave</span></li></button>
                    {/*Inventory management  */}
                    {/* Customer */}
                    <button className="btndiv" onClick={() => { navigate('/u/customer') }} > <li className="listyle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor " style={{ width: '1em', height: '1em' }}>
                            <path d="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.6888 14.8776 14.8818 12.2168 14.9954L11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.31125 9.1222 2.11818 11.783 2.00462L11.9999 2ZM11.9999 4C10.4022 4 9.09623 5.24892 9.00499 6.82373L8.9999 7V10C8.9999 11.6569 10.343 13 11.9999 13C13.5976 13 14.9036 11.7511 14.9948 10.1763L14.9999 10V7C14.9999 5.34315 13.6567 4 11.9999 4Z">
                            </path></svg><span>Customer</span></li></button>
                    {/* Vendor */}
                    <button className="btndiv" onClick={() => { navigate('/u/vender') }} > <li className="listyle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM4.03961 11H19.9604L19.3604 8H4.63961L4.03961 11ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z">
                            </path></svg><span>Vender</span></li></button>
                    {/* Product */}
                    <button className="btndiv" onClick={() => { navigate('/u/product') }} > <li className="listyle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z">
                            </path></svg><span>Product</span></li></button>
                    {/* Carriage Inward*/}
                    <button className="btndiv" onClick={() => { navigate('/u/carriageinward') }} > <li className="listyle" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z">
                            </path></svg><span>Carr. Inward</span></li></button>
                    {/*Carriage Outward  */}
                    <button className="btndiv" onClick={() => { navigate('/u/carriageoutward') }} > <li className="listyle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z">
                            </path></svg><span>Carr. Outward</span></li></button>
                    {/* Stock */}
                    <button className="btndiv" onClick={() => { navigate('/u/stock') }} > <li className="listyle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z">
                            </path></svg><span>Stock</span></li></button>

                    {/* Carriage Inwards */}
                    <button className="btndiv" onClick={() => { navigate('/u/carriageinwardreturn') }} > <li className="listyle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M12 4C14.5905 4 16.8939 5.23053 18.3573 7.14274L16 9.5H22V3.5L19.7814 5.71863C17.9494 3.452 15.1444 2 12 2 6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20 9.40951 20 7.10605 18.7695 5.64274 16.8573L8 14.5 2 14.5V20.5L4.21863 18.2814C6.05062 20.548 8.85557 22 12 22 17.5228 22 22 17.5228 22 12H20Z">
                            </path></svg><span>Carr.In.Return</span></li></button>

                    {/* Carriage Outwards */}
                    <button className="btndiv" onClick={() => { navigate('/u/carriageoutwardreturn') }} > <li className="listyle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M12 4C9.25144 4 6.82508 5.38626 5.38443 7.5H8V9.5H2V3.5H4V5.99936C5.82381 3.57166 8.72764 2 12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4ZM4 12C4 16.4183 7.58172 20 12 20C14.7486 20 17.1749 18.6137 18.6156 16.5H16V14.5H22V20.5H20V18.0006C18.1762 20.4283 15.2724 22 12 22C6.47715 22 2 17.5228 2 12H4Z">
                            </path></svg><span>Carr.ou.Return</span></li></button>

                    {/* Logout */}
                    <button className="btndiv" onClick={() => { navigate('/logout') }} > <li className="listyle">
                        {/* Attendence */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                            <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z">
                            </path></svg><span>Logout</span></li></button>

                </ul >

            </div ></div>

    )
}




export default SidebarMenu;

// const TitleSidebar: any = {
//     textAlign: 'center',
//     margin: '42px 0px 20px 0px'
// }

// const TitleContainer: any = {
//     height: '900px',
//     width: '250px',
//     backgroundColor: '#A997DF'

// }
// const ulstyle: any = {
//     display: 'flex',
//     flexDirection: 'column',
//     rowGap: '20px'
// }

// const listyle: any = {
//     listStyleType: 'none',
//     fontSize: '24px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
// }

