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
    <Create bgColor="#f5f6fa" width="30%">
      <Title
        placeholder="설문 제목을 입력해주세요."
        onChange={titleOnChange}
        bgColor="#f5f6fa"
        tcolor="#202632"
        mTop="15%"
      ></Title>
      <Summary
        placeholder="설문 설명을 입력해주세요."
        onChange={summaryOnChange}
        bgColor="#f5f6fa"
        tcolor="#202632"
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
