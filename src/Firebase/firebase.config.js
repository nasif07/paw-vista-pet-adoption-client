// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS9_DdvROydWpOhz79v06zIIrxdOXJSpI",
  authDomain: "paw-vista.firebaseapp.com",
  projectId: "paw-vista",
  storageBucket: "paw-vista.appspot.com",
  messagingSenderId: "455216347612",
  appId: "1:455216347612:web:3ac637297a347d67adf719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;