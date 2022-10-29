import React from "react";
import { useRecoilValue } from "recoil";
import { surveyListState, surveySummary, surveyTitle } from "../../../../atoms";
import { Preview, SummaryText, TitleText } from "../../common/styled";

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
