const getTrendingCriptoPrice = require("../services/operations/getTrendingCriptoPrice.js");
const sendTrendingPrices = async (chatId, bot) => {
  const data = await getTrendingCriptoPrice();

  const messageLines = data.coins.map(({ item }) => item.name);

  const messageText = `У тренді:\n${messageLines.join("\n")}`;

  await bot.sendMessage(chatId, messageText);
};

module.exports = sendTrendingPrices;
