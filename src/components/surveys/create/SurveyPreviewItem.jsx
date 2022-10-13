import React from "react";
import { surveyListState, detailMCQuestionState } from "../../../atoms";
import { useRecoilValue } from "recoil";
import {
  QuestionWrapper,
  QuestionOption,
  QuestionText,
  Answer,
} from "./styled";

export default function SurveyPreviewItem({ item }) {
  const detailQuestionList = useRecoilValue(detailMCQuestionState);
  const surveyList = useRecoilValue(surveyListState);
  const index = surveyList.findIndex((listItem) => listItem === item);

  return (
    <div>
      {" "}
      <div>
        {item.type === "ESSAY" ? (
          <QuestionWrapper>
            <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
            <QuestionText color="black">{item.text}</QuestionText>
            <Answer placeholder="의견을 적어주세요!"></Answer>
          </QuestionWrapper>
        ) : item.type === "OX" ? (
          <QuestionWrapper>
            <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
            <QuestionText color="black">{item.text}</QuestionText>
            <QuestionOption name={item.id}>네 😀</QuestionOption>
            <QuestionOption name={item.id}>아니오 🥲</QuestionOption>
          </QuestionWrapper>
        ) : (
          <QuestionWrapper>
            <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
            <QuestionText color="black">{item.text}</QuestionText>
            {detailQuestionList.map((detailQuestionItem) =>
              item.id === detailQuestionItem.survey_id ? (
                <QuestionOption>{detailQuestionItem.text}</QuestionOption>
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
