import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Common/Loader/Loader";
import Header from "../components/Common/Header/Header";
import convertObject from "../function/convertObject";
import ListTab from "../components/Dashboard/ListTab/ListTab";
import Description from "../components/Coin/Description/Description";
import getCoinData from "../function/getCoinData";
import getCoinPrice from "../function/getCoinPrice";
const Coin = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoData, setCryptoData] = useState();
  const [days, setDays] = useState(7);
  useEffect(() => {
    if (id) {
      getData(id)
      // axios
      //   .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      //   .then((res) => {
      //     convertObject(setCryptoData, res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setIsLoading(false);
      //   });

      // axios
      //   .get(
      //     `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      //   )
      //   .then((res) => {
      //     console.log(res.data);
      //     setIsLoading(false);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setIsLoading(false);
      //   });

    }
  }, [id]);

  async function getData(id) {
    const coinData= await getCoinData(id)
    if(coinData)
    {
      convertObject(setCryptoData, coinData);
      const priceData= await getCoinPrice(id,days);
      if(priceData)
      {
        console.log(priceData);
        setIsLoading(false)
      }
    }
  }
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <ListTab coin={cryptoData} />
          </div>
          <div className="grey-wrapper">
            <Description
              description={cryptoData.desc}
              heading={cryptoData.name}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Coin;
