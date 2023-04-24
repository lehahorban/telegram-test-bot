const instance = require("../services.js");
const getCryptoPriceByName = async (crypto) => {
  try {
    const response = await instance.get(
      `/simple/price?ids=${crypto}&vs_currencies=usd`
    );
    const data = response.data[crypto];
    const price = data.usd;
    return price;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getCryptoPriceByName;
