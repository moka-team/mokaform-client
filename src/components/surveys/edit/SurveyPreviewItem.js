import React from "react";
import {
  Answer,
  QuestionOption,
  QuestionText,
  QuestionWrapper,
} from "../common/styled";
import { useEditSurveyValue } from "./surveyState";

export default function SurveyPreviewItem({ item }) {
  const survey = useEditSurveyValue();
  const index = survey.questions.findIndex((listItem) => listItem === item);

  return (
    <div>
      {" "}
      <div>
        {item.type === "ESSAY" ? (
          <QuestionWrapper>
            <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
            <QuestionText color="black">{item.title}</QuestionText>
            <Answer placeholder="의견을 적어주세요!"></Answer>
          </QuestionWrapper>
        ) : item.type === "OX" ? (
          <QuestionWrapper>
            <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
            <QuestionText color="black">{item.title}</QuestionText>
            <QuestionOption>네 😀</QuestionOption>
            <QuestionOption>아니오 😭</QuestionOption>
          </QuestionWrapper>
        ) : (
          <QuestionWrapper>
            <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
            <QuestionText color="black">{item.title}</QuestionText>
            {survey.multiQuestions.map((detailQuestionItem) =>
              item.questionId === detailQuestionItem.questionId ? (
                <QuestionOption>
                  {detailQuestionItem.multiQuestionContent}
                </QuestionOption>
              ) : (
                <></>
              )
            )}
          </QuestionWrapper>
        )}
      </div>
    </div>
  );
}
