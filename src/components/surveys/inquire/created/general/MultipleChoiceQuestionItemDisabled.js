import React, { useEffect, useState } from "react";
import {
  QuestionOption,
  QuestionText,
  QuestionWrapper,
} from "../../../participate/styled";

export default function MultipleChoiceQuestionItemDisabled({ item, survey }) {
  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

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
      <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
      <QuestionText color="black">{item.title}</QuestionText>
      {survey.multiQuestions
        .filter(
          (multiQuestionItem) =>
            item.questionId === multiQuestionItem.questionId
        )
        .map((multiQuestion) => (
          <QuestionOption
            disabled
            id={multiQuestion.multiQuestionId}
            key={multiQuestion.multiQuestionId}
            onClick={onClickHandler}
            value={multiQuestion.multiQuestionContent}
            style={{ pointerEvents: "none" }}
          >
            {multiQuestion.multiQuestionContent}
          </QuestionOption>
        ))}
    </QuestionWrapper>
  );
}
