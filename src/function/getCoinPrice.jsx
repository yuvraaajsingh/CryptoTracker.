import axios from "axios";

const getCoinPrice = (id, days, priceType) => {
  const data = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((res) => {
      return res.data[priceType];
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export default getCoinPrice;
