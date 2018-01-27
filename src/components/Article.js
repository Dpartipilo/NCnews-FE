import React from "react";

const Article = ({ created_by, from_topic, title, votes, id, body }) => (
  <div key={id} className="box">
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

    {/* title and body of the article */}
    <div className="content">
      <p className="title is-4">{title}</p>
      <p>{body}</p>
      <p className="subtitle">votes: {votes}</p>
    </div>
  </div>
);

export default Article;
