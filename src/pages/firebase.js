// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXRhKVyYIfoc0lBODMyxrSza5tBdwHXj8",
  authDomain: "loginpage-72811.firebaseapp.com",
  projectId: "loginpage-72811",
  storageBucket: "loginpage-72811.appspot.com",
  messagingSenderId: "589529470550",
  appId: "1:589529470550:web:c39afc47ee2d77c09f0df7",
  measurementId: "G-6Q9957JENG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;
