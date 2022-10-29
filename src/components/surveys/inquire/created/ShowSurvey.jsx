import * as Sentry from "@sentry/react";
import { setUser } from "@sentry/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { surveyForCreated } from "../../../../atoms";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  updateAccessToken,
} from "../../../../authentication/auth";
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
    axios
      .get("/api/v1/survey", {
        params: {
          sharingKey: sharingKey,
        },
        headers: {
          accessToken: getAccessToken(),
          refreshToken: getRefreshToken(),
        },
      })
      .then(function (response) {
        console.log(response);
        setSurvey(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setErrorMessage(error.message);
        setError(true);
        Sentry.captureException(error);
        // Access Token 재발행이 필요한 경우
        if (error.code === "C005") {
          axios
            .post("/api/v1/users/token/reissue", {
              headers: {
                accessToken: getAccessToken(),
                refreshToken: getRefreshToken(),
              },
            })
            .then((res) => {
              updateAccessToken(res.data.data);
            })
            .catch(function (error) {
              alert("refresh token 만료");
              logout();
              window.location.replace("/");
              localStorage.clear();
              setUser(null);
            });
        }
      })
      .finally(function () {
        // always executed
      });
  }, [sharingKey]);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (loading) return <Loading></Loading>;
  console.log(survey.multiQuestions[0].multiQuestionType);
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
