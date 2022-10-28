import React from "react";
import { surveyListState, detailMCQuestionState } from "../../../atoms";
import { useRecoilValue } from "recoil";
import {
  QuestionWrapper,
  QuestionOption,
  QuestionText,
  OptionWrapper,
} from "./styled";

export default function SurveyPreviewItem({ item }) {
  const detailQuestionList = useRecoilValue(detailMCQuestionState);
  const surveyList = useRecoilValue(surveyListState);
  const index = surveyList.findIndex((listItem) => listItem === item);
  return (
    <>
      <QuestionWrapper>
        <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
        <QuestionText color="white">{item.title}</QuestionText>
        {detailQuestionList.map((detailQuestionItem) =>
          item.index === detailQuestionItem.questionIndex ? (
            <QuestionOption>{detailQuestionItem.content}</QuestionOption>
          ) : (
            <></>
          )
        )}
      </QuestionWrapper>
    </>
  );
}