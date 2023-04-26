require("dotenv").config();
const sendCryptoPrices = require("./utils/sendCryptoPrices");
const sendTrendingPrices = require("./utils/sendTrendingPrices");
const eventPrices = require("./utils/eventPrices.js");
const registerUser = require("./controllers/registerUser.js");
const getTrendingCriptoPrice = require("./services/operations/getTrendingCriptoPrice.js");
const connection = require("./server.js");
const TelegramBot = require("node-telegram-bot-api");

const { commands, cryptoListKeyboard } = require("./options.js");

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands(commands);

bot.users = {};

const start = () => {
  registerUser(bot, connection);

  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Привіт! Введіть своє им'я.");
    bot.users[chatId] = {};
  });

  bot.onText(/\/btc/, (msg) => {
    const chatId = msg.chat.id;
    sendCryptoPrices(chatId, bot);
  });

  bot.onText(/\/crypto/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Оберіть криптовалюту:", cryptoListKeyboard);
  });

  bot.onText(/\/trending/, (msg) => {
    const chatId = msg.chat.id;
    sendTrendingPrices(chatId, bot);
  });

  eventPrices(bot);
};

start();
getTrendingCriptoPrice();
