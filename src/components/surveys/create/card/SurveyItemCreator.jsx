import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { createdQuestionCount } from "../../../../atoms";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function SurveyItemCreator() {
  const survey = useCreateSurveyValue();
  const { setQuestions } = useCreateSurveyActions();
  const [questionList, setQuestionList] = useState([]);

  const [questionCount, setQuestionCount] =
    useRecoilState(createdQuestionCount);
  const [question, setQuestion] = useState("");

  const onClickHandler = (event, index) => {
    addItem(index);
  };

  const addItem = () => {
    setQuestionList((oldSurveyList) => [
      ...survey.questions,
      {
        index: getId(),
        title: question,
        type: "MULTIPLE_CHOICE",
        isMultipleAnswer: true,
      },
    ]);
    setQuestion("");
    setQuestionCount(questionCount + 1);
  };

  useEffect(() => {
    setQuestions(questionList);
  }, [questionList]);

  return (
    <Container>
      <Button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        sx={{ marginTop: "20px" }}
        onClick={onClickHandler}
      >
        <AddCircle sx={{ color: "#202632" }} />
      </Button>
    </Container>
  );
}
let id = 0;
function getId() {
  return id++;
}
