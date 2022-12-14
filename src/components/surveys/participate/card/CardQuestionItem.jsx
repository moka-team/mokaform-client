import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  multiChoiceAnswerValidateCount,
  MultipleChoiceAnswerListState,
  surveyForSubmit,
} from "../../../../atoms";
import {
  QuestionContentWrapper,
  QuestionOption,
  QuestionText,
} from "../../create/card/styled";
import { useCreateAnswerActions, useCreateAnswerValue } from "../answerState";

const QWrapper = styled.div`
  width: 50%;
  margin-top: 25px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 20px 35px 20px 35px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function CardQuestionItem({ item, multiquestion, survey }) {
  const multipleChoiceAnswers = useCreateAnswerValue().multipleChoiceAnswers;
  const multipleChoiceAnswerValidate =
    useCreateAnswerValue().multipleChoiceAnswerValidate;
  const {
    addMultipleChoiceAnswer,
    setMultipleChoiceAnswers,
    setMultipleChoiceAnswerValidate,
  } = useCreateAnswerActions();
  const [multiChoiceAnswer, setMultiChoiceAnswer] = useState({
    questionId: item.questionId,
    multiQuestionId: -1,
  });

  const index = multipleChoiceAnswers.findIndex(
    (listItem) => listItem.questionId === multiChoiceAnswer.questionId
  );

  const qIndex = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  useEffect(() => {
    addMultipleChoiceAnswer(multiChoiceAnswer);
  }, []);

  const onClickHandler = (event) => {
    prevClick === null
      ? setMultipleChoiceAnswerValidate(multipleChoiceAnswerValidate + 1)
      : setMultipleChoiceAnswerValidate(multipleChoiceAnswerValidate);

    if (prevClick !== null && prevClick !== event.target.id) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "black";
      prev.style.fontWeight = 400;
      prev.style.backgroundColor = "#edeef0";
    }

    setCurrentClick(event.target.id);

    setMultiChoiceAnswer({
      questionId: item.questionId,
      multiQuestionId: event.target.id,
    });

    const newList = replaceItemAtIndex(multipleChoiceAnswers, index, {
      ...multiChoiceAnswer,
      multiQuestionId: event.target.id,
    });
    setMultipleChoiceAnswers(newList);
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
    <QWrapper>
      <QuestionText color="#0064ff">Q{qIndex + 1}</QuestionText>
      <QuestionText color="white">{item.title}</QuestionText>
      <QuestionContentWrapper>
        {multiquestion
          .filter(
            (multiQuestionItem) =>
              item.questionId === multiQuestionItem.questionId
          )
          .map((multiQuestion) => (
            <QuestionOption
              id={multiQuestion.multiQuestionId}
              key={multiQuestion.multiQuestionId}
              onClick={onClickHandler}
              value={multiQuestion.multiQuestionContent}
            >
              {multiQuestion.multiQuestionContent}
            </QuestionOption>
          ))}
      </QuestionContentWrapper>
    </QWrapper>
  );
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
