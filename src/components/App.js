import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import User from "./User";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Topic from "./Topic";
import ArticlePage from "./ArticlePage";
import NoMatch from "./NoMatch";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/topics/:name/articles" component={Topic} />
            <Route path="/articles/:article_id" component={ArticlePage} />
            <Route path="/users/:username" component={User} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
