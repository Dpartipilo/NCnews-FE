import React, { Component } from "react";
import axios from "axios";

import ArticleList from "./ArticleList";
import getAllArticles from "../api";

const { REACT_APP_API_URL } = process.env;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    return <ArticleList articles={this.state.articles} />;
  }

  getAllArticles() {
    return axios
      .get(`${REACT_APP_API_URL}/articles`)
      .then(response => {
        console.log(response.data);
        this.setState({
          articles: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default HomePage;
