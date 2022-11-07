import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { getSurveyAnswerQuery } from "../../../../../atoms";
import Error from "../../../participate/Error";
import Loading from "../../../participate/Loading";
import { QuestionOption2, QuestionText2, QuestionWrapper2 } from "../styled";
export default function InquireMultipleChoiceQuestionItem({
  item,
  sharingKey,
  survey,
}) {
  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  function AnswerInfo() {
    const answers = useRecoilValueLoadable(getSurveyAnswerQuery(sharingKey));

    switch (answers.state) {
      case "hasValue":
        const answer = answers.contents.multipleChoiceAnswers.filter(
          (multiChoiceAnswerItem) =>
            multiChoiceAnswerItem.questionId === item.questionId
        )[0].multiQuestionId;
        return (
          <QuestionWrapper2>
            <QuestionText2 color="#0064ff">Q{index + 1}</QuestionText2>
            <QuestionText2 color="black">{item.title}</QuestionText2>
            {survey.multiQuestions
              .filter(
                (multiQuestionItem) =>
                  item.questionId === multiQuestionItem.questionId
              )
              .map((multiQuestion) => (
                <QuestionOption2
                  key={multiQuestion.multiQuestionId}
                  bcolor={
                    multiQuestion.multiQuestionId === answer
                      ? "#0064ff"
                      : "#edeef0"
                  }
                  color={
                    multiQuestion.multiQuestionId === answer ? "white" : "black"
                  }
                  weight={multiQuestion.multiQuestionId === answer ? 600 : 400}
                  style={{ pointerEvents: "none" }}
                >
                  {multiQuestion.multiQuestionContent}
                </QuestionOption2>
              ))}
          </QuestionWrapper2>
        );
      case "loading":
        return <Loading></Loading>;
    }
  }
  return <AnswerInfo></AnswerInfo>;
}
