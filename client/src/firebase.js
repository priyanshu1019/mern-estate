// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbAOS142qzFjABoVanyiZ2xBBH1Gy3yeI",
  authDomain: "mern-estate-a46c1.firebaseapp.com",
  projectId: "mern-estate-a46c1",
  storageBucket: "mern-estate-a46c1.appspot.com",
  messagingSenderId: "201961361109",
  appId: "1:201961361109:web:5e3bff9ffe402d7c291c5c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//we have to export it to use it at other places
