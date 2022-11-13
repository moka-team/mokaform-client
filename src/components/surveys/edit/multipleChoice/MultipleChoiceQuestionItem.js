import DeleteIcon from "@mui/icons-material/Delete";
import { DetailContainer, Input } from "../../common/styled";
import { useEditSurveyActions, useEditSurveyValue } from "../surveyState";

export default function MultipleChoiceQuestionItem({ item }) {
  const survey = useEditSurveyValue();
  const { setMultiQuestions } = useEditSurveyActions();

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
      multiQuestionContent: value,
    });
    setMultiQuestions(newList);
  };

  return (
    <DetailContainer>
      <Input
        onChange={updateItem}
        value={item.multiQuestionContent}
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
