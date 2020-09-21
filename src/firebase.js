import firebase from "firebase";

const firebaseConfig = {
    //firebase config
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };