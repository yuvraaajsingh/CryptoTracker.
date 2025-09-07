import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import get100coin from "../../../function/get100coin";
import "./Select100Coin.css";
import SelectDays from "../../Common/SelectDays/SelectDays";

const Select100Coin = ({
  crypto1,
  crypto2,
  setCrypto1,
  setCrypto2,
  days,
  handleDaysChange,
}) => {
  const [allcoins, setAllcoins] = useState([]);

  useEffect(() => {
    getCoin();
  }, []);

  async function getCoin() {
    const getCoins = await get100coin();
    if (getCoins) {
      setAllcoins(getCoins);
    }
  }

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };
  const handleCoinChange = (event, iscrypto2) => {
    if (iscrypto2) {
      setCrypto2(event.target.value);
    } else {
      setCrypto1(event.target.value);
    }
  };

  return (
    <div className="compare-flex">
      <p>Crypto 1</p>
      <Select
        value={crypto1}
        // label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
        displayEmpty
        sx={style}
      >
        {allcoins.map((coin) => {
          return <MenuItem value={coin.id}>{coin.name}</MenuItem>;
        })}
      </Select>
      <p>Crypto 2</p>
      <Select
        value={crypto2}
        // label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
        displayEmpty
        sx={style}
      >
        {allcoins.map((coin) => {
          return <MenuItem value={coin.id}>{coin.name}</MenuItem>;
        })}
      </Select>
      <SelectDays  days={days} handleDaysChange={handleDaysChange}  noPtag={true} />
    </div>
  );
};

export default Select100Coin;
