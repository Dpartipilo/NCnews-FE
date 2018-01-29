import React from "react";
import { Link } from "react-router-dom";

import { timeFormat } from "../utils/timeFormat";

const Comment = ({ created_by, from_topic, created_at, votes, _id, body }) => (
  <div key={_id} className="box">
    {/*Comment Head Left*/}
    <div className="level">
      <div className="level-left">
        <p className="level-item">
          Created by: <strong> {created_by}</strong>
        </p>
        <p className="level-item">at {timeFormat(created_at, "dd/MM/yyyy")}</p>
      </div>
    </div>

    {/* Comment Body */}
    <div className="content">
      <p>{body}</p>
    </div>

    {/* Comment Footer */}
    <div className="content">
      <p className="subtitle">votes: {votes}</p>
    </div>
  </div>
);

export default Comment;
