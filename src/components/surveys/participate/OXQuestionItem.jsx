import React, { useState, useEffect } from "react";
import { QuestionWrapper, QuestionOption, QuestionText } from "./styled";
import {
  oxAnswerListState,
  oxAnswerValidateCount,
  surveyForSubmit,
} from "../../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export default function OXQuestionItem({ item }) {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const [oxAnswerList, setOXAnswerList] = useRecoilState(oxAnswerListState);
  const [oxValidateCount, setOXValidateCount] = useRecoilState(
    oxAnswerValidateCount
  );
  const [oxAnswer, setOXAnswer] = useState({
    questionId: item.questionId,
    isYes: null,
  });

  const survey = useRecoilValue(surveyForSubmit);
  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  const yes = `${item.questionId} yes`;
  const no = `${item.questionId} no`;

  useEffect(() => {
    setOXAnswerList((oldOXAnswerList) => [...oldOXAnswerList, oxAnswer]);
  }, []);

  const onClickHandler = (event) => {
    prevClick === null
      ? setOXValidateCount(oxValidateCount + 1)
      : setOXValidateCount(oxValidateCount);

    if (prevClick !== null && prevClick !== event.target.id) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "black";
      prev.style.fontWeight = 400;
      prev.style.backgroundColor = "#edeef0";
    }

    setCurrentClick(event.target.id);

    setOXAnswer({
      questionId: item.questionId,
      isYes: event.target.value,
    });

    const newList = replaceItemAtIndex(oxAnswerList, index, {
      ...oxAnswer,
      isYes: event.target.value,
    });
    setOXAnswerList(newList);
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
      <QuestionOption id={yes} value={true} onClick={onClickHandler}>
        네 😀
      </QuestionOption>
      <QuestionOption id={no} value={false} onClick={onClickHandler}>
        아니오 🥲
      </QuestionOption>
    </QuestionWrapper>
  );
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
