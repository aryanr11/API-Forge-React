import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./componet/pages/Home";
import Docs from "./componet/pages/Docs";
import Header from "./componet/Header";
import NoPage from "./componet/NoPage";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/docs">
              <Docs></Docs>
          </Route>
          <Route path="*">
            <NoPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
