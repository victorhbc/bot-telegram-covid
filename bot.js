const axios = require("axios").default;

const TelegramBot = require(`node-telegram-bot-api`);

module.exports = function () {
  const TOKEN = `1234732971:AAEq5CwrwdkbVjIxnMPe_9ksIwjySyrcSAI`;

  const bot = new TelegramBot(TOKEN, {
    polling: true,
  });

  bot.onText(/\/1/, (msg, match) => {
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => (this.a = response))
      .catch((error) => console.log(error));

    const chatId = msg.chat.id;

    console.log(this.a.data.data[0]);

    resp = `O primeiro estado brasileiro com mais casos de corona virus e ${this.a.data.data[0].state}, o mesmo possui ${this.a.data.data[0].cases} casos registrados`;

    bot.sendMessage(chatId, resp);
  });

  bot.onText(/\/2/, (msg, match) => {
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => (this.a = response))
      .catch((error) => console.log(error));

    const chatId = msg.chat.id;

    console.log(this.a.data.data[1]);

    resp = `O primeiro estado brasileiro com mais casos de corona virus e ${this.a.data.data[1].state}, o mesmo possui ${this.a.data.data[1].cases} casos registrados`;

    bot.sendMessage(chatId, resp);
  });

  bot.onText(/\/3/, (msg, match) => {
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => (this.a = response))
      .catch((error) => console.log(error));

    const chatId = msg.chat.id;

    console.log(this.a.data.data[2]);

    resp = `O primeiro estado brasileiro com mais casos de corona virus e ${this.a.data.data[2].state}, o mesmo possui ${this.a.data.data[2].cases} casos registrados`;

    bot.sendMessage(chatId, resp);
  });

  bot.onText(/\/brasil/, (msg, match) => {
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => (this.a = response))
      .catch((error) => console.log(error));

    const chatId = msg.chat.id;

    console.log(this.a.data.data[2]);

    let resp = `Lista:\n`;

    for (let index = 0; index < 26; index++) {
      resp = `${resp} ${this.a.data.data[index].state}:  ${this.a.data.data[index].cases} casos, ${this.a.data.data[index].deaths} mortes\n`;
    }

    bot.sendMessage(chatId, resp);
  });
};
