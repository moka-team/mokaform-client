import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Title, Row, Rows } from "./SignUpCSS";
import { preferenceState } from "./SignUpState";

export default function InterestRow() {
  const interests = ["일상", "IT", "취미", "학습"];
  const interests2 = ["심리", "사회·정치", "선호도 조사", "+"];

  const ids = [
    "DAILY_LIFE",
    "IT",
    "HOBBY",
    "LEARNING",
    "PSYCHOLOGY",
    "SOCIAL_POLITICS",
    "PREFERENCE_RESEARCH",
    "interest_8",
  ];

  const [preference, setPreference] = useRecoilState(preferenceState);

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
    setPreference(event.target.id);
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
            color="#f9fafb"
            key={ids[idx]}
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
            color="#f9fafb"
            key={ids[idx + 4]}
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
