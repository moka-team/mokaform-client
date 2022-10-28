import React from "react";
import { Preview, TitleText, SummaryText } from "../create/styled";
import { useRecoilValue } from "recoil";
import { surveyTitle, surveySummary, surveyListState } from "../../../atoms";
import SurveyPreviewItem from "./SurveyPreviewItem";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  border-radius: 10px;
  padding: 20px 35px 20px 25px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 415px;
  height: 50px;
  margin: 10px;
  margin-top: 45px;
  border-radius: 10px;
  border: none;
  background-color: #286bd0;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #0064ff;
  }
  &:disabled {
    background-color: gray;
  }
`;

export default function PreviewSection() {
  const title = useRecoilValue(surveyTitle);
  const summary = useRecoilValue(surveySummary);
  const surveyList = useRecoilValue(surveyListState);

  return (
    <Preview width="70%" bgColor="#202632">
      {/* <TitleText bgColor="#202632" tcolor="white" mTop="9%">
        {title}
      </TitleText>
      <SummaryText bgColor="#202632" tcolor="white">
        {summary}
      </SummaryText> */}
      {surveyList.map((surveyItem) => (
        <Section>
          <SurveyPreviewItem key={surveyItem.index} item={surveyItem} />
          <Button>다음</Button>
        </Section>
      ))}
    </Preview>
  );
}
