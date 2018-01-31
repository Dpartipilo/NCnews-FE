import React, { Component } from "react";

import {
  articleVoteUp,
  articleVoteDown,
  commentVoteUp,
  commentVoteDown,
  getArticleById,
  getAllCommentsByArticle,
  addCommentsToArticle,
  commentDelete
} from "../api";

import CommentList from "./CommentList";
import Article from "./Article";
import NewComment from "./NewComment";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      comments: []
    };
  }

  componentDidMount() {
    const { article_id } = this.props.match.params;
    getArticleById(article_id)
      .then(article => {
        this.setState({
          article: article.data
        });
        // console.log(article);
      })
      .catch(err => {
        console.log(err);
      });

    getAllCommentsByArticle(article_id)
      .then(comments => {
        this.setState({
          comments: comments.data
        });
        // console.log(comments);
      })
      .catch(err => {
        console.log(err);
      });
  }

  voteArticleUp = article_id => {
    articleVoteUp(article_id)
      .then(res => {
        // console.log(res);
        this.setState({
          article: res.data.article
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  voteArticleDown = article_id => {
    articleVoteDown(article_id)
      .then(res => {
        // console.log(res);
        this.setState({
          article: res.data.article
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  voteCommentUp = comment_id => {
    commentVoteUp(comment_id)
      .then(votedComment => {
        // console.log(res);
        this.setState({
          comments: this.state.comments.map(comment => {
            if (comment._id === comment_id) {
              return votedComment.data.comment;
            }
            return comment;
          })
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  voteCommentDown = comment_id => {
    commentVoteDown(comment_id)
      .then(votedComment => {
        // console.log(votedComment);
        this.setState({
          comments: this.state.comments.map(comment => {
            if (comment._id === comment_id) {
              return votedComment.data.comment;
            }
            return comment;
          })
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  AddNewComment = (username, body) => {
    const article_id = this.state.article._id;
    addCommentsToArticle(article_id, username, body)
      .then(comment => {
        this.setState({
          comments: [comment.data, ...this.state.comments]
        });
        // console.log(comment);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteComment = comment_id => {
    commentDelete(comment_id)
      .then(res => {
        alert(`Comment has been deleted.`);
        this.setState({
          comments: this.state.comments.filter(
            comment => comment._id !== comment_id
          )
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { article, comments } = this.state;
    return (
      <div className="container box">
        <Article
          {...article}
          handleVoteUp={this.voteArticleUp}
          handleVoteDown={this.voteArticleDown}
        />

        <p className="subtitle">Leave your comments</p>
        <NewComment handleAddNewComment={this.AddNewComment} />
        <p className="title is-4"> Last Comments</p>

        <CommentList
          comments={comments}
          handleCommentVoteUp={this.voteCommentUp}
          handleCommentVoteDown={this.voteCommentDown}
          handleDeleteComment={this.deleteComment}
        />
      </div>
    );
  }
}

export default ArticlePage;
