import React, { Component } from "react";

import Article from "./Article";

const ArticleList = props => (
  <div className="container box">
    {props.articles.map(article => <Article {...article} key={article.id} />)}
  </div>
);

export default ArticleList;
