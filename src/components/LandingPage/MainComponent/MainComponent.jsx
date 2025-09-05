import React from "react";
import "./MainComponent.css";
import Button from "../../Common/Button/Button";
import iphone from "../../../assets/phone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <div className="flex-info">
      {/* Info Component */}
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.3 }}
        >
          Track Crypto{" "}
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        ></motion.p>
        <motion.div
          className="info-btn"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <Link to="/dashboard">
          <Button text={"dashboard"} />
          </Link>
          <Button text={"share"} outlined={true} />
        </motion.div>
      </div>

      {/* Phone Component */}
      <div className="right-component">
        <motion.img
          src={iphone}
          className="iphone-img"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2, // 2 seconds for one cycle
            repeat: Infinity, // Loop forever
          }}
        />
        <img src={gradient} className="gradient-img" />
      </div>
    </div>
  );
};

export default MainComponent;
