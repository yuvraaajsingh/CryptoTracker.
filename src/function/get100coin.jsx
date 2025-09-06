import axios from "axios";

const get100coin = () => {
  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/markets",
    params: { vs_currency: "usd", per_page: "100" },
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-MWvc4X8YR89rUwxavr64hy6m",
    },
  };

  const my100coins = axios
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
  return my100coins;
};

export default get100coin;
