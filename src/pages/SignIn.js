import React from 'react';
import firebase from 'firebase/compat/app';
import { Container, Grid, Row, Panel, Col, Button } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { auth, database } from '../misc/firebase';

const SignIn = () => {
  // Function to sign in with a provider (e.g., Google or Facebook)
  const signInWithProvider = async (provider) => {
    try {
      // Sign in with the specified provider using Firebase's signInWithPopup method
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      // Check if the user is signing in for the first time
      if (additionalUserInfo.isNewUser) {
        // If it's a new user, save their profile information in the database
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      // Display a success alert indicating successful sign-in
      window.alert('Signed in', 4000);
    } catch (err) {
      // Display an error alert if sign-in fails
      window.alert(err.message, 4000);
    }
  };

  // Function to handle Facebook sign-in
  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  // Function to handle Google sign-in
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>

              <div className="mt-3">
                {/* Button to sign in with Facebook */}
                <Button block color="blue" onClick={onFacebookSignIn}>
                  <Icon icon="facebook" /> Continue with Facebook
                </Button>

                {/* Button to sign in with Google */}
                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
