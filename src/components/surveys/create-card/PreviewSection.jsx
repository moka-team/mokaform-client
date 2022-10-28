import React from "react";
import { Preview, TitleText, SummaryText } from "../create/styled";
import { useRecoilValue } from "recoil";
import { surveyTitle, surveySummary, surveyListState } from "../../../atoms";
import SurveyPreviewItem from "./SurveyPreviewItem";

export default function PreviewSection() {
  const title = useRecoilValue(surveyTitle);
  const summary = useRecoilValue(surveySummary);
  const surveyList = useRecoilValue(surveyListState);

  return (
    <Preview width="55%" bgColor="#202632">
      <TitleText bgColor="#202632" tcolor="white" mTop="9%">
        {title}
      </TitleText>
      <SummaryText bgColor="#202632" tcolor="white">
        {summary}
      </SummaryText>
      {surveyList.map((surveyItem) => (
        <SurveyPreviewItem key={surveyItem.index} item={surveyItem} />
      ))}
    </Preview>
  );
}
