// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgKidbWVokz8XFXsvUCyUqXvZ-IuGAXZA",
  authDomain: "electro-gadget-tech.firebaseapp.com",
  projectId: "electro-gadget-tech",
  storageBucket: "electro-gadget-tech.appspot.com",
  messagingSenderId: "1021455116386",
  appId: "1:1021455116386:web:f0c7e196e3a0936ddf893b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;