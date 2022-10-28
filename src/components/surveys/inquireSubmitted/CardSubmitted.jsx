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
  height: calc(var(--vh, 1vh) * 100);
  background-color: #202632;
  width: 100%;
  border-radius: 10px;
  padding: 20px 35px 20px 25px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const NextButton = styled.button`
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

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  float: right;
  display: flex;
  flex-direction: column;
  background-color: #202632;
`;

export default function CardSubmitted() {
  const cardRef = useRef([]);
  const [survey, setSurvey] = useRecoilState(surveyForSubmitted);
  const [successDialogOpen, setSuccessDialogOpen] = useState(true);

  const onClickHandler = (index) => {
    cardRef.current[index + 1]?.scrollIntoView({ behavior: "smooth" });
  };
  console.log("이것" + survey.questions);

  return (
    <>
      <Wrapper>
        {survey.questions.map((question, index) => (
          <Section ref={(el) => (cardRef.current[index] = el)}>
            <CardQuestionItem
              key={question.questionId}
              item={question}
              multiquestion={survey.multiQuestions}
            ></CardQuestionItem>
            {index !== survey.questions.length - 1 && (
              <NextButton onClick={() => onClickHandler(index)}>
                다음
              </NextButton>
            )}
          </Section>
        ))}
      </Wrapper>
    </>
  );
}
