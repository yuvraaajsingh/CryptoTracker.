import React from "react";
import "./ListTab.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
function ListTab({ coin }) {
  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .MuiTooltip-tooltip`]: {
      backgroundColor: "#333",
      color: "#fff",
      fontSize: "0.7rem",
      padding: "0.3rem 0.5rem",
      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    },
  }));

  return (
    <div className="list-container">
      <div className="logo-name-list">
        <StyledTooltip title="Logo" placement="bottom-start">
          <img src={coin.image} className="coin-logo-list" />
        </StyledTooltip>
        <div className="name-list" placement="bottom-start">
          <StyledTooltip title="Symbol">
            <div className="coin-symbol-list">{coin.symbol}</div>
          </StyledTooltip>
          <StyledTooltip title="Name" placement="bottom-start">
            <div className="coin-name-list">{coin.name}</div>
          </StyledTooltip>
        </div>
      </div>
      <StyledTooltip title="Price change in 24 h" placement="bottom-start">
        <div className="change-percent-list">
          <div
            className={
              coin.price_change_percentage_24h > 0
                ? "up-percent-num-list"
                : "down-percent-num-list"
            }
          >
            {coin.price_change_percentage_24h > 0 ? "+" : ""}
            {coin.price_change_percentage_24h !== null &&
            coin.price_change_percentage_24h !== undefined
              ? coin.price_change_percentage_24h.toFixed(2) + "%"
              : "N/A"}
          </div>

          <div>
            {coin.price_change_percentage_24h >= 0 ? (
              <TrendingUpRoundedIcon className="up-percent-logo-list" />
            ) : (
              <TrendingDownRoundedIcon className="down-percent-logo-list" />
            )}
          </div>
        </div>
      </StyledTooltip>
      <div className="current-market-list">
        <StyledTooltip title="Current Price" placement="bottom-start">
          <div
            className="current-price-list"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString("en-US")}
          </div>
        </StyledTooltip>
        <StyledTooltip title="Total Volume" placement="bottom-start">
          <div className="total-volume-list">
            {" "}
            ${coin.total_volume.toLocaleString("en-US")}
          </div>
        </StyledTooltip>
        <StyledTooltip title="Market Cap" placement="bottom-start" >
          <div className="market-cap-list">
            {" "}
            ${coin.market_cap.toLocaleString("en-US")}
          </div>
        </StyledTooltip>
      </div>
    </div>
  );
}

export default ListTab;
