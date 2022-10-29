import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { detailMCQuestionState } from "../../../atoms";

export default function DetailMCQuestionCreator({ id }) {
  const [detailQuestion, setDetailQuestion] = useState("");
  const setDetailQuestionList = useSetRecoilState(detailMCQuestionState);

  const addDetailItem = () => {
    setDetailQuestionList((oldDetailQuestionList) => [
      ...oldDetailQuestionList,
      {
        questionIndex: id,
        index: getId(),
        content: detailQuestion,
        type: "GENERAL",
      },
    ]);
    setDetailQuestion("");
  };

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
