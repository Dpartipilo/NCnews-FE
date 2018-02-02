import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import timeFormat from "../utils/timeFormat";

class Comment extends Component {
  submitCommentVoteUp = e => {
    e.preventDefault();
    this.props.handleCommentVoteUp(this.props._id);
  };
  submitCommentVoteDown = e => {
    e.preventDefault();
    this.props.handleCommentVoteDown(this.props._id);
  };

  SubmitDeleteComment = e => {
    e.preventDefault();
    this.props.handleDeleteComment(this.props._id);
  };

  render() {
    const { created_by, created_at, votes, _id, body } = this.props;
    return (
      <article key={_id} className="box message">
        {/*Comment Head Left*/}
        <header className="level">
          <div className="level-left">
            <p className="level-item">
              Created by:
              <Link className="is-bold" to={`/users/${created_by}`}>
                {created_by}
              </Link>
            </p>
            <time className="level-item">
              on {timeFormat(created_at, "dd/MM/yyyy")}
            </time>
          </div>
        </header>

        {/* Comment Body */}
        <section className="content">
          <p>{body}</p>
        </section>

        {/* Comment Footer */}
        <footer className="">
          <div className="is-inline-flex">
            <span
              onClick={this.submitCommentVoteUp}
              id="clickable"
              className="icon is-medium"
            >
              <i className="far fa-thumbs-up fa-lg" />
            </span>

            <p className="level-item ">{votes}</p>

            <span
              onClick={this.submitCommentVoteDown}
              id="clickable"
              className="icon is-medium"
            >
              <i className="far fa-thumbs-down fa-lg" />
            </span>
          </div>

          <div className="is-inline-flex is-pulled-right">
            <button
              onClick={this.SubmitDeleteComment}
              className="button is-danger"
            >
              Delete
            </button>
          </div>
        </footer>
      </article>
    );
  }
}

Comment.propTypes = {
  body: PropTypes.string,
  created_at: PropTypes.number,
  created_by: PropTypes.string,
  from_topic: PropTypes.string,
  handleCommentVoteDown: PropTypes.func,
  handleCommentVoteUp: PropTypes.func,
  handleDeleteComment: PropTypes.func,
  votes: PropTypes.number,
  _id: PropTypes.string
};

export default Comment;
