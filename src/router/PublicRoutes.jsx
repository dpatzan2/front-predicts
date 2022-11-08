import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

import {useAuthContext} from '../context/AuthContexts';

export const PublicRoutes = () => {

    const {isAutenticated} = useAuthContext();
    console.log(isAutenticated)
    if (isAutenticated) return <Navigate to={'/room'} />

  return (
    <div>
        <Outlet />
    </div>
  )
}
