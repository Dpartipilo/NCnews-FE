import React, { Component } from "react";

import ArticleList from "./ArticleList";
import { getAllArticles } from "../api";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    getAllArticles()
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <ArticleList articles={this.state.articles} />;
  }
}

export default HomePage;
