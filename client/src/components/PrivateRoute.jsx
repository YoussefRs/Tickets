import React from 'react'
import { useAuthStatus } from '../customHook/useAuthStatus'
import Spinner from '../components/Spinner'
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus();

    if(checkingStatus) {
        return <Spinner />
    }
  return loggedIn
  ? <Outlet />
  : <Navigate to='/login' />
}

export default PrivateRoute
