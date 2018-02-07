import React from "react";
import PropTypes from "prop-types";

import Article from "./Article";

const ArticleList = props => (
  <section className="container box">
    <div className="columns is-multiline">
      {props.articles.map(article => (
        <div key={article._id} className="column is-half">
          <Article
            {...article}
            handleVoteUp={props.handleVoteUp}
            handleVoteDown={props.handleVoteDown}
          />
        </div>
      ))}
    </div>
  </section>
);

ArticleList.propTypes = {
  articles: PropTypes.array,
  handleVoteUp: PropTypes.func,
  handleVoteDown: PropTypes.func
};

export default ArticleList;
