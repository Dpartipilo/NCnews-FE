import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getArticleById } from "../api";
import { getAllCommentsByArticle } from "../api";

import CommentList from "./CommentList";
import Article from "./Article";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      comments: []
    };
  }

  componentDidMount() {
    const { article_id } = this.props.match.params;
    getArticleById(article_id)
      .then(article => {
        this.setState({
          article: article.data
        });
        console.log(article);
      })
      .catch(err => {
        console.log(err);
      });

    getAllCommentsByArticle(article_id)
      .then(comments => {
        this.setState({
          comments: comments.data
        });
        console.log(comments);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { article, comments } = this.state;
    return (
      <div className="container box">
        <Article {...article} />
        <p className="title is-4"> Last Comments</p>
        <CommentList comments={comments} />
      </div>
    );
  }
}

export default ArticlePage;
