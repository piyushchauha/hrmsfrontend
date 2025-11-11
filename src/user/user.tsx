import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarMenu from './SidebarMenu';

function User() {
    return (
        <div style={{ display: 'flex' }}>
            <SidebarMenu />
            <div style={{ flexGrow: 1 }}>
                <Outlet />
            </div>
        </div>
    )
}

export default User;