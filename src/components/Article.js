import React from "react";
import { Link } from "react-router-dom";

const Article = ({ created_by, from_topic, title, votes, _id, body }) => (
  <div key={_id} className="box">
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
        <p className="level-item">Topic: {from_topic.toUpperCase()}</p>
      </div>
    </div>

    {/* title of the article */}
    <div className="content">
      <Link className="title is-4" to={`/articles/${_id}`}>
        {title}
      </Link>
      <br />
      <p className="subtitle">votes: {votes}</p>
    </div>
  </div>
);

export default Article;
