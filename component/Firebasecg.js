
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8pbITVJE3AoUbMQXlZzxn3hLCOxu1SK0",
  authDomain: "nexus-5f67d.firebaseapp.com",
  projectId: "nexus-5f67d",
  storageBucket: "nexus-5f67d.appspot.com",
  messagingSenderId: "544718081816",
  appId: "1:544718081816:web:43d1e281f27eb1c302586d",
  measurementId: "G-HB58PSWQJP"
};


export const app = initializeApp(firebaseConfig);
