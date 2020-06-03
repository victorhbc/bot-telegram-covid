const axios = require("axios").default;

const TelegramBot = require(`node-telegram-bot-api`);

module.exports = function () {
  const TOKEN = `1234732971:AAEq5CwrwdkbVjIxnMPe_9ksIwjySyrcSAI`;

  const bot = new TelegramBot(TOKEN, {
    polling: true,
  });

  bot.onText(/\/ajuda/, (msg, match) => {
    const chatId = msg.chat.id;

    resp = `Olá, que bom que você está usando o bot, os comandos disponíveis são \n\t/1 - irá informar o primeiro estado do brasil com mais casos de covid\n\t/2 - irá informar o segundo estado do brasil com mais casos de covid\n\t/3 - irá informar o terceiro estado do brasil com mais casos de covid\n\t/brasil - irá informar os casos de covid de todos os estados brasileiros`;

    bot.sendMessage(chatId, resp);
  });

  bot.onText(/\/total/, (msg, match) => {
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
      .then((response) => (this.a = response))
      .catch((error) => console.log(error));

    const chatId = msg.chat.id;

    resp = `O Brasil possui ${JSON.stringify(this.a.data.data.cases)} casos de covid confirmado, ${JSON.stringify(this.a.data.data.confirmed)} casos ativos e  mortes${JSON.stringify(this.a.data.data.deaths)}`;

    bot.sendMessage(chatId, resp);
  });

  bot.onText(/\/1/, (msg, match) => {
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => (this.a = response))
      .catch((error) => console.log(error));

    const chatId = msg.chat.id;

    resp = `O primeiro estado brasileiro com mais casos de corona virus e ${this.a.data.data[0].state}, o mesmo possui ${this.a.data.data[0].cases} casos registrados`;

    bot.sendMessage(chatId, resp);
  });

  bot.onText(/\/2/, (msg, match) => {
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => (this.a = response))
      .catch((error) => console.log(error));

    const chatId = msg.chat.id;

    resp = `O primeiro estado brasileiro com mais casos de corona virus e ${this.a.data.data[1].state}, o mesmo possui ${this.a.data.data[1].cases} casos registrados`;

    bot.sendMessage(chatId, resp);
  });

  bot.onText(/\/3/, (msg, match) => {
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => (this.a = response))
      .catch((error) => console.log(error));

    const chatId = msg.chat.id;

    // console.log(this.a.data.data[2]);

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

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Para ver todos os comandos digite /ajuda');
  });
};