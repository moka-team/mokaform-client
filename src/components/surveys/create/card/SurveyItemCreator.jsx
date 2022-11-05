import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";
import { Container2 } from "./styled";

export default function SurveyItemCreator() {
  const survey = useCreateSurveyValue();
  const { setQuestions } = useCreateSurveyActions();
  const [questionList, setQuestionList] = useState([]);

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
  };

  useEffect(() => {
    setQuestions(questionList);
  }, [questionList]);

  return (
    <Container2>
      <Button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        sx={{ marginTop: "20px" }}
        onClick={onClickHandler}
      >
        <AddCircle sx={{ color: "#202632" }} />
      </Button>
    </Container2>
  );
}
let id = 0;
function getId() {
  return id++;
}
