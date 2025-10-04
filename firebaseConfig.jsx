import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig ={
  apiKey: "AIzaSyBklEboRiOCPMn9zksBSgvtTaMgtFRu4kQ",
  authDomain: "omnispecc.firebaseapp.com",
  projectId: "omnispecc",
  storageBucket: "omnispecc.firebasestorage.app",
  messagingSenderId: "137393494017",
  appId: "1:137393494017:web:a321afb938476cd83f4800",
  measurementId: "G-2RYWCQJMHL"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(db);



export {db, auth}

