import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="section">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
