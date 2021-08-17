import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDdF2HPbXlXEywh1lG1QeuBgooGe6OLris",
    authDomain:"auth-development1-540b2.firebaseapp.com",
    projectId: "auth-development1-540b2",
    storageBucket: "auth-development1-540b2.appspot.com",
    messagingSenderId: "802786249277",
    appId: "1:802786249277:web:f823e4da7578bb1e0c3854"
})

export const auth = firebase.auth();
export default app;