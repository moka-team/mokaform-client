import { React, useState } from "react";
import { Create, Title, Summary } from "./styled";
import SurveyItemCreator from "./SurveyItemCreator";
import {
  surveyTitle,
  surveySummary,
  surveyIsAnonymous,
  surveyIsPublic,
  surveyListState,
} from "../../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import SurveyCreateItem from "./SurveyCreateItem";

export default function CreateSection() {
  const surveyList = useRecoilValue(surveyListState);

  const [title, setTitle] = useRecoilState(surveyTitle);
  const [summary, setSummary] = useRecoilState(surveySummary);
  const [isAnonymous, setIsAnonymous] = useRecoilState(surveyIsAnonymous);
  const [isPublic, setIsPublic] = useRecoilState(surveyIsPublic);

  const titleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const summaryOnChange = (event) => {
    setSummary(event.target.value);
  };

  const isAnonymousOnChange = (event) => {
    setIsAnonymous(event.target.value);
  };

  const isPublicOnChange = (event) => {
    setIsPublic(event.target.value);
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
        <SurveyCreateItem key={surveyItem.id} item={surveyItem} />
      ))}
      <SurveyItemCreator></SurveyItemCreator>
    </Create>
  );
}
