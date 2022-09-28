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

const Rows = styled.div``;

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
          <Row id={ids[idx]} value={sex} onClick={onClickHandler}>
            {sex}
          </Row>
        ))}
      </Rows>
    </>
  );
}
