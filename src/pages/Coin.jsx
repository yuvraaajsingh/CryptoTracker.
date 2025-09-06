import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader/Loader";
import Header from "../components/Common/Header/Header";
import convertObject from "../function/convertObject";
import ListTab from "../components/Dashboard/ListTab/ListTab";
import Description from "../components/Coin/Description/Description";
import getCoinData from "../function/getCoinData";
import getCoinPrice from "../function/getCoinPrice";
import LineChart from "../components/Coin/LineChart/LineChart";
import SelectComponent from "../components/Common/SelectComponent/SelectComponent";
import settingChartData from "../function/settingChartData";
import TogglePriceType from "../components/Common/TogglePriceType/TogglePriceType";

const Coin = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoData, setCryptoData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id, days,priceType]);

  async function getData(id) {
    setIsLoading(true);
    const coinData = await getCoinData(id);
    if (coinData) {
      convertObject(setCryptoData, coinData);
      const priceData = await getCoinPrice(id, days, priceType);
      if (priceData) {
        console.log(priceData)
        settingChartData(priceData, setChartData);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };
  const handlePriceTypeChange = (event, newType) => {
    setPriceType(newType);
  };
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
            <SelectComponent days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType}/>
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
