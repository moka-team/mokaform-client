import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";

export default function MultipleChoiceQuestionCreator({ id }) {
  const survey = useCreateSurveyValue();
  const { setMultiQuestions } = useCreateSurveyActions();
  const [detailQuestion, setDetailQuestion] = useState("");
  const [multiQuestionList, setMultiQuestionList] = useState(
    survey.multiQuestions
  );

  const addMultiQuestionItem = () => {
    setMultiQuestionList([
      ...survey.multiQuestions,
      {
        questionIndex: id,
        index: getId(),
        content: detailQuestion,
        type: "GENERAL",
      },
    ]);
    setDetailQuestion("");
  };

  useEffect(() => {
    setMultiQuestions(multiQuestionList);
  }, [multiQuestionList]);

  return (
    <Button onClick={addMultiQuestionItem} size="small">
      응답옵션 추가하기
    </Button>
  );
}

let id = 0;
function getId() {
  return id++;
}
