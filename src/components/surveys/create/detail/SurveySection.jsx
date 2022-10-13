import React from "react";
import EssayQuestionItem from "./EssayQuestionItem";
import MultipleChoiceQuestionItem from "./MultipleChoiceQuestionItem";
import OXQuestionItem from "./OXQuestionItem";
import { SummaryText, Survey, TitleText } from "./styled";

const tmpData = {
  title: "이것은 설문 제목입니다.",
  summary: "이것은 설문 설명입니다.",
  isAnonymous: false,
  isPublic: true,
  startDate: "2022-03-22",
  endDate: "2022-05-15",
  questions: [
    {
      index: 1,
      title: "1번째 질문입니다.",
      type: "ESSAY",
      isMultipleAnswer: false,
    },
    {
      index: 2,
      title: "2번째 질문입니다.",
      type: "MULTIPLE_CHOICE",
      isMultipleAnswer: true,
    },
    {
      index: 3,
      title: "3번째 질문입니다.",
      type: "MULTIPLE_CHOICE",
      isMultipleAnswer: true,
    },
    {
      index: 4,
      title: "4번째 질문입니다.",
      type: "OX",
      isMultipleAnswer: false,
    },
  ],
  multiQuestions: [
    {
      questionIndex: 2,
      index: 1,
      content: "2번째 질문의 1번 선지입니다.",
      type: "GENERAL",
    },
    {
      questionIndex: 2,
      index: 2,
      content: "2번째 질문의 2번 선지입니다.",
      type: "GENERAL",
    },
    {
      questionIndex: 2,
      index: 3,
      content: "2번째 질문의 3번 선지입니다.",
      type: "GENERAL",
    },
    {
      questionIndex: 3,
      index: 1,
      content: "3번째 질문의 1번 선지입니다.",
      type: "GENERAL",
    },
    {
      questionIndex: 3,
      index: 2,
      content: "3번째 질문의 2번 선지입니다.",
      type: "GENERAL",
    },
    {
      questionIndex: 3,
      index: 3,
      content: "3번째 질문의 3번 선지입니다.",
      type: "GENERAL",
    },
    {
      questionIndex: 3,
      index: 4,
      content: "3번째 질문의 4번 선지입니다.",
      type: "GENERAL",
    },
    {
      questionIndex: 3,
      index: 5,
      content: "3번째 질문의 5번 선지입니다.",
      type: "GENERAL",
    },
  ],
};

// const tmpData = {
//   surveyId: 1,
//   title: "제목",
//   summary: "설명",
//   isAnonymous: false,
//   isPublic: false,
//   startDate: "2022-10-12",
//   endDate: "2022-10-29",
//   questions: [
//     {
//       questionId: 0,
//       title: "asdsd",
//       type: "ESSAY",
//       index: 0,
//       isMultipleAnswer: false,
//     },
//     {
//       questionId: 1,
//       title: "asd",
//       type: "MULTIPLE_CHOICE",
//       index: 1,
//       isMultipleAnswer: true,
//     },
//     {
//       questionId: 2,
//       title: "asda",
//       type: "MULTIPLE_CHOICE",
//       index: 2,
//       isMultipleAnswer: false,
//     },
//   ],
//   multiQuestions: [
//     { questionId: 1, index: 0, content: "asd", type: "GENERAL" },
//     { questionId: 1, index: 1, content: "asd", type: "GENERAL" },
//     { questionId: 1, index: 2, content: "asd", type: "GENERAL" },
//     { questionId: 2, index: 0, content: "asd2", type: "GENERAL" },
//     { questionId: 2, index: 1, content: "asd2", type: "GENERAL" },
//     { questionId: 2, index: 2, content: "asd2", type: "GENERAL" },
//   ],
// };

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
