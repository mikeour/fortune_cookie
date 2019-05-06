const axios = require("axios");

module.exports.getRandomMessage = () => {
  return axios.get("https://api.adviceslip.com/advice");
};
