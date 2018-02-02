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
      <nav
        className="navbar container box hero is-dark is-bold"
        aria-label="main navigation"
      >
        <div className="navbar-brand navbar-item is-hidden-mobile">
          <Link to="/">
            <h1 className="title">Northcoders News</h1>
          </Link>
        </div>

        <div className="navbar-brand navbar-item is-hidden-tablet">
          <Link to="/">
            <h1 className="title">NCnews</h1>
          </Link>
        </div>

        <div className="navbar-item has-dropdown is-hoverable">
          <h3 className="navbar-link is-hidden-touch">Topics</h3>

          <div className="is-hidden-desktop">
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

          <div className="navbar-dropdown is-hidden-touch">
            {this.state.topics.map(topic => (
              <Link
                key={topic._id}
                className="navbar-item hero is-dark is-bold"
                to={`/topics/${topic.slug}/articles`}
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
