import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {
  QuestionWrapper,
  QuestionOption,
  QuestionText,
  QuestionContentWrapper,
} from "../../../create/card/styled";
import { surveyForCreated } from "../../../../../atoms";
import { useRecoilValue } from "recoil";

const QWrapper = styled.div`
  width: 50%;
  padding: 20px 35px 20px 35px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function CardQuestionItemDisabled({ item, multiquestion }) {
  const survey = useRecoilValue(surveyForCreated);

  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  return (
    <QWrapper>
      <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
      <QuestionText color="white">{item.title}</QuestionText>
      <QuestionContentWrapper>
        {multiquestion
          .filter(
            (multiQuestionItem) =>
              item.questionId === multiQuestionItem.questionId
          )
          .map((multiQuestion) => (
            <QuestionOption
              disabled
              id={multiQuestion.multiQuestionId}
              key={multiQuestion.multiQuestionId}
              value={multiQuestion.multiQuestionContent}
              style={{ pointerEvents: "none" }}
            >
              {multiQuestion.multiQuestionContent}
            </QuestionOption>
          ))}
      </QuestionContentWrapper>
    </QWrapper>
  );
}
