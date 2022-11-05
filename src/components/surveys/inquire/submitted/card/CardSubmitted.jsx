import React from "react";
import { Section, SummaryText, TitleText, Wrapper } from "../styled";
import CardQuestionItem from "./CardQuestionItem";

export default function CardSubmitted({ sharingKey, survey }) {
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
              sharingKey={sharingKey}
              survey={survey}
            ></CardQuestionItem>
          </Section>
        ))}
      </Wrapper>
    </>
  );
}
