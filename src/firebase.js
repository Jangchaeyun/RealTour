// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHLQ64CrS3I-nmo1_JKbh0WnYy1ZeR7ZI",
  authDomain: "rest-tour.firebaseapp.com",
  projectId: "rest-tour",
  storageBucket: "rest-tour.appspot.com",
  messagingSenderId: "692673539006",
  appId: "1:692673539006:web:9ef50e7c4dd11c71d4a7ef"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()