import React from 'react';
import useAuth from '../useAuth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if(loading){
        return <progress className='progress w-56' ></progress>
    }

    if(!user?.email){
        return <Navigate to='/login'  state={{from:location}} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;