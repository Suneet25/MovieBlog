// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHMlgCY8FRc55wSQ8Ef-rxJGBNn5YlN64",
  authDomain: "nextjs-firebaseanalytics.firebaseapp.com",
  projectId: "nextjs-firebaseanalytics",
  storageBucket: "nextjs-firebaseanalytics.appspot.com",
  messagingSenderId: "657850889345",
  appId: "1:657850889345:web:d8fa814d5a04eee2264980",
  measurementId: "G-1ZGMDWW1SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app,analytics,logEvent};