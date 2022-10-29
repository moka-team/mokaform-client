import React from "react";
import { Preview, TitleText, SummaryText } from "../../common/styled";
import { useRecoilValue } from "recoil";
import { surveyTitle, surveySummary, surveyListState } from "../../../../atoms";

import SurveyPreviewItem from "./SurveyPreviewItem";
export default function PreviewSection() {
  const title = useRecoilValue(surveyTitle);
  const summary = useRecoilValue(surveySummary);

  const surveyList = useRecoilValue(surveyListState);

  return (
    <Preview>
      <TitleText>{title}</TitleText>
      <SummaryText>{summary}</SummaryText>
      {surveyList.map((surveyItem) => (
        <SurveyPreviewItem key={surveyItem.index} item={surveyItem} />
      ))}
    </Preview>
  );
}
