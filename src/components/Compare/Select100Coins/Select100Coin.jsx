import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Select100Coin = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  // const [crypto2, setCrypto2] = useState("ethereum");
  const [allcoins, setAllcoins] = useState([]);

  useEffect(() => {
    getCoin();
  }, []);

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
  const handleCoinChange = (event) => {
    setCrypto1(event.target.value);
  };

  async function getCoin() {
    const getCoins = await get100coin();
    if (getCoins) {
      setAllcoins(getCoins);
    }
  }
  return (
    <Select
      value={crypto1}
      label="Crypto 1"
      onChange={handleCoinChange}
      displayEmpty
      sx={style}

      //   inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {allcoins.map((coin, i) => {
        <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>;
      })}
    </Select>
  );
};

export default Select100Coin;
