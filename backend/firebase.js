// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_LtahW6zw4GKh7PnN1QIp5hF-MiI06XI",
  authDomain: "goole-auth-4fb7a.firebaseapp.com",
  projectId: "goole-auth-4fb7a",
  storageBucket: "goole-auth-4fb7a.firebasestorage.app",
  messagingSenderId: "992505617520",
  appId: "1:992505617520:web:fc3095775f124219b2a8b5",
  measurementId: "G-LNB22YJNL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);