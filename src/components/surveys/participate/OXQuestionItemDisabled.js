import React, { useState, useEffect } from "react";
import { QuestionWrapper, QuestionOption, QuestionText } from "./styled";

export default function OXQuestionItemDisabled({ item }) {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const onClickHandler = (event) => {
    if (prevClick !== null && prevClick !== event.target.id) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "black";
      prev.style.fontWeight = 400;
      prev.style.backgroundColor = "#edeef0";
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
    <QuestionWrapper>
      <QuestionText color="#0064ff">Q{item.index + 1}</QuestionText>
      <QuestionText color="black">{item.title}</QuestionText>
      <QuestionOption
        disabled
        id="yes"
        value={true}
        onClick={onClickHandler}
        style={{ pointerEvents: "none" }}
      >
        네 😀
      </QuestionOption>
      <QuestionOption
        disabled
        id="no"
        value={false}
        onClick={onClickHandler}
        style={{ pointerEvents: "none" }}
      >
        아니오 🥲
      </QuestionOption>
    </QuestionWrapper>
  );
}
