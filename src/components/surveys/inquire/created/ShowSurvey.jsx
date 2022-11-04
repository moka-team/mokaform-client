import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { getSurveyQuery } from "../../../../atoms";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function SurveyInfo() {
    const survey = useRecoilValue(getSurveyQuery(sharingKey));
    return (
      <Container>
        <SNavBar></SNavBar>
        {survey.multiQuestions.length > 0 &&
        checkingCard(
          survey.questions[0].type,
          survey.multiQuestions[0].multiQuestionType
        ) ? (
          <ShowCardSurvey survey={survey}></ShowCardSurvey>
        ) : (
          <Survey>
            <TitleText>{survey.title}</TitleText>
            <SummaryText>{survey.summary}</SummaryText>
            {survey.questions.map((question) =>
              question.type === "ESSAY" ? (
                <EssayQuestionItemDisabled
                  key={question.questionId}
                  item={question}
                  survey={survey}
                ></EssayQuestionItemDisabled>
              ) : question.type === "OX" ? (
                <OXQuestionItemDisabled
                  key={question.questionId}
                  item={question}
                  survey={survey}
                ></OXQuestionItemDisabled>
              ) : (
                <MultipleChoiceQuestionItemDisabled
                  key={question.questionId}
                  item={question}
                  survey={survey}
                ></MultipleChoiceQuestionItemDisabled>
              )
            )}
          </Survey>
        )}
      </Container>
    );
  }

  function checkingCard(questionType, multiQuestionType) {
    if (questionType === "MULTIPLE_CHOICE") {
      if (multiQuestionType === "CARD") {
        return true;
      }
    }
    return false;
  }

  return (
    <React.Suspense fallback={<Loading></Loading>}>
      <SurveyInfo></SurveyInfo>
    </React.Suspense>
  );
}
