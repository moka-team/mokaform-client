import { Button } from "@mui/material";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { detailMCQuestionState } from "../../../atoms";


export default function DetailMCQuestionCreator({ id }) {
  const [detailQuestion, setDetailQuestion] = useState("");
  const [detailQuestionList, setDetailQuestionList] = useRecoilState(
    detailMCQuestionState
  );

  const addDetailItem = () => {
    setDetailQuestionList((oldDetailQuestionList) => [
      ...oldDetailQuestionList,
      {
        survey_id: id,
        id: getId(),
        text: detailQuestion,
      },
    ]);
    setDetailQuestion("");
  };

  return (
      <Button onClick={addDetailItem} size="small">응답옵션 추가하기</Button>
  );
}

let id = 0;
function getId() {
  return id++;
}
