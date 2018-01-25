import React, { Component } from "react";

const Article = props => (
  <div key={props.id} className="box">
    {/* top level of the article */}
    <div className="level">
      <div className="level-left">
        <p className="level-item">
          Created by: <strong> {props.created_by}</strong>
        </p>
      </div>
      <div className="level-right">
        <p className="level-item">{props.date}</p>
      </div>
    </div>

    {/* title and body of the article */}
    <div>
      <p className="title is-4">{props.title}</p>
      <p className="">{props.body}</p>
    </div>

    {/* lower level of the article */}
    <div>
      <span>votes: {props.votes}</span>
    </div>
  </div>
);

export default Article;
