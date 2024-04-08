// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlv8VEODhZSd_esXSDkbz0JFKjOZcCKSQ",
  authDomain: "netflixgpt-ce44e.firebaseapp.com",
  projectId: "netflixgpt-ce44e",
  storageBucket: "netflixgpt-ce44e.appspot.com",
  messagingSenderId: "753628603854",
  appId: "1:753628603854:web:2a38da2879cffe05bdf79f",
  measurementId: "G-2HQ4MP93QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
