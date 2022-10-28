import React from "react";
import { Preview, TitleText, SummaryText } from "../create/styled";
import { useRecoilValue } from "recoil";
import { surveyTitle, surveySummary, surveyListState } from "../../../atoms";
import SurveyPreviewItem from "./SurveyPreviewItem";
import styled from "styled-components";
import { Wrapper } from "./styled";

const Section = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background-color: #202632;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: -5%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
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
    <Wrapper>
      {surveyList.map((surveyItem) => (
        <Section>
          <SurveyPreviewItem key={surveyItem.index} item={surveyItem} />
          <Button>다음</Button>
        </Section>
      ))}
    </Wrapper>
  );
}
