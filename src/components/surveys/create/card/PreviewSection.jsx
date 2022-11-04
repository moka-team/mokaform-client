import React from "react";
import { useCreateSurveyValue } from "../surveyState";
import { Button, Section, Wrapper } from "./styled";
import SurveyPreviewItem from "./SurveyPreviewItem";

export default function PreviewSection() {
  const survey = useCreateSurveyValue();

  return (
    <Wrapper>
      {survey.questions.map((surveyItem) => (
        <Section>
          <SurveyPreviewItem key={surveyItem.index} item={surveyItem} />
          <Button>다음</Button>
        </Section>
      ))}
    </Wrapper>
  );
}
