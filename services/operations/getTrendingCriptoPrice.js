const instance = require("../services");
const getTrendingCriptoPrice = async () => {
  const { data } = await instance.get("/search/trending");
  return data;
};

module.exports = getTrendingCriptoPrice;
