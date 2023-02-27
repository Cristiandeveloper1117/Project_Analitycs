// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyBA171HgoWBbNAOjLUXy6pW9Qg5JcWQFFE",
//   authDomain: "react-cd-auth.firebaseapp.com",
//   projectId: "react-cd-auth",
//   storageBucket: "react-cd-auth.appspot.com",
//   messagingSenderId: "1063171967502",
//   appId: "1:1063171967502:web:7f634ca46ebea44ea3ca5f"
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';


// const firebaseConfig = {
//   apiKey: "AIzaSyALh9_BOSqtplZ8YVgrVsWaBxjEGVCZCyk",
//   authDomain: "cristian-web.firebaseapp.com",
//   projectId: "cristian-web",
//   storageBucket: "cristian-web.appspot.com",
//   messagingSenderId: "110286205157",
//   appId: "1:110286205157:web:bf7ff67787cabd0ff9240c",
//   measurementId: "G-PPRE1H9SQB"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT77gKe_ulj6W5CkL4yoCz7RU-hxCg4Ys",
  authDomain: "cristian-analytics.firebaseapp.com",
  projectId: "cristian-analytics",
  storageBucket: "cristian-analytics.appspot.com",
  messagingSenderId: "917565071074",
  appId: "1:917565071074:web:bcf71b22602050d50948bb",
  measurementId: "G-TE3QN0CRL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// import {getAuth} from 'firebase/auth';
export const auth = getAuth(app);


