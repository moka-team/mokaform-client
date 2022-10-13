import React from "react";
import EssayQuestionItem from "./EssayQuestionItem";
import MultipleChoiceQuestionItem from "./MultipleChoiceQuestionItem";
import OXQuestionItem from "./OXQuestionItem";
import { SummaryText, Survey, TitleText } from "./styled";

const tmpData = {
  surveyId: 1,
  title: "제목",
  summary: "설명",
  isAnonymous: false,
  isPublic: false,
  startDate: "2022-10-12",
  endDate: "2022-10-29",
  questions: [
    {
      questionId: 0,
      title: "asdsd",
      type: "ESSAY",
      index: 0,
      isMultipleAnswer: false,
    },
    {
      questionId: 1,
      title: "asd",
      type: "MULTIPLE_CHOICE",
      index: 1,
      isMultipleAnswer: true,
    },
    {
      questionId: 2,
      title: "asda",
      type: "OX",
      index: 2,
      isMultipleAnswer: false,
    },
  ],
  multiQuestions: [
    { questionId: 1, index: 0, content: "asd", type: "GENERAL" },
    { questionId: 1, index: 1, content: "asd1", type: "GENERAL" },
    { questionId: 1, index: 2, content: "asd2", type: "GENERAL" },
    { questionId: 2, index: 0, content: "asd", type: "GENERAL" },
    { questionId: 2, index: 1, content: "asd1", type: "GENERAL" },
    { questionId: 2, index: 2, content: "asd2", type: "GENERAL" },
  ],
};

export default function SurveySection() {
  return (
    <Survey>
      <TitleText>{tmpData.title}</TitleText>
      <SummaryText>{tmpData.summary}</SummaryText>
      {tmpData.questions.map((question) =>
        question.type === "ESSAY" ? (
          <EssayQuestionItem item={question}></EssayQuestionItem>
        ) : question.type === "OX" ? (
          <OXQuestionItem item={question}></OXQuestionItem>
        ) : (
          <MultipleChoiceQuestionItem
            item={question}
            multiquestion={tmpData.multiQuestions}
          ></MultipleChoiceQuestionItem>
        )
      )}
    </Survey>
  );
}
