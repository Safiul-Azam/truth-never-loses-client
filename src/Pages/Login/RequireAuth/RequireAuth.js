import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
const RequireAuth = ({children}) => {
    
    const location = useLocation()
  
    return children
};

export default RequireAuth;