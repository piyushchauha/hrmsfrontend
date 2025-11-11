import React from 'react'
import { Link } from 'react-router-dom'

function SidebarMenu() {
    return (
        <div className='sidebar' style={{ height: '900px', width: '250px', backgroundColor: '#0D6EFD' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>HRMS</h1>
            <ul>
                <li style={{ listStyleType: 'none', fontSize: '24px', display: 'flex', alignItems: 'center', gap: '10px' }} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em' }}>
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
                    </path></svg><span><Link style={{ textDecoration: "none", color: "black" }} to="/u/employee">Employee</Link></span></li>

            </ul>
        </div>

    )
}

export default SidebarMenu;