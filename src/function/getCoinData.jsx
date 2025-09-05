import axios from "axios";

const getCoinData = (id) => {
  const coin_name = id.toLowerCase();
  const options = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/${id}`,
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-MWvc4X8YR89rUwxavr64hy6m",
    },
  };

  const myData = axios
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      setIsLoading(false);
    });
  return myData;
};

export default getCoinData;
