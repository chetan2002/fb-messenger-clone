import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA7GEGkwwB6zSbuh86EK_SXXxW0eGos_Ds",
    authDomain: "fb-messenger-clone-346a7.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-346a7.firebaseio.com",
    projectId: "fb-messenger-clone-346a7",
    storageBucket: "fb-messenger-clone-346a7.appspot.com",
    messagingSenderId: "484010025991",
    appId: "1:484010025991:web:9627e2fc071b6fd089f6a2",
    measurementId: "G-6CCK5L2BVC"
});


const db = firebaseApp.firestore();

export default db ;