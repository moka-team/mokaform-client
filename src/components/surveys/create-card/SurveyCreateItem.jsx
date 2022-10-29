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
import { Question, MInput, Num } from "../common/styled";

export default function SurveyCreateItem({ item }) {
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
      <Question>
        <div>
          <Num>{index + 1}</Num>{" "}
          <MInput
            onChange={updateItem}
            value={item.title}
            placeholder="질문을 입력해주세요."
            bgColor="#f5f6fa"
            tColor="#202632"
          />
        </div>
        <DeleteIcon
          onClick={deleteItem}
          fontSize="10px"
          style={{ cursor: "pointer" }}
          sx={{ color: "#202632" }}
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
    </div>
  );
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
