import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  createdQuestionCount,
  detailMCQuestionState,
  surveyListState,
} from "../../../../atoms";
import { MInput, Num, Question } from "../../common/styled";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";
import DetailMCQuestionCreator from "./DetailMCQuestionCreator";
import DetailSurveyItem from "./DetailSurveyItem";

export default function SurveyItem({ item }) {
  const survey = useCreateSurveyValue();
  const { setQuestions } = useCreateSurveyActions();

  const [questionCount, setQuestionCount] =
    useRecoilState(createdQuestionCount);
  // const [surveyList, setSurveyList] = useRecoilState(surveyListState);
  const index = survey.questions.findIndex((listItem) => listItem === item);

  // const detailQuestionList = useRecoilValue(detailMCQuestionState);

  const deleteItem = () => {
    const newList = removeItemAtIndex(survey.questions, index);
    setQuestions(newList);
    setQuestionCount(questionCount - 1);
  };

  const updateItem = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(survey.questions, index, {
      ...item,
      title: value,
    });
    console.log(newList);
    setQuestions(newList);
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
          {survey.multiQuestions.map((detailQuestionItem) =>
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
