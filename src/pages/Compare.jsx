import React from "react";
import Header from "../components/Common/Header/Header";
import Select100Coin from "../components/Compare/Select100Coins/Select100Coin";
import { useState } from "react";


const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };
  return (
    <div>
      <Header />
      <Select100Coin
        crypto1={crypto1}
        crypto2={crypto2}
        setCrypto1={setCrypto1}
        setCrypto2={setCrypto2}
        days={days}
        handleDaysChange={handleDaysChange}
      />
    </div>
  );
};

export default Compare;