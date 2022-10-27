import React from "react";
import { Summary, Title } from "../create/styled";
import { surveyTitle, surveySummary, surveyListState } from "../../../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SurveyCreateItem from "./SurveyCreateItem";
import SurveyItemCreator from "./SurveyItemCreator";
import styled from "styled-components";
export default function CreateSection() {
  const surveyList = useRecoilValue(surveyListState);
  const setTitle = useSetRecoilState(surveyTitle);
  const setSummary = useSetRecoilState(surveySummary);

  const Create = styled.div`
    display: flex;
    width: 35%;
    min-height: 100%;
    flex-direction: column;
    background-color: #202632;
    color: white;
    float: left;
    padding: 2% 2%;
    h1 {
      font-size: large;
      font-weight: 800;
      margin-top: 25px;
    }
  `;

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
