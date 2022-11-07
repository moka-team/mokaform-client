import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { getSurveyAnswerQuery } from "../../../../../atoms";
import Error from "../../../participate/Error";
import Loading from "../../../participate/Loading";
import { QuestionOption2, QuestionText2, QuestionWrapper2 } from "../styled";

export default function InquireOXQuestionItem({ item, sharingKey, survey }) {
  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  function AnswerInfo() {
    const answers = useRecoilValueLoadable(getSurveyAnswerQuery(sharingKey));

    switch (answers.state) {
      case "hasValue":
        const answer = answers.contents.oxAnswers.filter(
          (oxAnswerItem) => oxAnswerItem.questionId === item.questionId
        )[0].isYes;
        return (
          <QuestionWrapper2>
            <QuestionText2 color="#0064ff">Q{index + 1}</QuestionText2>
            <QuestionText2 color="black">{item.title}</QuestionText2>
            <QuestionOption2
              key={item.questionId}
              bcolor={answer ? "#0064ff" : "#edeef0"}
              color={answer ? "white" : "black"}
              weight={answer ? 600 : 400}
              style={{ pointerEvents: "none" }}
            >
              네 😀
            </QuestionOption2>
            <QuestionOption2
              bcolor={!answer ? "#0064ff" : "#edeef0"}
              color={!answer ? "white" : "black"}
              weight={!answer ? 600 : 400}
              style={{ pointerEvents: "none" }}
            >
              아니오 😭
            </QuestionOption2>
          </QuestionWrapper2>
        );
      case "loading":
        return <Loading></Loading>;
      case "hasError":
        return <Error></Error>;
    }
  }

  return <AnswerInfo></AnswerInfo>;
}
