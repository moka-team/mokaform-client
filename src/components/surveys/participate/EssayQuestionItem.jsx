import React, { useEffect, useState } from "react";
import { QuestionWrapper, QuestionText, Answer } from "./styled";
import { EssayAnswerListState, isEssayAnswerValidate } from "../../../atoms";
import { useRecoilState } from "recoil";

export default function EssayQuestionItem({ item }) {
  const [essayAnswerList, setEssayAnswerList] =
    useRecoilState(EssayAnswerListState);
  const [isEssayValidate, setIsEssayValidate] = useRecoilState(
    isEssayAnswerValidate
  );
  const [essayAnswer, setEssayAnswer] = useState({
    questionId: item.questionId,
    answerContent: "",
  });

  const index = essayAnswerList.findIndex(
    (listItem) => listItem.questionId === essayAnswer.questionId
  );

  useEffect(() => {
    setEssayAnswerList((oldEssayAnswerList) => [
      ...oldEssayAnswerList,
      essayAnswer,
    ]);
  }, []);

  const onChange = ({ target: { value } }) => {
    value.length === 0 ? setIsEssayValidate(false) : setIsEssayValidate(true);

    setEssayAnswer({ questionId: item.questionId, answerContent: value });

    const newList = replaceItemAtIndex(essayAnswerList, index, {
      ...essayAnswer,
      answerContent: value,
    });
    setEssayAnswerList(newList);
  };

  return (
    <QuestionWrapper>
      <QuestionText color="#0064ff">Q{item.index + 1}</QuestionText>
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
