import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  surveyListState,
  detailMCQuestionState,
  createdQuestionCount,
} from "../../../atoms";
import DetailMCQuestionCreator from "./DetailMCQuestionCreator";
import DetailSurveyItem from "./DetailSurveyItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { Question, MInput, Num } from "./styled";

export default function SurveyItem({ item }) {
  const [questionCount, setQuestionCount] =
    useRecoilState(createdQuestionCount);
  const [surveyList, setSurveyList] = useRecoilState(surveyListState);
  const index = surveyList.findIndex((listItem) => listItem === item);

  const detailQuestionList = useRecoilValue(detailMCQuestionState);

  const deleteItem = () => {
    const newList = removeItemAtIndex(surveyList, index);
    setSurveyList(newList);
    setQuestionCount(questionCount - 1);
  };

  const updateItem = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(surveyList, index, {
      ...item,
      title: value,
    });
    setSurveyList(newList);
  };

  return (
    <div>
      {item.type === "ESSAY" ? (
        <Question>
          <div>
            <Num>{index + 1}</Num>{" "}
            <MInput
              onChange={updateItem}
              value={item.title}
              placeholder="질문을 입력해주세요."
            />
          </div>
          <DeleteIcon
            onClick={deleteItem}
            fontSize="10px"
            style={{ cursor: "pointer" }}
          />
        </Question>
      ) : item.type === "OX" ? (
        <Question>
          <div>
            <Num>{index + 1}</Num>{" "}
            <MInput
              onChange={updateItem}
              value={item.title}
              placeholder="질문을 입력해주세요."
            />
          </div>
          <DeleteIcon
            onClick={deleteItem}
            fontSize="10px"
            style={{ cursor: "pointer" }}
          />
        </Question>
      ) : (
        <>
          <Question>
            <div>
              <Num>{index + 1}</Num>{" "}
              <MInput
                onChange={updateItem}
                value={item.title}
                placeholder="질문을 입력해주세요."
              />
            </div>
            <DeleteIcon
              onClick={deleteItem}
              fontSize="10px"
              style={{ cursor: "pointer" }}
            />
          </Question>

          <DetailMCQuestionCreator id={item.index}></DetailMCQuestionCreator>
          {detailQuestionList.map((detailQuestionItem) =>
            item.index === detailQuestionItem.questionIndex ? (
              <DetailSurveyItem
                key={detailQuestionItem.index}
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
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
