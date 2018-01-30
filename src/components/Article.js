import React, { Component } from "react";
import { Link } from "react-router-dom";

class Article extends Component {
  submitVoteUp = e => {
    e.preventDefault();
    this.props.handleVoteUp(this.props._id);
  };
  submitVoteDown = e => {
    e.preventDefault();
    this.props.handleVoteDown(this.props._id);
  };

  render() {
    const { created_by, from_topic, title, votes, _id } = this.props;
    return (
      <div key={_id} className="box">
        {/* Article Head Left side*/}
        <div className="level">
          <div className="level-left">
            <p className="level-item">
              Created by: <strong> {created_by}</strong>
            </p>
          </div>

          {/* Head Right side */}
          <div className="level-right">
            <p className="level-item">Topic: {from_topic}</p>
          </div>
        </div>

        {/* Head Body */}
        <div className="content">
          <Link className="title is-4" to={`/articles/${_id}`}>
            {title}
          </Link>
        </div>

        {/* Article Footer */}
        <div className="level">
          <div className="level-left">
            <span
              onClick={this.submitVoteUp}
              className="icon is-medium  level-item "
            >
              <a href="#">
                <i className="far fa-thumbs-up fa-lg" />
              </a>
            </span>

            <p className="level-item ">{votes}</p>

            <span
              onClick={this.submitVoteDown}
              className="icon is-medium  level-item"
            >
              <a href="#">
                <i className="far fa-thumbs-down fa-lg" />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Article;
