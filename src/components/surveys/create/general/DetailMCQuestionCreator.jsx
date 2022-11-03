import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { detailMCQuestionState } from "../../../../atoms";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";

export default function DetailMCQuestionCreator({ id }) {
  const survey = useCreateSurveyValue();
  const { setMultiQuestions } = useCreateSurveyActions();

  const [detailQuestion, setDetailQuestion] = useState("");
  const [multiQuestionList, setMultiQuestionList] = useState(
    survey.multiQuestions
  );
  // const setDetailQuestionList = useSetRecoilState(detailMCQuestionState);

  const addDetailItem = () => {
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
    console.log(multiQuestionList);
    setMultiQuestions(multiQuestionList);
  }, [multiQuestionList]);

  return (
    <Button onClick={addDetailItem} size="small">
      응답옵션 추가하기
    </Button>
  );
}

let id = 0;
function getId() {
  return id++;
}
