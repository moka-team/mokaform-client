import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { getSurveyAnswerQuery } from "../../../../../atoms";
import Error from "../../../participate/Error";
import Loading from "../../../participate/Loading";
import {
  Answer,
  QuestionText,
  QuestionWrapper,
} from "../../../participate/styled";
export default function InquireEssayQuestionItem({ item, sharingKey, survey }) {
  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  function AnswerInfo() {
    const answers = useRecoilValueLoadable(getSurveyAnswerQuery(sharingKey));

    switch (answers.state) {
      case "hasValue":
        const answer = answers.contents.essayAnswers.filter(
          (essayAnswerItem) => essayAnswerItem.questionId === item.questionId
        )[0].answerContent;
        return (
          <QuestionWrapper>
            <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
            <QuestionText color="black">{item.title}</QuestionText>
            <Answer disabled value={answer}></Answer>
          </QuestionWrapper>
        );
      case "loading":
        return <Loading></Loading>;
    }
  }
  return <AnswerInfo></AnswerInfo>;
}
