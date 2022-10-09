import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { surveyListState, detailQuestionState } from "../../../atoms";

export default function DetailSurveyItem({ item }) {
  const [detailSurveyList, setDetailSurveyList] =
    useRecoilState(detailQuestionState);
  const index = detailSurveyList.findIndex((listItem) => listItem === item);

  const deleteItem = () => {
    const newList = removeItemAtIndex(detailSurveyList, index);
    setDetailSurveyList(newList);
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
