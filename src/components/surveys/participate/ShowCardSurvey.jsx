import React from "react";
import styled from "styled-components";
import CardQuestionItem from "./CardQuestionItem";
import CardQuestionItemDisabled from "./CardQuestionItemDisabled";

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

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  float: right;
  display: flex;
  flex-direction: column;
  background-color: #202632;
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

export default function ShowCardSurvey({ survey }) {
  console.log(survey);
  return (
    <Wrapper>
      <TitleText>{survey.title}</TitleText>
      <SummaryText>{survey.summary}</SummaryText>
      {survey.questions.map((question, index) => (
        <Section>
          <CardQuestionItemDisabled
            key={question.questionId}
            item={question}
            multiquestion={survey.multiQuestions}
          ></CardQuestionItemDisabled>
        </Section>
      ))}
    </Wrapper>
  );
}
