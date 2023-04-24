const commands = [
  { command: "/start", description: "Запустити бота" },
  { command: "/btc", description: "Курс криптовалюти" },
  { command: "/crypto", description: "Валюта" },
  { command: "/trending", description: "Тренди" },
];
const cryptoListKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "Bitcoin", callback_data: "bitcoin" }],
      [{ text: "Ethereum", callback_data: "ethereum" }],
      [{ text: "Binance Coin", callback_data: "binancecoin" }],
      [{ text: "Dogecoin", callback_data: "dogecoin" }],
      [{ text: "Litecoin", callback_data: "litecoin" }],
    ],
  },
};

module.exports = {
  commands,
  cryptoListKeyboard,
};
