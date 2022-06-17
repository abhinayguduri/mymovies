import firebase from "firebase/compat/app";
import "firebase/compat/messaging";
import { addDoc, getDocs, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
export const initializeFirebase = () => {
  const app = firebase.initializeApp({
    apiKey: "AIzaSyAVZdARJ9WhI5xDTFEjdAzS_ygnjtyEl1Q",
    authDomain: "ag-movies.firebaseapp.com",
    projectId: "ag-movies",
    storageBucket: "ag-movies.appspot.com",
    messagingSenderId: "514525810034",
    appId: "1:514525810034:web:45b6ec86f8f244ad1661eb",
    measurementId: "G-6HHCKR84LW",
  });
  return app;
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    const token = await messaging.getToken();

    console.log(token);
    const db = getFirestore(initializeFirebase());
    const tokens = collection(db, "tokens");
    getDocs(tokens).then((res) => {
      var final_tokens = [];
      const toks = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
      toks.forEach((tok) => {
        final_tokens.push(tok.data.token);
      });
      if (!final_tokens.includes(token)) {
        addDoc(tokens, { token });
      }
    });
  } catch (error) {
    console.error(error);
  }
};
