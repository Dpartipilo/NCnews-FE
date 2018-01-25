import React from "react";

import Article from "./Article";

const ArticleList = props => (
  <div className="container box">
    {props.articles.map(article => <Article {...article} key={article._id} />)}
  </div>
);

export default ArticleList;
