import React from "react";
import {
  Wrapper,
  TitleText,
  SummaryText,
  Section,
} from "../../submitted/styled";
import CardQuestionItemDisabled from "./CardQuestionItemDisabled";

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
