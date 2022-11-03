import React from "react";
import { useRecoilValue } from "recoil";
import { surveyListState } from "../../../../atoms";
import { Preview, SummaryText, TitleText } from "../../common/styled";
import { useCreateSurveyValue } from "../surveyState";

import SurveyPreviewItem from "./SurveyPreviewItem";
export default function PreviewSection() {
  const survey = useCreateSurveyValue();

  return (
    <Preview>
      <TitleText>{survey.title}</TitleText>
      <SummaryText>{survey.summary}</SummaryText>
      {survey.questions.map((surveyItem) => (
        <SurveyPreviewItem key={surveyItem.index} item={surveyItem} />
      ))}
    </Preview>
  );
}
