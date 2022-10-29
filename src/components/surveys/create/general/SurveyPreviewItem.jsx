import React from "react";
import { useRecoilValue } from "recoil";
import { detailMCQuestionState, surveyListState } from "../../../../atoms";
import {
  Answer,
  QuestionOption,
  QuestionText,
  QuestionWrapper,
} from "../../common/styled";

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
            {detailQuestionList.map((detailQuestionItem) =>
              item.index === detailQuestionItem.questionIndex ? (
                <QuestionOption>{detailQuestionItem.content}</QuestionOption>
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
