import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const getAllArticles = () => {
  return axios.get(`${REACT_APP_API_URL}/articles`);
};

export const getAllTopics = () => {
  return axios.get(`${REACT_APP_API_URL}/topics`);
};

export const getAllArticlesByTopic = name => {
  return axios.get(`${REACT_APP_API_URL}/topics/${name}/articles`);
};

export const getArticleById = article_id => {
  return axios.get(`${REACT_APP_API_URL}/articles/${article_id}`);
};

export const getAllCommentsByArticle = article_id => {
  return axios.get(`${REACT_APP_API_URL}/articles/${article_id}/comments`);
};

export const getUserByUsername = username => {
  return axios.get(`${REACT_APP_API_URL}/users/${username}`);
};

export const articleVoteUp = article_id => {
  return axios.put(`${REACT_APP_API_URL}/articles/${article_id}?vote=up`);
};

export const articleVoteDown = article_id => {
  return axios.put(`${REACT_APP_API_URL}/articles/${article_id}?vote=down`);
};

export const commentVoteUp = comment_id => {
  return axios.put(`${REACT_APP_API_URL}/comments/${comment_id}?vote=up`);
};

export const commentVoteDown = comment_id => {
  return axios.put(`${REACT_APP_API_URL}/comments/${comment_id}?vote=down`);
};

export const addCommentsToArticle = (article_id, username, body) => {
  return axios.post(`${REACT_APP_API_URL}/articles/${article_id}/comments`, {
    created_by: username,
    body: body,
    votes: 0,
    created_at: Date.now(),
    from_topic: article_id
  });
};
