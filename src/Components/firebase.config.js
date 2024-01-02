// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZSOZkfcuw6FLwLCluEK5Q32fc6QRb-MA",
  authDomain: "auth-prac23.firebaseapp.com",
  projectId: "auth-prac23",
  storageBucket: "auth-prac23.appspot.com",
  messagingSenderId: "459142034956",
  appId: "1:459142034956:web:e8514ababf367f2566a029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;