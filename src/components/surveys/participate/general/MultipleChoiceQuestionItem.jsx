import React, { useEffect, useState } from "react";
import { useCreateAnswerActions, useCreateAnswerValue } from "../answerState";
import { QuestionOption, QuestionText, QuestionWrapper } from "../styled";

export default function MultipleChoiceQuestionItem({
  item,
  multiquestion,
  survey,
}) {
  console.log(survey);
  console.log(multiquestion);
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
    <QuestionWrapper>
      <QuestionText color="#0064ff">Q{qIndex + 1}</QuestionText>
      <QuestionText color="black">{item.title}</QuestionText>
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
    </QuestionWrapper>
  );
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
