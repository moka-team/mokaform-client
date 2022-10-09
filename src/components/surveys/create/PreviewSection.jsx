import React from "react";
import { useState, useRef } from "react";
import { Preview } from "./styled";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { surveyListState } from "../../../atoms";
import SurveyPreviewItem from "./SurveyPreviewItem";
export default function PreviewSection() {
  const surveyList = useRecoilValue(surveyListState);

  return (
    <Preview>
      <h1>설문 제목</h1>
      {surveyList.map((surveyItem) => (
        <SurveyPreviewItem key={surveyItem.id} item={surveyItem} />
      ))}
    </Preview>
  );
}
