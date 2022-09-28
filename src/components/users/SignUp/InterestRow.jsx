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
  background-color: #f9fafb;

  &:hover {
    transform: scale(1.1);
  }
`;

const Rows = styled.div``;

export default function InterestRow() {
  const interests = ["일상", "IT", "취미", "학습"];
  const interests2 = ["심리", "사회·정치", "선호도 조사", "+"];

  const ids = [
    "interest_1",
    "interest_2",
    "interest_3",
    "interest_4",
    "interest_5",
    "interest_6",
    "interest_7",
    "interest_8",
  ];

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const onClickHandler = (event) => {
    if (prevClick !== null && prevClick !== event.target.id) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "black";
      prev.style.fontWeight = 400;
      prev.style.backgroundColor = "#f9fafb";
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
      <Title>관심사</Title>
      <Rows>
        {interests.map((interest, idx) => (
          <Row
            id={ids[idx]}
            value={interest}
            type="button"
            onClick={onClickHandler}
          >
            {interest}
          </Row>
        ))}
      </Rows>
      <Rows>
        {interests2.map((interest, idx) => (
          <Row
            id={ids[idx + 4]}
            value={interest}
            type="button"
            onClick={onClickHandler}
          >
            {interest}
          </Row>
        ))}
      </Rows>
    </>
  );
}
