const instance = require("../services.js");
const getCryptoPrices = async () => {
  try {
    const { data } = await instance.get(
      "/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getCryptoPrices;
