// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX5nJDA4oW8judb8_sQEN6Q0RGkN2bSfA",
  authDomain: "nexa-assistant-6b7fd.firebaseapp.com",
  projectId: "nexa-assistant-6b7fd",
  storageBucket: "nexa-assistant-6b7fd.firebasestorage.app",
  messagingSenderId: "80597769222",
  appId: "1:80597769222:web:30a5c4d11e461c61dcf787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Exporting the Firebase app instance for use across the project
export default app;