import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  EssayAnswerListState,
  essayAnswerValidateCount,
  surveyForSubmit,
} from "../../../../atoms";
import { Answer, QuestionText, QuestionWrapper } from "../styled";

export default function EssayQuestionItem({ item }) {
  const [essayAnswerList, setEssayAnswerList] =
    useRecoilState(EssayAnswerListState);
  const [essayValidateCount, setEssayValidateCount] = useRecoilState(
    essayAnswerValidateCount
  );
  const [essayAnswer, setEssayAnswer] = useState({
    questionId: item.questionId,
    answerContent: "",
  });
  const [prevAnswer, setPrevAnswer] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");

  const index = essayAnswerList.findIndex(
    (listItem) => listItem.questionId === essayAnswer.questionId
  );

  const survey = useRecoilValue(surveyForSubmit);
  const qIndex = survey.data.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  useEffect(() => {
    setEssayAnswerList((oldEssayAnswerList) => [
      ...oldEssayAnswerList,
      essayAnswer,
    ]);
  }, []);

  const onChange = ({ target: { value } }) => {
    value.length === 0 && prevAnswer.length === 1
      ? setEssayValidateCount(essayValidateCount - 1)
      : value.length === 1 && prevAnswer.length === 0
      ? setEssayValidateCount(essayValidateCount + 1)
      : setEssayValidateCount(essayValidateCount);

    setCurrentAnswer(value);

    setEssayAnswer({ questionId: item.questionId, answerContent: value });

    const newList = replaceItemAtIndex(essayAnswerList, index, {
      ...essayAnswer,
      answerContent: value,
    });
    setEssayAnswerList(newList);
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
