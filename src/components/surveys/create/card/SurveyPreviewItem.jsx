import React from "react";
import { useCreateSurveyValue } from "../surveyState";
import {
  QuestionContentWrapper,
  QuestionOption,
  QuestionText,
  QuestionWrapper,
} from "./styled";

export default function SurveyPreviewItem({ item }) {
  const survey = useCreateSurveyValue();
  const index = survey.questions.findIndex((listItem) => listItem === item);

  return (
    <>
      <QuestionWrapper>
        <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
        <QuestionText color="white">{item.title}</QuestionText>
        <QuestionContentWrapper>
          {survey.multiQuestions.map((detailQuestionItem) =>
            item.index === detailQuestionItem.questionIndex ? (
              <QuestionOption>{detailQuestionItem.content}</QuestionOption>
            ) : (
              <></>
            )
          )}
        </QuestionContentWrapper>
      </QuestionWrapper>
    </>
  );
}
