import React, { useEffect } from "react";
import { useCreateAnswerActions } from "./answerState";
import CardParticipate from "./card/CardParticipate";
import EssayQuestionItem from "./general/EssayQuestionItem";
import MultipleChoiceQuestionItem from "./general/MultipleChoiceQuestionItem";
import OXQuestionItem from "./general/OXQuestionItem";
import { SummaryText, Survey, TitleText } from "./styled";

export default function SurveyItem({ survey }) {
  function checkingCard(questionType, multiQuestionType) {
    if (questionType === "MULTIPLE_CHOICE") {
      if (multiQuestionType === "CARD") {
        return true;
      }
    }
    return false;
  }

  return survey.contents.multiQuestions.length > 0 &&
    checkingCard(
      survey.contents.questions[0].type,
      survey.contents.multiQuestions[0].multiQuestionType
    ) ? (
    <CardParticipate survey={survey.contents} />
  ) : (
    <Survey>
      <TitleText>{survey.contents.title}</TitleText>
      <SummaryText>{survey.contents.summary}</SummaryText>
      {survey.contents.questions.map((question) =>
        question.type === "ESSAY" ? (
          <EssayQuestionItem
            key={question.questionId}
            item={question}
            survey={survey.contents}
          ></EssayQuestionItem>
        ) : question.type === "OX" ? (
          <OXQuestionItem
            key={question.questionId}
            item={question}
            survey={survey.contents}
          ></OXQuestionItem>
        ) : (
          <MultipleChoiceQuestionItem
            key={question.questionId}
            item={question}
            multiquestion={survey.contents.multiQuestions}
            survey={survey.contents}
          ></MultipleChoiceQuestionItem>
        )
      )}
    </Survey>
  );
}
