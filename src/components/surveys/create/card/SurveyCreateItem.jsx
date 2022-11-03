import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useRecoilState } from "recoil";
import { createdQuestionCount } from "../../../../atoms";
import { MInput, Num, Question } from "../../common/styled";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";
import MultipleChoiceQuestionCreator from "./MultipleChoiceQuestionCreator";
import MultipleChoiceQuestionItem from "./MultipleChoiceQuestionitem";

export default function SurveyCreateItem({ item }) {
  const survey = useCreateSurveyValue();
  const { setQuestions } = useCreateSurveyActions();

  const [questionCount, setQuestionCount] =
    useRecoilState(createdQuestionCount);
  const index = survey.questions.findIndex((listItem) => listItem === item);

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
    setQuestions(newList);
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
    </div>
  );
}
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
