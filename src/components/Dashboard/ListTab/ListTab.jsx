import React from "react";
import "./ListTab.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import convertNumber from "../../../function/ConvertNumber";
import { Link } from "react-router-dom";

const ListTab = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <td className="td-image">
          <Tooltip title="Coin Logo">
            <img src={coin.image} className="coin-logo" />
          </Tooltip>
        </td>
        <td>
          <div className="name-flex">
            <Tooltip title="Symbol">
              <div className="coin-symbol">{coin.symbol}</div>
            </Tooltip>
            <Tooltip title="Name">
              <div className="coin-name">{coin.name}</div>
            </Tooltip>
          </div>
        </td>
        <Tooltip title="Price change percentage in 24h">
          <td className="change-percent">
            <div
              className={
                coin.price_change_percentage_24h > 0
                  ? "up-percent-num"
                  : "down-percent-num"
              }
            >
              {coin.price_change_percentage_24h > 0 ? "+" : ""}
              {coin.price_change_percentage_24h !== null &&
              coin.price_change_percentage_24h !== undefined
                ? coin.price_change_percentage_24h.toFixed(2) + "%"
                : "N/A"}
            </div>

            <div className="tranding-icon">
              {coin.price_change_percentage_24h >= 0 ? (
                <TrendingUpRoundedIcon className="up-percent-logo" />
              ) : (
                <TrendingDownRoundedIcon className="down-percent-logo" />
              )}
            </div>
          </td>
        </Tooltip>

        <td className="current-price">
          <div
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            <Tooltip title="Current Price">
              <p className="center-align mobile-view  ">
                ${coin.current_price.toLocaleString("en-US")}
              </p>
            </Tooltip>
          </div>
        </td>

        <td className="mobile-view-ttl-vol">
          <Tooltip title="Total Volume">
            <p className="right-align smaller-font td-total-volume">
              ${coin.total_volume.toLocaleString("en-US")}
            </p>
          </Tooltip>
        </td>
        <td className="mobile-view-vol-cap">
          <Tooltip title="Market cap">
            <p className="right-align smaller-font dasktop-view-mkt">
              ${coin.market_cap.toLocaleString("en-US")}
            </p>
          </Tooltip>
          <Tooltip title="Market cap">
            <p className="right-align smaller-font mobile-view-mkt ">
              ${convertNumber(coin.market_cap)}
            </p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
};

export default ListTab;
