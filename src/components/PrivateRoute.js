import React from 'react';
import { Route } from 'react-router-dom';
import { useProfile } from '../context/Profile.context';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const PrivateRoute = ({ element: Element, ...routeProps }) => {
  const { profile, isLoading } = useProfile();

  // Check if the user profile is available
  if (!profile && !isLoading) {
    // If the profile is not available, redirect to the "/signin" route using the Navigate component
    return <Redirect to="/signin" />;
  }

  // If the profile is available, render the specified element component within a Route component
  return <Route {...routeProps} element={<Element />} />;
};

export default PrivateRoute;
