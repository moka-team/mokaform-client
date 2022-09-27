import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const style = {
  background: "none",
  width: 100,
  height: 64,
  border: "none",
  margin: 20,
};

export default function DownButton() {
  const [over, setOver] = useState(false);
  return (
    <>
      <button
        style={style}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
     
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size={"3x"}
          style={over ? { color: "#0064FF" } : { color: "#768090" }}
        />
      </button>
    </>
  );
}
