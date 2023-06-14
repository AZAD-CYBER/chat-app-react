import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './styles/main.scss';
import { ProfileProvider } from './context/Profile.context';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
