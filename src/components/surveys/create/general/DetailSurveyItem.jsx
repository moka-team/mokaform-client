import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useRecoilState } from "recoil";
import { detailMCQuestionState } from "../../../../atoms";
import { DetailContainer, Input } from "../../common/styled";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";

export default function DetailSurveyItem({ item }) {
  const survey = useCreateSurveyValue();
  const { setMultiQuestions } = useCreateSurveyActions();
  // const [detailQuestionList, setDetailQuestionList] = useRecoilState(
  // //   detailMCQuestionState
  // // );
  const index = survey.multiQuestions.findIndex(
    (listItem) => listItem === item
  );

  const deleteItem = () => {
    const newList = removeItemAtIndex(survey.multiQuestions, index);
    setMultiQuestions(newList);
  };

  const updateDetailItem = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(survey.multiQuestions, index, {
      ...item,
      content: value,
    });
    setMultiQuestions(newList);
  };

  return (
    <DetailContainer>
      <Input
        onChange={updateDetailItem}
        value={item.content}
        placeholder="응답옵션"
      />
      <DeleteIcon
        onClick={deleteItem}
        fontSize="3px"
        style={{ cursor: "pointer" }}
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
