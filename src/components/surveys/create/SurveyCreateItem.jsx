import React, { useState, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { surveyListState, detailQuestionState } from "../../../atoms";
import DetailQuestionCreator from "./DetailQuestionCreator";
import DetailSurveyItem from "./DetailSurveyItem";

export default function SurveyItem({ item }) {
  const [surveyList, setSurveyList] = useRecoilState(surveyListState);
  const index = surveyList.findIndex((listItem) => listItem === item);

  const detailquestionList = useRecoilValue(detailQuestionState);

  const deleteItem = () => {
    const newList = removeItemAtIndex(surveyList, index);
    setSurveyList(newList);
  };

  return (
    <div>
      {item.type === "주관식" ? (
        <>
          <br></br>
          질문: {item.text}
          <button onClick={deleteItem}>X</button>{" "}
        </>
      ) : item.type === "찬부식" ? (
        <>
          <br></br>
          질문: {item.text}
          <button onClick={deleteItem}>X</button>{" "}
        </>
      ) : (
        <>
          <br></br>
          질문: {item.text}
          <button onClick={deleteItem}>X</button>{" "}
          <DetailQuestionCreator id={item.id}></DetailQuestionCreator>
          {detailquestionList.map((detailQuestionItem) =>
            item.id === detailQuestionItem.survey_id ? (
              <DetailSurveyItem
                key={detailQuestionItem.id}
                item={detailQuestionItem}
              />
            ) : (
              <></>
            )
          )}
        </>
      )}
    </div>
  );
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
