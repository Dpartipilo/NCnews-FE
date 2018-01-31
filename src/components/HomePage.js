import React, { Component } from "react";

import ArticleList from "./ArticleList";
import { getAllArticles, articleVoteUp, articleVoteDown } from "../api";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    getAllArticles()
      .then(articles => {
        // console.log(articles);
        this.setState({
          articles: articles.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  voteUp = article_id => {
    articleVoteUp(article_id)
      .then(res => {
        // console.log(res);
        this.setState({
          articles: this.state.articles.map(article => {
            if (article._id === article_id) {
              return res.data.article;
            }
            return article;
          })
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  voteDown = article_id => {
    articleVoteDown(article_id)
      .then(res => {
        // console.log(res);
        this.setState({
          articles: this.state.articles.map(article => {
            if (article._id === article_id) {
              return res.data.article;
            }
            return article;
          })
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let noBodyArticles = this.state.articles.map(article => {
      for (let key in article) {
        if (key === "body") article[key] = null;
      }
      return article;
    });
    return (
      <ArticleList
        articles={noBodyArticles}
        handleVoteUp={this.voteUp}
        handleVoteDown={this.voteDown}
      />
    );
  }
}

export default HomePage;
