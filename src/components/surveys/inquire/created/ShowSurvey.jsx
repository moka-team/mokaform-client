import * as Sentry from "@sentry/react";
import { setUser } from "@sentry/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import apiClient from '../../../../api/client';
import { surveyForCreated } from "../../../../atoms";
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
  const [survey, setSurvey] = useRecoilState(surveyForCreated);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function checkingCard() {
    if (survey.questions[0].type === "MULTIPLE_CHOICE") {
      if (survey.multiQuestions[0].multiQuestionType === "CARD") {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    apiClient
      .get("/api/v1/survey", {
        params: {
          sharingKey: sharingKey,
        }
      })
      .then(function (response) {
        console.log(response);
        setSurvey(response.data.data);
        setLoading(false);
      })
      .finally(function () {
        // always executed
      });
  }, [sharingKey]);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (loading) return <Loading></Loading>;

  return (
    <Container>
      <SNavBar></SNavBar>
      {checkingCard() ? (
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
              ></EssayQuestionItemDisabled>
            ) : question.type === "OX" ? (
              <OXQuestionItemDisabled
                key={question.questionId}
                item={question}
              ></OXQuestionItemDisabled>
            ) : (
              <MultipleChoiceQuestionItemDisabled
                key={question.questionId}
                item={question}
                multiquestion={survey.multiQuestions}
              ></MultipleChoiceQuestionItemDisabled>
            )
          )}
        </Survey>
      )}
    </Container>
  );
}
