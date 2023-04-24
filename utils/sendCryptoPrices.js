const getCryptoPrices = require("../services/operations/getCryptoPrices.js");
const sendCryptoPrices = async (chatId, bot) => {
  const data = await getCryptoPrices();

  const messageLines = Object.entries(data).map(([key, value]) => {
    return `${key.charAt(0).toUpperCase() + key.slice(1)}: $${value.usd}`;
  });
  const messageText = `Курс криптовалюти зараз такий:\n${messageLines.join(
    "\n"
  )}`;

  await bot.sendMessage(chatId, messageText);
};

module.exports = sendCryptoPrices;
