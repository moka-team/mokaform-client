import { React, useState } from "react";
import { Create, Title, Summary } from "./styled";
import SurveyItemCreator from "./SurveyItemCreator";
import { surveyTitle, surveySummary, surveyListState } from "../../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import SurveyCreateItem from "./SurveyCreateItem";

export default function CreateSection() {
  const surveyList = useRecoilValue(surveyListState);

  const [title, setTitle] = useRecoilState(surveyTitle);
  const [summary, setSummary] = useRecoilState(surveySummary);

  const titleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const summaryOnChange = (event) => {
    setSummary(event.target.value);
  };

  return (
    <Create>
      <Title
        placeholder="설문 제목을 입력해주세요."
        onChange={titleOnChange}
      ></Title>
      <Summary
        placeholder="설문 설명을 입력해주세요."
        onChange={summaryOnChange}
      ></Summary>
      {surveyList.map((surveyItem) => (
        <SurveyCreateItem key={surveyItem.index} item={surveyItem} />
      ))}
      <SurveyItemCreator></SurveyItemCreator>
    </Create>
  );
}
