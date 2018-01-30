import React, { Component } from "react";

import { getUserByUsername } from "../api";

class User extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const { username } = this.props.match.params;
    getUserByUsername(username)
      .then(user => {
        this.setState({
          user: user.data
        });
        // console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="container box">
        <h1 className="title">{user.name}</h1>
        <h3 className="subtitle">{user.username}</h3>
        <img className="image" src={user.avatar_url} alt="User avatar" />

        <p>NCnews user</p>
      </div>
    );
  }
}

export default User;
