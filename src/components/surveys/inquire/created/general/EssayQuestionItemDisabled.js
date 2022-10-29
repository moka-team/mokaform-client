import React from "react";
import { surveyForCreated } from "../../../../../atoms";
import {
  QuestionWrapper,
  QuestionText,
  Answer,
} from "../../../participate/styled";
import { useRecoilValue } from "recoil";

export default function EssayQuestionItemDisabled({ item }) {
  const survey = useRecoilValue(surveyForCreated);

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
