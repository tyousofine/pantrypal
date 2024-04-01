
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore")


const dotenv = require('dotenv');
dotenv.config();


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "pantry-pal-ec98a.firebaseapp.com",
    projectId: "pantry-pal-ec98a",
    storageBucket: "pantry-pal-ec98a.appspot.com",
    messagingSenderId: "472390879207",
    appId: "1:472390879207:web:ec6232d29043525a341f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
module.exports = db;