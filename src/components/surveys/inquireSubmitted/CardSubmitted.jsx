import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { surveyForSubmitted } from "../../../atoms";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import MultipleChoiceQuestionItem from "./MultipleChoiceQuestionItem";
import PreviewSection from "../create-card/PreviewSection";
import styled from "styled-components";
import CardQuestionItem from "./CardQuestionItem";

const Section = styled.div`
  height: calc(var(--vh, 1vh) * 75);
  background-color: #202632;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: -5%;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  margin-top: 7%;
  font-weight: 900;
  font-size: xx-large;
  border: none;
  color: white;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const SummaryText = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: medium;
  border: none;
  color: white;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  float: right;
  display: flex;
  flex-direction: column;
  background-color: #202632;
`;

export default function CardSubmitted({ sharingKey }) {
  const cardRef = useRef([]);
  const [survey, setSurvey] = useRecoilState(surveyForSubmitted);
  const [successDialogOpen, setSuccessDialogOpen] = useState(true);

  const onClickHandler = (index) => {
    cardRef.current[index + 1]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Wrapper>
        <TitleText>{survey.title}</TitleText>
        <SummaryText>{survey.summary}</SummaryText>
        {survey.questions.map((question) => (
          <Section>
            <CardQuestionItem
              key={question.questionId}
              item={question}
              multiquestion={survey.multiQuestions}
              sharingKey={sharingKey}
            ></CardQuestionItem>
          </Section>
        ))}
      </Wrapper>
    </>
  );
}
