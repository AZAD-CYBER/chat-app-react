// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_E2uX7vTgGhAmpK0TB-2wh0FdbJsqSU4",
  authDomain: "chat-web-app-65d5f.firebaseapp.com",
  projectId: "chat-web-app-65d5f",
  storageBucket: "chat-web-app-65d5f.appspot.com",
  messagingSenderId: "967210762543",
  appId: "1:967210762543:web:91ab26eae8b73d5c2821da",
  measurementId: "G-FZ0Y392E2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
