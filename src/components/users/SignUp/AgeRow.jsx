import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Title, Row } from "./SignUpCSS";
import { ageGroupState } from "./SignUpState";

export default function AgeRow() {
  const ages = ["10대", "20대", "30대", "40대", "50대+"];
  const ids = ["age_1", "age_2", "age_3", "age_4", "age_5"];

  const [age, setAgeGroup] = useRecoilState(ageGroupState);

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
    setAgeGroup(event.target.value.substring(0, 2));
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
