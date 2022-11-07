import React from "react";
import { useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { getSurveyAnswerQuery } from "../../../../../atoms";
import Error from "../../../participate/Error";
import Loading from "../../../participate/Loading";
import { QuestionText2 } from "../styled";

const QWrapper = styled.div`
  width: 50%;
  padding: 20px 35px 20px 35px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const QuestionContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const QuestionOption = styled.button`
  width: 25%;
  height: 300px;
  margin-top: 50px;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: ${(props) => props.bcolor};
  border: 0;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;

export default function CardQuestionItem({ item, sharingKey, survey }) {
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
          <QWrapper>
            <QuestionText2 color="#0064ff">Q{index + 1}</QuestionText2>
            <QuestionText2 color="white">{item.title}</QuestionText2>
            <QuestionContentWrapper>
              {survey.multiQuestions
                .filter(
                  (multiQuestionItem) =>
                    item.questionId === multiQuestionItem.questionId
                )
                .map((multiQuestion) => (
                  <QuestionOption
                    key={multiQuestion.multiQuestionId}
                    bcolor={
                      multiQuestion.multiQuestionId === answer
                        ? "#0064ff"
                        : "#edeef0"
                    }
                    color={
                      multiQuestion.multiQuestionId === answer
                        ? "white"
                        : "black"
                    }
                    weight={
                      multiQuestion.multiQuestionId === answer ? 600 : 400
                    }
                    style={{ pointerEvents: "none" }}
                  >
                    {multiQuestion.multiQuestionContent}
                  </QuestionOption>
                ))}
            </QuestionContentWrapper>
          </QWrapper>
        );
      case "loading":
        return <Loading></Loading>;
    }
  }

  return <AnswerInfo></AnswerInfo>;
}
