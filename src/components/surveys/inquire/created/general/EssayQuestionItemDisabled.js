import React from "react";
import {
  Answer,
  QuestionText,
  QuestionWrapper,
} from "../../../participate/styled";

export default function EssayQuestionItemDisabled({ item, survey }) {
  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  return (
    <QuestionWrapper>
      <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
      <QuestionText color="black">{item.title}</QuestionText>
      <Answer disabled placeholder="의견을 적어주세요!"></Answer>
    </QuestionWrapper>
  );
}
