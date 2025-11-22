import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function Logout() {
    useEffect(() => {
        localStorage.setItem("Logged", "");
    })
    return (
        <Navigate to='/login' />
    )
}

export default Logout