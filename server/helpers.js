const axios = require("axios");

module.exports.getRandomMessage = callback => {
  axios.get("https://api.adviceslip.com/advice").then(({ data }) => {
    callback(data);
  });
};
