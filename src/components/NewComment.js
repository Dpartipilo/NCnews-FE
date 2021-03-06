import React, { Component } from "react";
import PropTypes from "prop-types";

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
      <section className="box hero is-dark is-bold">
        <form onSubmit={this.handleSubmit}>
          <label className="label">
            <h4 className="subtitle">User</h4>
            <input
              className="input message"
              placeholder="Username..."
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>

          <label className="label">
            <h4 className="subtitle">Comment</h4>
            <textarea
              className="textarea message"
              placeholder="Leave a comment..."
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
          </label>
          <input className="button is-info" type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

NewComment.propTypes = {
  handleAddNewComment: PropTypes.func
};

export default NewComment;
