import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getArticleById } from "../api";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
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
  }

  render() {
    const {
      created_by,
      from_topic,
      title,
      votes,
      _id,
      body
    } = this.state.article;
    return (
      <div className="box">
        {/* top leftside of the article */}
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p>
                Created by: <strong> {created_by}</strong>
              </p>
            </div>
          </div>

          {/* top right side */}
          <div className="level-right">
            <p className="level-item">Topic: {from_topic}</p>
          </div>
        </div>

        {/* title of the article */}
        <div className="content">
          <Link className="title is-4" to={`/articles/${_id}`}>
            {title}
          </Link>
          <br />
          <p>{body}</p>
          <p className="subtitle">votes: {votes}</p>
        </div>
      </div>
    );
  }
}

export default ArticlePage;
