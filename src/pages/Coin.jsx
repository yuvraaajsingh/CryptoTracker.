import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Common/Loader/Loader";
import Header from "../components/Common/Header/Header";
import convertObject from "../function/convertObject";
import ListTab from "../components/Dashboard/ListTab/ListTab";
import Description from "../components/Coin/Description/Description";
const Coin = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoData, setCryptoData] = useState();
  useEffect(() => {
    if (id) {
      const coin_name = id.toLowerCase();
      const options = {
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/${coin_name}`,
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-MWvc4X8YR89rUwxavr64hy6m",
        },
      };

      axios
        .request(options)
        .then((res) => {
          convertObject(setCryptoData, res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, []);
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
            description={cryptoData.description}
            heading={cryptoData.name}
          />
          </div>
        </>
      )}
    </div>
  );
};

export default Coin;
