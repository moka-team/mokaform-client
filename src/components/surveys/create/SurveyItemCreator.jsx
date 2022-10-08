import { React, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { surveyListState } from "../../../atoms";

export default function SurveyItemCreator() {
  const [question, setQuestion] = useState("");
  const [type, setType] = useState("주관식");
  const setSurveyList = useSetRecoilState(surveyListState);

  const addItem = () => {
    setSurveyList((oldSurveyList) => [
      ...oldSurveyList,
      {
        id: getId(),
        text: question,
        type: type,
      },
    ]);
    setQuestion("");
    setType(type);
  };

  const typeOnChange = (event) => {
    setType(event.target.value);
  };

  const questionOnChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div>
      <select onChange={typeOnChange}>
        <option value={"주관식"}>주관식</option>
        <option value={"객관식"}>객관식</option>
        <option value={"찬부식"}>찬부식</option>
      </select>
      <div>
        <input
          type="text"
          defaultValue={question}
          onChange={questionOnChange}
          placeholder="Write your Question"
        />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
