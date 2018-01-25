import React, { Component } from "react";

import ArticleList from "./ArticleList";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 1,
          title: "Article title",
          body: "body of the article",
          from_topic: "testing",
          created_by: "Diego",
          date: "25-1-2018",
          votes: 0
        },
        {
          id: 2,
          title: "Another Article title",
          body: "Another body of the article",
          from_topic: "testing",
          created_by: "Diego",
          date: "25-1-2018",
          votes: 0
        }
      ]
    };
  }
  render() {
    return <ArticleList articles={this.state.articles} />;
  }
}

export default HomePage;
