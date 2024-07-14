// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestone} from "firebase/firestore";
import { productos } from "../data/asyncMock.jsx";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKybcphlheV1kd69Ep6wuzzzFvWfc3iVE",
    authDomain: "elbarorko.firebaseapp.com",
    projectId: "elbarorko",
    storageBucket: "elbarorko.appspot.com",
    messagingSenderId: "1047231478245",
    appId: "1:1047231478245:web:b02c0975fea4e97e6dd70c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

