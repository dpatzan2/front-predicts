import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

import {useAuthContext} from '../context/AuthContexts';

export const AdminRoutes = () => {

    const {isAutenticated, credentials} = useAuthContext();
    console.log(credentials)

    if (credentials == null) return <Navigate to={'/'} />

    const credentialsUser = JSON.parse(credentials)
    console.log(credentialsUser.rol)

    if (credentialsUser.rol !== 'ADMIN') return <Navigate to={'/'} />

  return (
    <div>
        <Outlet />
    </div>
  )
}
