import React, { useEffect, useState } from "react";
import { useCreateAnswerActions, useCreateAnswerValue } from "../answerState";
import { QuestionOption, QuestionText, QuestionWrapper } from "../styled";

export default function OXQuestionItem({ item, survey }) {
  const oxAnswers = useCreateAnswerValue().oxAnswers;
  const oxAnswerValidate = useCreateAnswerValue().oxAnswerValidate;
  const { addOXAnswer, setOXAnswers, setOXAnswerValidate } =
    useCreateAnswerActions();

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  const [oxAnswer, setOXAnswer] = useState({
    questionId: item.questionId,
    isYes: null,
  });

  const index = oxAnswers.findIndex(
    (listItem) => listItem.questionId === oxAnswer.questionId
  );

  const qIndex = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  const yes = `${item.questionId} yes`;
  const no = `${item.questionId} no`;

  useEffect(() => {
    addOXAnswer(oxAnswer);
  }, []);

  const onClickHandler = (event) => {
    prevClick === null
      ? setOXAnswerValidate(oxAnswerValidate + 1)
      : setOXAnswerValidate(oxAnswerValidate);

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

    const newList = replaceItemAtIndex(oxAnswers, index, {
      ...oxAnswer,
      isYes: event.target.value,
    });
    setOXAnswers(newList);
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
      <QuestionText color="#0064ff">Q{qIndex + 1}</QuestionText>
      <QuestionText color="black">{item.title}</QuestionText>
      <QuestionOption id={yes} value={true} onClick={onClickHandler}>
        네 😀
      </QuestionOption>
      <QuestionOption id={no} value={false} onClick={onClickHandler}>
        아니오 😭
      </QuestionOption>
    </QuestionWrapper>
  );
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
