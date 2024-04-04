// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvgwN5xmppoldqKE425oKJypXI0OnqWYk",
  authDomain: "react-dragon-auth-54998.firebaseapp.com",
  projectId: "react-dragon-auth-54998",
  storageBucket: "react-dragon-auth-54998.appspot.com",
  messagingSenderId: "19358559006",
  appId: "1:19358559006:web:16bb3f2e86ac780a44770f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;