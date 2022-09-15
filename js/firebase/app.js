// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkkKzeswgvDK7BmXi1jlkWPs6AWHlwVxU",
    authDomain: "bh-semana-mundo-invertido.firebaseapp.com",
    projectId: "bh-semana-mundo-invertido",
    storageBucket: "bh-semana-mundo-invertido.appspot.com",
    messagingSenderId: "30875087771",
    appId: "1:30875087771:web:5426bce37d76d3a7d1a73e"
    }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app