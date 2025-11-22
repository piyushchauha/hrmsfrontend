import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
    let verified = localStorage.getItem("Logged");
    return (
        verified ? <Outlet /> : <Navigate to='/login' replace />
    )
}
export default PrivateRoute;

