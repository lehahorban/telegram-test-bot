const registerUser = (bot, connection) => {
  bot.onText(/\/register/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Введіть своє им'я.");
    bot.users[chatId] = {};
  });

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.startsWith("/")) return;

    const user = bot.users[chatId];

    if (!user) return;

    if (!user.name) {
      user.name = msg.text;
      bot.sendMessage(chatId, "Дякую! Тепер введіть электронну пошту.");
    } else if (!user.email) {
      user.email = msg.text;
      bot.sendMessage(chatId, "Дякую! Тепер введіть свій пароль.");
    } else if (!user.password) {
      user.password = msg.text;
      connection.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [user.name, user.email, user.password],
        (err, result) => {
          if (err) throw err;
          bot.sendMessage(chatId, `Дякую, ${user.name}! Ви зареєстровані.`);
          delete bot.users[chatId];
        }
      );
    }
  });
};

module.exports = registerUser;
