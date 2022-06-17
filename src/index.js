import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import firebase from "firebase/compat/app";
import { initializeFirebase } from "./push-notification";
import { askForPermissionToReceiveNotifications } from "./push-notification";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
initializeFirebase();
askForPermissionToReceiveNotifications();
serviceWorkerRegistration.register();
