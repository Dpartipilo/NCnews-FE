import React from "react";
import PropTypes from "prop-types";

import Article from "./Article";

const ArticleList = props => (
  <section className="container box">
    {props.articles.map(article => (
      <Article
        {...article}
        key={article._id}
        handleVoteUp={props.handleVoteUp}
        handleVoteDown={props.handleVoteDown}
      />
    ))}
  </section>
);

ArticleList.propTypes = {
  articles: PropTypes.array,
  handleVoteUp: PropTypes.func,
  handleVoteDown: PropTypes.func
};

export default ArticleList;
