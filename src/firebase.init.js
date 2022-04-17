// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUMOHr-vyLJdhGPQj_9bJUdGHOWDdqsuY",
  authDomain: "truth-never-loses.firebaseapp.com",
  projectId: "truth-never-loses",
  storageBucket: "truth-never-loses.appspot.com",
  messagingSenderId: "949532381505",
  appId: "1:949532381505:web:0ad589e2986cf4b51751c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
