import React from "react";
import { useState, useRef } from "react";
import { Preview, TitleText, SummaryText } from "./styled";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  surveyTitle,
  surveySummary,
  surveyIsAnonymous,
  surveyIsPublic,
  surveyListState,
} from "../../../atoms";

import SurveyPreviewItem from "./SurveyPreviewItem";
export default function PreviewSection() {
  const title = useRecoilValue(surveyTitle);
  const summary = useRecoilValue(surveySummary);
  const isAnonymous = useRecoilValue(surveyIsAnonymous);
  const isPublic = useRecoilValue(surveyIsPublic);

  const surveyList = useRecoilValue(surveyListState);

  return (
    <Preview>
      <TitleText>{title}</TitleText>
      <SummaryText>{summary}</SummaryText>
      {surveyList.map((surveyItem) => (
        <SurveyPreviewItem key={surveyItem.id} item={surveyItem} />
      ))}
    </Preview>
  );
}
