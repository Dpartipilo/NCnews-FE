import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

const CommentList = props => (
  <div className="box">
    {props.comments.map(comment => (
      <Comment
        {...comment}
        key={comment._id}
        handleCommentVoteUp={props.handleCommentVoteUp}
        handleCommentVoteDown={props.handleCommentVoteDown}
        handleDeleteComment={props.handleDeleteComment}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.array,
  handleCommentVoteDown: PropTypes.func,
  handleCommentVoteUp: PropTypes.func,
  handleDeleteComment: PropTypes.func
};

export default CommentList;
