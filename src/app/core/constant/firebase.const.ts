// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBjFfyLlJAPx3A3UZBQFzRRSaTL09G6YBA',
    authDomain: 'cv-angular-material.firebaseapp.com',
    projectId: 'cv-angular-material',
    storageBucket: 'cv-angular-material.firebasestorage.app',
    messagingSenderId: '940806274460',
    appId: '1:940806274460:web:f186f1721acb8990155c59',
    measurementId: 'G-ENHF011P4F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
