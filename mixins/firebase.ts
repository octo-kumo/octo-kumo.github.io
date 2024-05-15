import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBKfHLvHOxpQwsa-zDSDiOn-PFdRo7mTBs",
    authDomain: "octo-kumo.firebaseapp.com",
    projectId: "octo-kumo",
    storageBucket: "octo-kumo.appspot.com",
    messagingSenderId: "785959296166",
    appId: "1:785959296166:web:06d636005035b36ebfa867",
    measurementId: "G-P1XR4L2JP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
