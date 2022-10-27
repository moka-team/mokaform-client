import React from "react";
import { Create, Summary, Title } from "../create/styled";
import { surveyTitle, surveySummary, surveyListState } from "../../../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SurveyCreateItem from "./SurveyCreateItem";
import SurveyItemCreator from "./SurveyItemCreator";
export default function CreateSection() {
  const surveyList = useRecoilValue(surveyListState);
  const setTitle = useSetRecoilState(surveyTitle);
  const setSummary = useSetRecoilState(surveySummary);

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
        <SurveyCreateItem
          key={surveyItem.index}
          item={surveyItem}
        ></SurveyCreateItem>
      ))}
      <SurveyItemCreator></SurveyItemCreator>
    </Create>
  );
}
