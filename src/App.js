import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Containers/Header";
import Favs from "./Containers/Favs";
import Characters from "./Containers/Characters";
import Comics from "./Containers/Comics";
import Login from "./Containers/Login";
import Home from "./Containers/Home";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/characters/:id">
          <Characters />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/favs">
          <Favs />
        </Route>
        <Route path="/characters">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
