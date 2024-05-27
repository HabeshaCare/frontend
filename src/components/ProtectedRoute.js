import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (requiredRole && requiredRole !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
// what is the role of the following word
// protectedRoute
// state
// useSelector