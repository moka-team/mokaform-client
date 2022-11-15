import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useEditSurveyActions, useEditSurveyValue } from "../surveyState";

export default function MultipleChoiceQuestionCreator({ id }) {
  const survey = useEditSurveyValue();
  const { setMultiQuestions } = useEditSurveyActions();
  const [detailQuestion, setDetailQuestion] = useState("");
  const [multiQuestionList, setMultiQuestionList] = useState(
    survey.multiQuestions
  );

  const addMultiQuestionItem = () => {
    setMultiQuestionList([
      ...survey.multiQuestions,
      {
        multiQuestionContent: detailQuestion,
        questionId: id,
        multiQuestionIndex: multiQuestionList.length,
        multiQuestionType: "GENERAL",
      },
    ]);
    setDetailQuestion("");
    console.log(multiQuestionList);
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
