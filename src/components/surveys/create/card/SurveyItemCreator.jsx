import { React, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { surveyListState, createdQuestionCount } from "../../../../atoms";
import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function SurveyItemCreator() {
  const [questionCount, setQuestionCount] =
    useRecoilState(createdQuestionCount);
  const [question, setQuestion] = useState("");
  const setSurveyList = useSetRecoilState(surveyListState);

  const onClickHandler = (event, index) => {
    console.log(event);
    addItem(index);
  };

  const addItem = () => {
    setSurveyList((oldSurveyList) => [
      ...oldSurveyList,
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
