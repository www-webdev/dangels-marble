
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAB6YJGKq_sRAuWC9BBJ9XIlw91Aig1Sns",
    authDomain: "dangels-marble-distributor.firebaseapp.com",
    projectId: "dangels-marble-distributor",
    storageBucket: "dangels-marble-distributor.firebasestorage.app",
    messagingSenderId: "689138169207",
    appId: "1:689138169207:web:8f308da0302894c798dd72",
    measurementId: "G-9T4RKEPK2E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
