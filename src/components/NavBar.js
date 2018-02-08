import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import { getAllTopics } from "../api";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      isActive: false
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

  toggleIsActive = () => {
    this.setState({
      isActive: !this.state.isActive ? "is-active" : ""
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <nav
        className="navbar is-transparent box is-dark"
        aria-label="main navigation"
      >
        <div className="navbar-brand is-inline-flex">
          <Link to="/">
            <h1 id="brand" className="navbar-item title is-hidden-mobile">
              Northcoders News
            </h1>
          </Link>
          <Link to="/">
            <h1 id="brand" className="navbar-item title is-hidden-tablet">
              NCnews
            </h1>
          </Link>
        </div>

        <div className="navbar-menu ">
          <div className="navbar-start">
            <div className="is-inline-flex">
              {this.state.topics.map(topic => (
                <NavLink
                  key={topic._id}
                  id="topic"
                  activeClassName="selected"
                  className="topic navbar-item"
                  to={`/topics/${topic.slug}/articles`}
                >
                  {topic.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div
          onClick={this.toggleIsActive}
          id="topic"
          className={`navbar-item dropdown ${isActive} is-boxed is-hidden-desktop`}
        >
          <div className="dropdown-trigger">
            <div
              className=""
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>Topics </span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {this.state.topics.map(topic => (
                <Link
                  key={topic._id}
                  id="dropdownTopic"
                  className="dropdown-item"
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
