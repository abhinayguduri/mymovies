import React from "react";
import { useEffect } from "react";
import PageHeader from "../components/page-header/PageHeader";
import firebase from "firebase/compat/app";
import { getDocs, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import axios from "axios";
import { initializeFirebase } from "../push-notification";
const Push = () => {
  useEffect(() => {
    const start = () => {
      window.scrollTo(0, 0);
    };
    start();
  }, []);
  const sendpush = () => {
    const key = document.getElementById("pushkey").value;
    if (key == "Brahma@1234") {
      const title = document.getElementById("pushtitle").value;
      const message = document.getElementById("pushmessage").value;
      const click = document.getElementById("pushclick").value;
      const db = getFirestore(initializeFirebase());
      const tokens = collection(db, "tokens");
      getDocs(tokens).then((res) => {
        var final_tokens = [];
        const toks = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        toks.forEach((tok) => {
          final_tokens.push(tok.data.token);
          axios.post(
            "https://fcm.googleapis.com/fcm/send",
            {
              notification: {
                title: title,
                body: message,
                click_action: click,
                icon: "https://www.agmovies.ga/static/media/tmovie.53cb986b.png",
              },
              to: tok.data.token,
            },
            {
              headers: {
                Authorization:
                  "key=AAAAd8wgzXI:APA91bHO1WSTB9pRHZ_X0G6ygED14jttzgbnFgZr6teAeI6MiukDgOnGG-Zt0IhX56iopTZM5sDeTgRh_lJs1uufxfJfOFUXvfNzRzj3kEEm10uBj-QYcuxmX05sEiQdn_KN292PQlR5",
              },
            }
          );
        });
        alert("Push Sent");
      });
    }
  };
  return (
    <>
      <PageHeader>Send Push</PageHeader>
      <div className="container">
        <div className="pushform">
          <input
            id="pushtitle"
            className="pushInput"
            type="text"
            placeholder="Enter Title"
          />
          <br />
          <input
            id="pushmessage"
            className="pushInput"
            type="text"
            placeholder="Enter Message"
          />
          <br />
          <input
            id="pushclick"
            className="pushInput"
            type="text"
            placeholder="Enter Click Action"
          />
          <br />
          <input
            id="pushkey"
            className="pushInput"
            type="text"
            placeholder="Enter Key"
          />
          <br />
          <input
            onClick={sendpush}
            className="pushBtn"
            type="button"
            value="send push"
          />
        </div>
      </div>
    </>
  );
};

export default Push;
