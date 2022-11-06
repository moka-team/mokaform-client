import React, { useEffect, useState } from "react";
import { useCreateAnswerActions, useCreateAnswerValue } from "../answerState";
import { Answer, QuestionText, QuestionWrapper } from "../styled";

export default function EssayQuestionItem({ item, survey }) {
  const essayAnswers = useCreateAnswerValue().essayAnswers;
  const essayAnswerValidate = useCreateAnswerValue().essayAnswerValidate;
  const { addEssayAnswer, setEssayAnswers, setEssayAnswerValidate } =
    useCreateAnswerActions();

  const [essayAnswer, setEssayAnswer] = useState({
    questionId: item.questionId,
    answerContent: "",
  });
  const [prevAnswer, setPrevAnswer] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");

  const index = essayAnswers.findIndex(
    (listItem) => listItem.questionId === essayAnswer.questionId
  );

  const qIndex = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  useEffect(() => {
    addEssayAnswer(essayAnswer);
  }, []);

  const onChange = ({ target: { value } }) => {
    value.length === 0 && prevAnswer.length === 1
      ? setEssayAnswerValidate(essayAnswerValidate - 1)
      : value.length === 1 && prevAnswer.length === 0
      ? setEssayAnswerValidate(essayAnswerValidate + 1)
      : setEssayAnswerValidate(essayAnswerValidate);

    setCurrentAnswer(value);

    setEssayAnswer({ questionId: item.questionId, answerContent: value });

    const newList = replaceItemAtIndex(essayAnswers, index, {
      ...essayAnswer,
      answerContent: value,
    });
    setEssayAnswers(newList);
  };

  useEffect(
    (event) => {
      setPrevAnswer(currentAnswer);
    },
    [currentAnswer]
  );

  return (
    <QuestionWrapper>
      <QuestionText color="#0064ff">Q{qIndex + 1}</QuestionText>
      <QuestionText color="black">{item.title}</QuestionText>
      <Answer
        onChange={onChange}
        value={essayAnswer.answerContent}
        placeholder="의견을 적어주세요!"
      ></Answer>
    </QuestionWrapper>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
