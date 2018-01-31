import React from "react";

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

export default CommentList;
