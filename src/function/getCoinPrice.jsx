import axios from "axios";

const getCoinPrice = (id, days) => {

  const options = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
    params: { vs_currency: "usd", days: days, interval: "daily" },
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-MWvc4X8YR89rUwxavr64hy6m",
    },
  };

  const coinPrice = axios
    .request(options)
    .then((res) => {
      return res.data.prices;
    })
    .catch((err) => {
      console.error(err);
      setIsLoading(false);
    });
    return coinPrice;
};

export default getCoinPrice;
