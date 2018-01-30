import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getAllTopics } from "../api";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    getAllTopics()
      .then(topics => {
        this.setState({
          topics: topics.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <nav className="navbar container box" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <span className="title">NCnews</span>
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Topics</span>
            <div className="navbar-dropdown">
              {this.state.topics.map(topic => (
                <Link
                  key={topic._id}
                  className="navbar-item"
                  to={`/topics/${topic.slug}/articles`}
                >
                  {topic.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
