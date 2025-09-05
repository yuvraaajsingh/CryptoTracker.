import React, { useEffect, useRef } from "react";
import "./BottomtoTop.css";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";

const BottomtoTop = () => {
  const myButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        myButtonRef.current.style.display = "flex";
      } else {
        myButtonRef.current.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bottom-to-top"
      id="myBtn"
      ref={myButtonRef}
      onClick={topFunction}
    >
      <NorthRoundedIcon sx={{ fontSize: 35, color: "var(--blue)" }} />
    </div>
  );
};

export default BottomtoTop;
