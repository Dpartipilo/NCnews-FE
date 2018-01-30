import React from "react";

import Article from "./Article";

const ArticleList = props => (
  <div className="container box">
    {props.articles.map(article => (
      <Article
        {...article}
        key={article._id}
        handleVoteUp={props.handleVoteUp}
        handleVoteDown={props.handleVoteDown}
      />
    ))}
  </div>
);

export default ArticleList;
