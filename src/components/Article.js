import React from "react";

const Article = props => (
  <div key={props.id} className="box">
    {/* top leftside of the article */}
    <div className="level">
      <div className="level-left">
        <p className="level-item">
          Created by: <strong> {props.created_by}</strong>
        </p>
      </div>

      {/* top right side */}
      <div className="level-right">
        <p className="level-item">{props.date}</p>
      </div>
    </div>

    {/* title and body of the article */}
    <div className="content">
      <p className="title is-4">{props.title}</p>
      <p>{props.body}</p>
      <p className="subtitle">votes: {props.votes}</p>
    </div>
  </div>
);

export default Article;
