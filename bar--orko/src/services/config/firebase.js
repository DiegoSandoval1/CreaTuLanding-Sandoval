import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKybcphlheV1kd69Ep6wuzzzFvWfc3iVE",
  authDomain: "elbarorko.firebaseapp.com",
  projectId: "elbarorko",
  storageBucket: "elbarorko.appspot.com",
  messagingSenderId: "1047231478245",
  appId: "1:1047231478245:web:b02c0975fea4e97e6dd70c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

