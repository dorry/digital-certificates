import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyCAs5EZrOWWwt6Vx4ufwtZj0iNAvHVOp58",
    authDomain: "digitalcertificate-3bd34.firebaseapp.com",
    databaseURL: "https://digitalcertificate-3bd34.firebaseio.com",
    projectId: "digitalcertificate-3bd34",
    storageBucket: "digitalcertificate-3bd34.appspot.com",
    messagingSenderId: "277378852992",
    appId: "1:277378852992:web:2770dd6dfae8e5eda4de65"
})

export const db = app.database();
export const namesRef = db.ref('RequestPrivate');