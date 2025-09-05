import axios from "axios";

const getCoinData = (id) => {
  const data = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
    return data;
};

export default getCoinData;
