import React, { Component } from "react";
import ArticleList from "./ArticleList";

import { getAllArticlesByTopic } from "../api";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    getAllArticlesByTopic(name)
      .then(articles => {
        // console.log(articles);
        this.setState({
          articles: articles.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    const nextTopicName = nextProps.match.params.name,
      actualTopicName = this.props.match.params.name;

    if (actualTopicName !== nextTopicName);
    getAllArticlesByTopic(nextTopicName).then(nextArticles => {
      this.setState({
        articles: nextArticles.data
      });
    });
  }

  render() {
    let noBodyArticles = this.state.articles.map(article => {
      for (let key in article) {
        if (key === "body") article[key] = null;
      }
      return article;
    });
    return <ArticleList articles={noBodyArticles} />;
  }
}

export default Topic;
