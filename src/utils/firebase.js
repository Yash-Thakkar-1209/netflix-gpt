// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1qh9JmDPxLNL6zlNi1jJuTmcNUQjj6I",
  authDomain: "netflix-gpt-655b7.firebaseapp.com",
  projectId: "netflix-gpt-655b7",
  storageBucket: "netflix-gpt-655b7.appspot.com",
  messagingSenderId: "383362845119",
  appId: "1:383362845119:web:8fbd645dfa8990c574390a",
  measurementId: "G-23LSVC3F5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();