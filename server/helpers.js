const axios = require("axios");
const nodemailer = require("nodemailer");

module.exports.getRandomMessage = () => {
  return axios.get("https://api.adviceslip.com/advice");
};

module.exports.sendMail = (email, msg) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.BOT_EMAIL,
      pass: process.env.BOT_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.BOT_EMAIL,
    to: `${email}`,
    subject: "Your Message from Fortune Cookie Has Arrived!",
    html: `<h3>${msg}</h3><br><img src="https://www.astrology.com/images-US/games/game-fortune-cookie-1.png"/><p>-Sent using Node.js</p>`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
