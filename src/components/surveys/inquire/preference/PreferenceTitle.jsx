import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 600;
  padding-top: 3ch;
  padding-bottom: 1ch;
  font-size: 20px;
  color: ${(props) => props.color};
`;

function convertCategory(category) {
  switch (category) {
    case "HOBBY":
      return "취미";
    case "DAILY_LIFE":
      return "일상";
    case "IT":
      return "IT";
    case "LEARNING":
      return "학습";
    case "PSYCHOLOGY":
      return "심리";
    case "SOCIAL_POLITICS":
      return "사회·정치";
    case "PREFERENCE_RESEARCH":
      return "선호도 조사";
    case "PET":
      return "반려동물";
    default:
      return "";
  }
}

export default function PreferenceTitle({ text }) {
  return (
    <Stack direction="row">
      <Title color={"#0064FF"}>#{convertCategory(text)}</Title>
      <Title color={"#202632"}>&nbsp;관련 설문</Title>
    </Stack>
  );
}
