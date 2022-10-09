import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { detailMCQuestionState } from "../../../atoms";

export default function DetailMCQuestionCreator({ id }) {
  const [detailQuestion, setDetailQuestion] = useState("");
  const [detailQuestionList, setDetailQuestionList] = useRecoilState(
    detailMCQuestionState
  );

  const detailQuestionOnChange = (event) => {
    setDetailQuestion(event.target.value);
  };

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
    <div>
      <input
        type="text"
        defaultValue={detailQuestion}
        onChange={detailQuestionOnChange}
        placeholder="Write your detail Question"
      />
      <button onClick={addDetailItem}>저장</button>
      <button>X</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
