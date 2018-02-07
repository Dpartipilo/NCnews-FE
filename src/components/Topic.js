import React, { Component } from "react";

import ArticleList from "./ArticleList";
import Loading from "./Loading";
import { getAllArticlesByTopic } from "../api";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true
    };
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    getAllArticlesByTopic(name)
      .then(articles => {
        this.setState({
          articles: articles.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps({ match }) {
    const nextTopicName = match.params.name;
    getAllArticlesByTopic(nextTopicName).then(nextArticles => {
      this.setState({
        articles: nextArticles.data
      });
    });
  }

  render() {
    const { loading } = this.state;
    const noBodyArticles = this.state.articles.map(article => {
      for (let key in article) {
        if (key === "body") article[key] = null;
      }
      return article;
    });
    if (loading) return <Loading />;
    return <ArticleList articles={noBodyArticles} />;
  }
}

export default Topic;
