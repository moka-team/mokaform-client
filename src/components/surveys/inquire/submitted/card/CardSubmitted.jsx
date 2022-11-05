import React from "react";
import { useRecoilValue } from "recoil";
import { surveyForSubmitted } from "../../../../../atoms";
import { Section, SummaryText, TitleText, Wrapper } from "../styled";
import CardQuestionItem from "./CardQuestionItem";

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
