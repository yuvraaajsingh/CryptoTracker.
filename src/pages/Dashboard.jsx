import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TabComponent from "../components/Dashboard/TabComponent/TabComponent";
import axios from "axios";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets",
      params: { vs_currency: "usd", per_page: "100" },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-MWvc4X8YR89rUwxavr64hy6m",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setCoins(res.data)
      })
      .catch((err) => console.error(err));
  },[]);
  return (
    <div>
      <Header />
      <TabComponent coins={coins} />
    </div>
  );
};

export default Dashboard;
