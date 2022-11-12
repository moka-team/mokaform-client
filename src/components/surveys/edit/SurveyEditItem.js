import { MInput, Num, Question } from "../common/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import MultipleChoiceQuestionCreator from "./multipleChoice/MultipleChoiceQuestionCreator";
import MultipleChoiceQuestionItem from "./multipleChoice/MultipleChoiceQuestionItem";
import { useEditSurveyActions, useEditSurveyValue } from "./surveyState";

export function SurveyEditItem({ item }) {
  const survey = useEditSurveyValue();
  const { setQuestions } = useEditSurveyActions();
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
            id={item.questionId}
          ></MultipleChoiceQuestionCreator>
          {survey.multiQuestions.map((detailQuestionItem) =>
            item.questionId === detailQuestionItem.questionId ? (
              <MultipleChoiceQuestionItem
                key={detailQuestionItem.index}
                item={detailQuestionItem}
                survey={survey}
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
