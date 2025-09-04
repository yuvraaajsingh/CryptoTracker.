import React from "react";
import "./GridTab.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
const GridTab = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h < 0? "grid-container-red":"grid-container-green"}`} >
      <div className="img-name-flex">
        <img src={coin.image} className="coin-logo" />
        <div className="name-flex">
          <div className="coin-symbol">{coin.symbol}</div>
          <div className="coin-name">{coin.name}</div>
        </div>
      </div>

      <div className="change-percent">
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "up-percent-num"
              : "down-percent-num"
          }
        >
            { coin.price_change_percentage_24h > 0
              ? "+"
              : ""}
          {coin.price_change_percentage_24h !== null &&
          coin.price_change_percentage_24h !== undefined
            ? coin.price_change_percentage_24h.toFixed(2) + "%"
            : "N/A"}
        </div>

        <div>
          {coin.price_change_percentage_24h >= 0 ? (
            <TrendingUpRoundedIcon className="up-percent-logo" />
          ) : (
            <TrendingDownRoundedIcon className="down-percent-logo" />
          )}
        </div>
      </div>

      <div className="current-price">
        <div
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString("en-US")}
        </div>
      </div>

      <div className="vol-cap">
        <div>Total Volume: ${coin.total_volume.toLocaleString("en-US")}</div>
        <div>Market Cap: ${coin.market_cap.toLocaleString("en-US")}</div>
      </div>
    </div>
    </Link>
  );
};

export default GridTab;
