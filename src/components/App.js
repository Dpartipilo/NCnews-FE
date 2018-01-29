import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Topic from "./Topic";
import ArticlePage from "./ArticlePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="section">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/topics/:name/articles" component={Topic} />
            <Route path="/articles/:article_id" component={ArticlePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
