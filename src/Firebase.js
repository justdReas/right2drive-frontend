// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQKJhFZue54xuqhOby3Scr0Oao_BmoqAk",
  authDomain: "right2drive-96102.firebaseapp.com",
  projectId: "right2drive-96102",
  storageBucket: "right2drive-96102.appspot.com",
  messagingSenderId: "1027008740480",
  appId: "1:1027008740480:web:6b9e504e72b82536ddba65",
  measurementId: "G-B3QG1K8XS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);