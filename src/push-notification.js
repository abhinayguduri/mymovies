import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAVZdARJ9WhI5xDTFEjdAzS_ygnjtyEl1Q",
    authDomain: "ag-movies.firebaseapp.com",
    projectId: "ag-movies",
    storageBucket: "ag-movies.appspot.com",
    messagingSenderId: "514525810034",
    appId: "1:514525810034:web:45b6ec86f8f244ad1661eb",
    measurementId: "G-6HHCKR84LW",
  });
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();

    const token = await messaging.getToken();
    console.log("Your token is:", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
