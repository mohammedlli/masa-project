// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1i2k80PmyVZl6kdRaCsq5gM2BlC8KzYc",
    authDomain: "glassesd-cd48f.firebaseapp.com",
    projectId: "glassesd-cd48f",
    storageBucket: "glassesd-cd48f.appspot.com",
    messagingSenderId: "862054620672",
    appId: "1:862054620672:web:a61cf1f3a3d30e741d02e5",
    measurementId: "G-DFJWK4PHSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
