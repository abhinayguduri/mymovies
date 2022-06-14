import "swiper/swiper.min.css";
import OneSignal from "react-onesignal";
import { useEffect } from "react";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Routes from "./config/Routes";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "a98791d4-94f5-4ec4-ae5f-caeee4800b0b",
    });
  }, []);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
