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
      <div key={_id} className="box">
        {/* Article Head Left side*/}
        <div className="level">
          <div className="level-left">
            <p className="level-item">
              Created by:
              <Link className="is-bold" to={`/users/${created_by}`}>
                {created_by}
              </Link>
            </p>
          </div>

          {/* Head Right side */}
          <div className="level-right">
            <p className="level-item">Topic: {from_topic}</p>
          </div>
        </div>

        {/* Body */}
        <div className="content">
          <Link className="title is-4" to={`/articles/${_id}`}>
            {title}
          </Link>
          <p>{body}</p>
        </div>

        {/* Article Footer */}
        <div className="level">
          <div className="level-left">
            <span
              onClick={this.submitVoteUp}
              id="clickable"
              className="icon is-medium  level-item "
            >
              <i className="far fa-thumbs-up fa-lg" />
            </span>

            <p className="level-item ">{votes}</p>

            <span
              onClick={this.submitVoteDown}
              id="clickable"
              className="icon is-medium  level-item"
            >
              <i className="far fa-thumbs-down fa-lg" />
            </span>
          </div>
        </div>
      </div>
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
