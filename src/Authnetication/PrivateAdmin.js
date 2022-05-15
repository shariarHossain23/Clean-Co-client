import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../Pages/hooks/useAdmin';

const PrivateAdmin = () => {
    const location = useLocation();
    const [admin] = useAdmin();
  
    if (!admin) {
        return <Navigate to='/' replace />;
    }
  
    return <Outlet></Outlet>;
};

export default PrivateAdmin;