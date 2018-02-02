import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Article extends Component {
  submitVoteUp = e => {
    e.preventDefault();
    this.props.handleVoteUp(this.props._id);
  };
  submitVoteDown = e => {
    e.preventDefault();
    this.props.handleVoteDown(this.props._id);
  };

  render() {
    const { created_by, from_topic, title, votes, _id, body } = this.props;
    return (
      <article key={_id} className="box message">
        {/* Article Head Left side*/}
        <header className="level">
          <div className="level-left">
            <p className="level-item">
              Created by:
              <Link className="is-bold" to={`/users/${created_by}`}>
                {created_by}
              </Link>
            </p>
          </div>

          {/* Head Right side */}
          <div className="level-right is-hidden-mobile">
            <p className="level-item">Topic: {from_topic}</p>
          </div>
        </header>

        {/* Body */}
        <section className="content">
          <Link className="title is-5" to={`/articles/${_id}`}>
            {title}
          </Link>
          <p className="has-text-justified">{body}</p>
        </section>

        {/* Article Footer */}
        <footer className="is-inline-flex">
          <span
            onClick={this.submitVoteUp}
            id="clickable"
            className="icon is-medium"
          >
            <i className="far fa-thumbs-up fa-lg" />
          </span>

          <p className="level-item ">{votes}</p>

          <span
            onClick={this.submitVoteDown}
            id="clickable"
            className="icon is-medium"
          >
            <i className="far fa-thumbs-down fa-lg" />
          </span>
        </footer>
      </article>
    );
  }
}

Article.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
  created_by: PropTypes.string,
  from_topic: PropTypes.string,
  votes: PropTypes.number,
  _id: PropTypes.string,
  handleVoteUp: PropTypes.func,
  handleVoteDown: PropTypes.func
};

export default Article;
