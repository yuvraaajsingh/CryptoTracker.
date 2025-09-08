import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import "./Header.css";
import MuiDrawer from "./MuiDrawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">
          CryptoTracker<span className="logo-dot">.</span>
        </h1>
      </Link>
      <div className="links">
        <Switch checked={darkMode} onClick={() => changeMode()} />
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
          <Button text={"dashboard"} outlined={false} />
        </Link>
      </div>
      <div className="mui-drawer">
        <MuiDrawer />
      </div>
    </div>
  );
};

export default Header;
