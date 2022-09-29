import React, { useState, useEffect } from "react";
import { Title, Row, Rows } from "./SignUpCSS";

export default function SexRow() {
  const sex = ["여성", "남성"];
  const ids = ["sex_1", "sex_2"];

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const onClickHandler = (event) => {
    if (prevClick !== null && prevClick !== event.target.id) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "black";
      prev.style.fontWeight = 400;
      prev.style.backgroundColor = "#ffffff";
    }

    setCurrentClick(event.target.id);
  };

  useEffect(
    (event) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.color = "white";
        current.style.fontWeight = 600;
        current.style.backgroundColor = "#0064ff";
      }

      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <>
      <Title>성별</Title>
      <Rows>
        {sex.map((sex, idx) => (
          <Row color="white" id={ids[idx]} value={sex} onClick={onClickHandler}>
            {sex}
          </Row>
        ))}
      </Rows>
    </>
  );
}
