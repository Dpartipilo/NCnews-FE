import React, { Component } from "react";
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

  render() {
    const { created_by, created_at, votes, _id, body } = this.props;
    return (
      <div key={_id} className="box">
        {/*Comment Head Left*/}
        <div className="level">
          <div className="level-left">
            <p className="level-item">
              Created by:
              <Link className="is-bold" to={`/users/${created_by}`}>
                {created_by}
              </Link>
            </p>
            <p className="level-item">
              at {timeFormat(created_at, "dd/MM/yyyy")}
            </p>
          </div>
        </div>

        {/* Comment Body */}
        <div className="content">
          <p>{body}</p>
        </div>

        {/* Comment Footer */}
        <div className="level">
          <div className="level-left">
            <span
              onClick={this.submitCommentVoteUp}
              id="clickable"
              className="icon is-medium level-item "
            >
              <i className="far fa-thumbs-up fa-lg" />
            </span>

            <p className="level-item ">{votes}</p>

            <span
              onClick={this.submitCommentVoteDown}
              id="clickable"
              className="icon is-medium level-item"
            >
              <i className="far fa-thumbs-down fa-lg" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;
