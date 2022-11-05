import React, { useEffect, useState } from "react";
import { Row, Title } from "./SignUpCSS";

export default function AgeRow({ age, getAge }) {
  const ages = ["10대", "20대", "30대", "40대", "50대+"];
  const ids = ["TEENAGER", "TWENTIES", "THIRTIES", "FORTIES", "FIFTIES"];
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
    getAge(event.target.id);
    console.log(event.target.id);
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
      <Title>연령대</Title>
      {ages.map((age, idx) => (
        <Row
          key={ids[idx]}
          color="white"
          id={ids[idx]}
          value={age}
          type="button"
          onClick={onClickHandler}
        >
          {age}
        </Row>
      ))}
    </>
  );
}
