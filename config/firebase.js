// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3p2H9XLlZc7h9cf4vvTmmd1z0S3VLhaA",
  authDomain: "seva-counter.firebaseapp.com",
  projectId: "seva-counter",
  storageBucket: "seva-counter.appspot.com",
  messagingSenderId: "1040048609225",
  appId: "1:1040048609225:web:6f5baf4f2cf57d034aba18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;