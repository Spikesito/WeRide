import { ref, set, push, createUserWithEmailAndPassword } from "firebase/database";
import { db, auth } from "../firebase";

function createUser(userData) {
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

function signInUser(userData) {
    signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

function getUser(userData) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/refer   ence/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

export default function createUser(userInfos) {
    const usersRef = ref(db, 'users/')
    const userId = push(usersRef).key;
    let userData = {}

    if (validateUser(userInfos)) {
        userData = {
            firstname: userInfos["firstname"],
            pseudo: userInfos["pseudo"],
            date: userInfos["date"],
            email: userInfos["email"],
            password: userInfos["password"],
            friends: [],
            trips: [],
            motos: [],
            messaging: [],
        }
        set(ref(db, 'users/' + userId), userData);
        return true;
    } else {
        return validateUser(userInfos);
    }


}