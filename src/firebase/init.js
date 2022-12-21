// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIU74esOz9Ne1vfP1n7QKYR7arTmgc6QA",
  authDomain: "fir-practice-dd02d.firebaseapp.com",
  projectId: "fir-practice-dd02d",
  storageBucket: "fir-practice-dd02d.appspot.com",
  messagingSenderId: "659138542228",
  appId: "1:659138542228:web:2d14a27d88ce8882315281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()