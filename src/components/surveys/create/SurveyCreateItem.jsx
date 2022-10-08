import React, { useState, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { surveyListState, detailQuestionState } from "../../../atoms";
import DetailQuestionCreator from "./DetailQuestionCreator";

export default function SurveyItem({ item }) {
  const [surveyList, setSurveyList] = useRecoilState(surveyListState);
  const index = surveyList.findIndex((listItem) => listItem === item);

  const [countList, setCountList] = useState([0]);

  const deleteItem = () => {
    const newList = removeItemAtIndex(surveyList, index);
    setSurveyList(newList);
  };

  const addDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
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
          <button onClick={addDetailDiv}>질문 추가</button>
          <button onClick={deleteItem}>X</button>{" "}
          <DetailQuestionCreator countList={countList} id={item.id} />
        </>
      )}
    </div>
  );
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
