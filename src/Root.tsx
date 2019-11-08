import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Root() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <App />
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}
