import React from "react";
import { Link } from "react-router-dom";

const Article = ({ created_by, from_topic, title, votes, _id, body }) => (
  <div key={_id} className="box">
    {/* Article Head Left side*/}
    <div className="level">
      <div className="level-left">
        <p className="level-item">
          Created by: <strong> {created_by}</strong>
        </p>
      </div>

      {/* Head Right side */}
      <div className="level-right">
        <p className="level-item">Topic: {from_topic}</p>
      </div>
    </div>

    {/* Head Body */}
    <div className="content">
      <Link className="title is-4" to={`/articles/${_id}`}>
        {title}
      </Link>
    </div>

    {/* Article Footer */}
    <div>
      <p className="subtitle">votes: {votes}</p>
    </div>
  </div>
);

export default Article;
