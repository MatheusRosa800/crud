// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXLZoHKkXvoBv0CFoIztji7UgONg_pAHE",
    authDomain: "crud-simples-8a674.firebaseapp.com",
    projectId: "crud-simples-8a674",
    storageBucket: "crud-simples-8a674.appspot.com",
    messagingSenderId: "97625101003",
    appId: "1:97625101003:web:fa34eaa732c91b9228014e",
    measurementId: "G-EG3B18B4KC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)