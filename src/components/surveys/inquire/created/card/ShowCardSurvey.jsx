import React from "react";
import {
  Section,
  SummaryText,
  TitleText,
  Wrapper,
} from "../../submitted/styled";
import CardQuestionItemDisabled from "./CardQuestionItemDisabled";

export default function ShowCardSurvey({ survey }) {
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
