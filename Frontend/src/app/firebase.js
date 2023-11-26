// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent as logFbEvent } from "firebase/analytics";

//trecking id or config we get from firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHMlgCY8FRc55wSQ8Ef-rxJGBNn5YlN64",
  authDomain: "nextjs-firebaseanalytics.firebaseapp.com",
  projectId: "nextjs-firebaseanalytics",
  storageBucket: "nextjs-firebaseanalytics.appspot.com",
  messagingSenderId: "657850889345",
  appId: "1:657850889345:web:d8fa814d5a04eee2264980",
  measurementId: "G-1ZGMDWW1SG",
};

// Initialize Firebase
let analytics;

const app = initializeApp(firebaseConfig);

if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const logEvent = (eventName, eventParams) => logFbEvent(analytics, eventName, eventParams);

export { logEvent, analytics };
