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
        console.log(articles);
        this.setState({
          articles: articles.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  voteDown = article_id => {
    articleVoteDown(article_id)
      .then(res => {
        // console.log(res);
        this.setState({
          articles: this.state.articles.map(article => {
            if (article._id === article_id) {
              return Object.assign({}, article, { votes: article.votes - 1 });
            }
            return article;
          })
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  voteUp = article_id => {
    articleVoteUp(article_id)
      .then(res => {
        // console.log(res);
        this.setState({
          articles: this.state.articles.map(article => {
            if (article._id === article_id) {
              return Object.assign({}, article, { votes: article.votes + 1 });
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
    return (
      <ArticleList
        articles={this.state.articles}
        handleVoteUp={this.voteUp}
        handleVoteDown={this.voteDown}
      />
    );
  }
}

export default HomePage;
