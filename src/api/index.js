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