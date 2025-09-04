import React, { useState } from "react";
import "./Description.css";

const Description = ({ description, heading }) => {
  const shortDesc =
    description.slice(0, 530) +
    "<br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
  const longDesc =
    description +
    "<br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";

  const [toggle, setToggle] = useState(false);
  return (
    <div className="wrapper">
      <h2>{heading}</h2>
      {console.log(description)}
      <p
        dangerouslySetInnerHTML={{
          __html: description.length >= 300 ? (toggle ? longDesc : shortDesc) : description,
        }}
        className="desc-para"
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
};

export default Description;
