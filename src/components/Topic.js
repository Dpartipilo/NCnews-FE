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
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data
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
    return (
      <div>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default Topic;