import React from "react";
import { useRecoilValue } from "recoil";
import { surveyForSubmitted } from "../../../../../atoms";
import styled from "styled-components";
import CardQuestionItem from "./CardQuestionItem";

const Section = styled.div`
  height: calc(var(--vh, 1vh) * 75);
  background-color: #202632;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: -5%;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  margin-top: 7%;
  font-weight: 900;
  font-size: xx-large;
  border: none;
  color: white;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const SummaryText = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: medium;
  border: none;
  color: white;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  float: right;
  display: flex;
  flex-direction: column;
  background-color: #202632;
`;

export default function CardSubmitted({ sharingKey }) {
  const survey = useRecoilValue(surveyForSubmitted);

  return (
    <>
      <Wrapper>
        <TitleText>{survey.title}</TitleText>
        <SummaryText>{survey.summary}</SummaryText>
        {survey.questions.map((question) => (
          <Section>
            <CardQuestionItem
              key={question.questionId}
              item={question}
              multiquestion={survey.multiQuestions}
              sharingKey={sharingKey}
            ></CardQuestionItem>
          </Section>
        ))}
      </Wrapper>
    </>
  );
}
