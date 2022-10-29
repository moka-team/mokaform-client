import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useRecoilState } from "recoil";
import { detailMCQuestionState } from "../../../../atoms";
import { DetailContainer, Input } from "../../common/styled";

export default function DetailSurveyItem({ item }) {
  const [detailQuestionList, setDetailQuestionList] = useRecoilState(
    detailMCQuestionState
  );
  const index = detailQuestionList.findIndex((listItem) => listItem === item);

  const deleteItem = () => {
    const newList = removeItemAtIndex(detailQuestionList, index);
    setDetailQuestionList(newList);
  };

  const updateDetailItem = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(detailQuestionList, index, {
      ...item,
      content: value,
    });
    setDetailQuestionList(newList);
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