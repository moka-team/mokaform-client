import { current } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Title, Row, Rows } from "./SignUpCSS";
import { genderState } from "./SignUpState";

export default function SexRow() {
  const sex = ["여성", "남성"];
  const ids = ["FEMALE", "MALE"];

  const [gender, setGender] = useRecoilState(genderState);

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

    setGender(event.target.id);
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
          <Row
            color="white"
            key={ids[idx]}
            id={ids[idx]}
            value={sex}
            onClick={onClickHandler}
          >
            {sex}
          </Row>
        ))}
      </Rows>
    </>
  );
}
