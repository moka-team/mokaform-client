import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { surveyListState, detailMCQuestionState } from "../../../atoms";
import DetailMCQuestionCreator from "./DetailMCQuestionCreator";
import DetailSurveyItem from "./DetailSurveyItem";

export default function SurveyItem({ item }) {
  const [surveyList, setSurveyList] = useRecoilState(surveyListState);
  const index = surveyList.findIndex((listItem) => listItem === item);

  const detailQuestionList = useRecoilValue(detailMCQuestionState);

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
          <DetailMCQuestionCreator id={item.id}></DetailMCQuestionCreator>
          {detailQuestionList.map((detailQuestionItem) =>
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
