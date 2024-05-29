// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-62179.firebaseapp.com",
  projectId: "mern-blog-62179",
  storageBucket: "mern-blog-62179.appspot.com",
  messagingSenderId: "101884073865",
  appId: "1:101884073865:web:f3593e04c3a777bfdab358"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

