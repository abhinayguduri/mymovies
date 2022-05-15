import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import About from "../pages/About";
import Detail from "../pages/detail/Detail";
import Play from "../pages/play";
const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id/play" component={Play} />
      <Route path="/:category/:id/:season/:episode/play" component={Play} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/about" component={About} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
