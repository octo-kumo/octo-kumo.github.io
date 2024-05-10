// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKfHLvHOxpQwsa-zDSDiOn-PFdRo7mTBs",
    authDomain: "octo-kumo.firebaseapp.com",
    projectId: "octo-kumo",
    storageBucket: "octo-kumo.appspot.com",
    messagingSenderId: "785959296166",
    appId: "1:785959296166:web:06d636005035b36ebfa867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
