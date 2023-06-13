import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = false;

  // Check if the user profile is available
  if (!profile) {
    // If the profile is not available, redirect to the "/signin" route using the Navigate component
    return <Navigate to="/signin" />;
  }

  // If the profile is available, render the specified children components within a Route component
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;


// The component receives children and routeProps as props. The children prop represents the components to be rendered within the route, and routeProps contains the route-specific props (such as path, exact, etc