import React from "react";
import { QuestionWrapper, QuestionText, Answer } from "./styled";

export default function EssayQuestionItem({ item }) {
  return (
    <QuestionWrapper>
      <QuestionText color="#0064ff">Q{item.index}</QuestionText>
      <QuestionText color="black">{item.title}</QuestionText>
      <Answer placeholder="의견을 적어주세요!"></Answer>
    </QuestionWrapper>
  );
}
