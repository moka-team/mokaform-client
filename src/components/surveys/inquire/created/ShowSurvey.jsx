import React, { useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { getSurveyQuery } from "../../../../atoms";
import Error from "../../participate/Error";
import Loading from "../../participate/Loading";

import {
  Container,
  SNavBar,
  SummaryText,
  Survey,
  TitleText,
} from "../../participate/styled";
import ShowCardSurvey from "./card/ShowCardSurvey";
import EssayQuestionItemDisabled from "./general/EssayQuestionItemDisabled";
import MultipleChoiceQuestionItemDisabled from "./general/MultipleChoiceQuestionItemDisabled";
import OXQuestionItemDisabled from "./general/OXQuestionItemDisabled";

export default function ShowSurvey({ sharingKey }) {
  function SurveyInfo() {
    const survey = useRecoilValueLoadable(getSurveyQuery(sharingKey));
    switch (survey.state) {
      case "hasValue":
        return (
          <Container>
            <SNavBar></SNavBar>
            {survey.contents.multiQuestions.length > 0 &&
            checkingCard(
              survey.contents.questions[0].type,
              survey.contents.multiQuestions[0].multiQuestionType
            ) ? (
              <ShowCardSurvey survey={survey.contents}></ShowCardSurvey>
            ) : (
              <Survey>
                <TitleText>{survey.contents.title}</TitleText>
                <SummaryText>{survey.contents.summary}</SummaryText>
                {survey.contents.questions.map((question) =>
                  question.type === "ESSAY" ? (
                    <EssayQuestionItemDisabled
                      key={question.questionId}
                      item={question}
                      survey={survey.contents}
                    ></EssayQuestionItemDisabled>
                  ) : question.type === "OX" ? (
                    <OXQuestionItemDisabled
                      key={question.questionId}
                      item={question}
                      survey={survey.contents}
                    ></OXQuestionItemDisabled>
                  ) : (
                    <MultipleChoiceQuestionItemDisabled
                      key={question.questionId}
                      item={question}
                      survey={survey.contents}
                    ></MultipleChoiceQuestionItemDisabled>
                  )
                )}
              </Survey>
            )}
          </Container>
        );
      case "loading":
        return <Loading></Loading>;
    }
  }

  function checkingCard(questionType, multiQuestionType) {
    if (questionType === "MULTIPLE_CHOICE") {
      if (multiQuestionType === "CARD") {
        return true;
      }
    }
    return false;
  }

  return <SurveyInfo></SurveyInfo>;
}
