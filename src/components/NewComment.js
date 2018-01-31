import React, { Component } from "react";

class NewComment extends Component {
  state = {
    username: "" || "northcoder",
    comment: ""
  };

  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, comment } = this.state;
    this.props.handleAddNewComment(username, comment);
    this.setState({
      username: "",
      comment: ""
    });
  };

  render() {
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <label className="label">
            User
            <input
              className="input"
              placeholder="Username..."
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>

          <label className="label">
            Comment
            <textarea
              className="textarea"
              placeholder="Leave a comment..."
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
          </label>
          <input className="button is-info" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewComment;
