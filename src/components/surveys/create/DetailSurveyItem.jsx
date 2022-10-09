import React from "react";
import { useRecoilState } from "recoil";
import { detailMCQuestionState } from "../../../atoms";

export default function DetailSurveyItem({ item }) {
  const [detailQuestionList, setDetailQuestionList] = useRecoilState(
    detailMCQuestionState
  );
  const index = detailQuestionList.findIndex((listItem) => listItem === item);

  const deleteItem = () => {
    const newList = removeItemAtIndex(detailQuestionList, index);
    setDetailQuestionList(newList);
  };

  return (
    <div>
      세부 질문: {item.text}
      <button onClick={deleteItem}>X</button>
    </div>
  );
}
function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
