import React from "react";
import Switch from "@mui/material/Switch";
import "./Header.css";
import MuiDrawer from "./MuiDrawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Header = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="navbar">
      <Link to="/">
      <h1 className="logo">
        CryptoTracker<span className="logo-dot">.</span>
      </h1>
      </Link>
      <div className="links">
        {/* <Switch {...label} defaultChecked /> */}
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text={"dashboard"}
            outlined={false}
          />
        </Link>
      </div>
      <div className="mui-drawer">
        <MuiDrawer />
      </div>
    </div>
  );
};

export default Header;
