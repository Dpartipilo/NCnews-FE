import React, { Component } from "react";

import ArticleList from "./ArticleList";
import Loading from "./Loading";
import { getAllArticles, articleVoteUp, articleVoteDown } from "../api";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true
    };
  }

  componentDidMount() {
    getAllArticles()
      .then(articles => {
        this.setState({
          articles: articles.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  voteUp = article_id => {
    articleVoteUp(article_id)
      .then(res => {
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
    const { loading } = this.state;
    const noBodyArticles = this.state.articles.map(article => {
      for (let key in article) {
        if (key === "body") article[key] = null;
      }
      return article;
    });
    if (loading) return <Loading />;
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
