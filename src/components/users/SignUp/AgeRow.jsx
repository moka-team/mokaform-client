import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  margin: 10px;
  margin-top: 35px;
  margin-bottom: 25px;
  color: #0064ff;
  font-weight: 700;
`;

const Row = styled.button`
  width: 100px;
  height: 100px;
  margin: 10px;
  border: none;
  border-radius: 50%;
  background-color: white;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function AgeRow() {
  const ages = ["10대", "20대", "30대", "40대", "50대+"];
  const ids = ["age_1", "age_2", "age_3", "age_4", "age_5"];

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
      <Title>연령대</Title>
      {ages.map((age, idx) => (
        <Row id={ids[idx]} value={age} type="button" onClick={onClickHandler}>
          {age}
        </Row>
      ))}
    </>
  );
}
