import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { MInput, Num, Question } from "../../common/styled";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";
import MultipleChoiceQuestionCreator from "./MultipleChoiceQuestionCreator";
import MultipleChoiceQuestionItem from "./MultipleChoiceQuestionItem";

export default function SurveyItem({ item }) {
  const survey = useCreateSurveyValue();
  const { setQuestions } = useCreateSurveyActions();
  const index = survey.questions.findIndex((listItem) => listItem === item);

  const deleteItem = () => {
    const newList = removeItemAtIndex(survey.questions, index);
    setQuestions(newList);
  };

  const updateItem = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(survey.questions, index, {
      ...item,
      title: value,
    });
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

          <MultipleChoiceQuestionCreator
            id={item.index}
          ></MultipleChoiceQuestionCreator>
          {survey.multiQuestions.map((detailQuestionItem) =>
            item.index === detailQuestionItem.questionIndex ? (
              <MultipleChoiceQuestionItem
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
