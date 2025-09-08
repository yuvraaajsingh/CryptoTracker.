import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Select100Coin from "../components/Compare/Select100Coins/Select100Coin";
import getCoinData from "../function/getCoinData";
import getCoinPrice from "../function/getCoinPrice";
import convertObject from "../function/convertObject";
import settingChartData from "../function/settingChartData";
import LineChart from "../components/Coin/LineChart/LineChart";
import ListTab from "../components/Dashboard/ListTab/ListTab";
import Description from "../components/Coin/Description/Description";
import TogglePriceType from "../components/Common/TogglePriceType/TogglePriceType";
import Loader from "../components/Common/Loader/Loader";

const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCryplto1Data] = useState({});
  const [crypto2Data, setCryplto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [days, setDays] = useState(30);
  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days, priceType]);

  async function getData() {
    setIsLoading(true);
    const coinData = await getCoinData(crypto1);
    const coinData2 = await getCoinData(crypto2);
    if (coinData && coinData2) {
      convertObject(setCryplto1Data, coinData);
      convertObject(setCryplto2Data, coinData2);

      const priceData = await getCoinPrice(crypto1, days, priceType);
      const priceData2 = await getCoinPrice(crypto2, days, priceType);

      if (priceData && priceData2) {
        settingChartData(priceData, setChartData, priceData2, crypto1Data);
      }
    }
    setIsLoading(false);
  }
  const handlePriceTypeChange = (event, newType) => {
    setPriceType(newType);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <Select100Coin
            crypto1={crypto1}
            crypto2={crypto2}
            setCrypto1={setCrypto1}
            setCrypto2={setCrypto2}
            days={days}
            handleDaysChange={handleDaysChange}
          />

          {!isLoading && crypto1Data.id && (
            <>
              <div className="grey-wrapper">
                <ListTab coin={crypto1Data} />
              </div>
              <div className="grey-wrapper">
                <ListTab coin={crypto2Data} />
              </div>
              <div className="grey-wrapper ">
                <TogglePriceType
                  priceType={priceType}
                  handlePriceTypeChange={handlePriceTypeChange}
                />
                <LineChart
                  chartData={chartData}
                  multiAxis={true}
                  priceType={priceType}
                />
              </div>
              <div className="grey-wrapper">
                <Description
                  description={crypto1Data.desc}
                  heading={crypto1Data.name}
                />
              </div>
              <div className="grey-wrapper">
                <Description
                  description={crypto2Data.desc}
                  heading={crypto2Data.name}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Compare;
