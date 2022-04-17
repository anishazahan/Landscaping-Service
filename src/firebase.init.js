// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEkdt8jcC-wOJk6TzQVld5EQBa0Ns4BfE",
  authDomain: "home-landscaper-services.firebaseapp.com",
  projectId: "home-landscaper-services",
  storageBucket: "home-landscaper-services.appspot.com",
  messagingSenderId: "930137427164",
  appId: "1:930137427164:web:427ccbfc74a4d97ea27819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;