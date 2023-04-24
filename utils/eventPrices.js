const getCryptoPriceByName = require("../services/operations/getCryptoPriceByName.js");

const eventPrices = async (bot) => {
  bot.on("callback_query", async (query) => {
    const chatId = query.message.chat.id;
    const crypto = query.data;
    let message = "";

    const price = await getCryptoPriceByName(crypto);

    if (price) {
      message = `Ціна ${crypto} зараз ${price} USD.`;
    } else {
      message = `Не вдалося отримати ціну ${crypto}.`;
    }

    bot.sendMessage(chatId, message);
  });
};

module.exports = eventPrices;
