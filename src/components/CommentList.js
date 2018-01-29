import React from "react";

import Comment from "./Comment";

const CommentList = props => (
  <div className="box">
    {props.comments.map(comment => <Comment {...comment} key={comment._id} />)}
  </div>
);

export default CommentList;
