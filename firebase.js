import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhjd2Pb3GXO7x6IwvfigEOJtsY8KizpL8",
  authDomain: "whatsapp-2-4abd0.firebaseapp.com",
  projectId: "whatsapp-2-4abd0",
  storageBucket: "whatsapp-2-4abd0.appspot.com",
  messagingSenderId: "210864393845",
  appId: "1:210864393845:web:f49ea7198eb2377b4af23c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
