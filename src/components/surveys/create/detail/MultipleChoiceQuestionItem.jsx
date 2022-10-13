import React, { useState, useEffect } from "react";
import {
  QuestionWrapper,
  QuestionOption,
  QuestionText,
  Answer,
} from "./styled";

export default function MultipleChoiceQuestionItem({ item, multiquestion }) {
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
      {multiquestion.map((multiQuestionItem) =>
        item.questionId === multiQuestionItem.questionId ? (
          <QuestionOption
            id={item.questionId + "" + (multiQuestionItem.index + "")}
            onClick={onClickHandler}
            value={multiQuestionItem.content}
          >
            {multiQuestionItem.content}
          </QuestionOption>
        ) : (
          <></>
        )
      )}
    </QuestionWrapper>
  );
}
