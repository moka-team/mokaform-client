import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { DetailContainer, Input } from "../../common/styled";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";

export default function MultipleChoiceQuestionItem({ item }) {
  const survey = useCreateSurveyValue();
  const { setMultiQuestions } = useCreateSurveyActions();
  const index = survey.multiQuestions.findIndex(
    (listItem) => listItem === item
  );

  const deleteItem = () => {
    const newList = removeItemAtIndex(survey.multiQuestions, index);
    setMultiQuestions(newList);
  };

  const updateItem = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(survey.multiQuestions, index, {
      ...item,
      content: value,
    });
    setMultiQuestions(newList);
  };

  return (
    <DetailContainer>
      <Input
        onChange={updateItem}
        value={item.content}
        placeholder="응답옵션"
        bgColor="#f5f6fa"
        tColor="#202632"
      />
      <DeleteIcon
        onClick={deleteItem}
        fontSize="3px"
        style={{ cursor: "pointer" }}
        sx={{ color: "#202632" }}
      />
    </DetailContainer>
  );
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
