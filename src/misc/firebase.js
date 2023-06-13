import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB_E2uX7vTgGhAmpK0TB-2wh0FdbJsqSU4',
  authDomain: 'chat-web-app-65d5f.firebaseapp.com',
  projectId: 'chat-web-app-65d5f',
  storageBucket: 'chat-web-app-65d5f.appspot.com',
  messagingSenderId: '967210762543',
  appId: '1:967210762543:web:91ab26eae8b73d5c2821da',
  measurementId: 'G-FZ0Y392E2Z',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const database = app.database();

export { auth, database };