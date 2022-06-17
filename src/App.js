import "swiper/swiper.min.css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Routes from "./config/Routes";

function App() {
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
