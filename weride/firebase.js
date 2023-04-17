// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBivPSBH_zlOwOYvBX5bATWCIInRn525T8",
    authDomain: "weride-f6a01.firebaseapp.com",
    databaseURL: "https://weride-f6a01-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "weride-f6a01",
    storageBucket: "weride-f6a01.appspot.com",
    messagingSenderId: "84768106529",
    appId: "1:84768106529:web:a5653185769caa31249b60",
};

//init firebase app
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = getDatabase(app);
const auth = getAuth(app);

export {db, auth}
