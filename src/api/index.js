import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const getAllArticles = () => {
  return axios
    .get(`${REACT_APP_API_URL}/articles`)
    .then(response => {
      console.log(response);
      this.setState({
        articles: response
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export default getAllArticles;
