import * as Sentry from "@sentry/react";
import { setUser } from "@sentry/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { surveyForSubmitted } from "../../../../atoms";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  updateAccessToken,
} from "../../../../authentication/auth";
import { userState } from "../../../../authentication/userState";
import DeleteSurvey from "../../participate/DeleteSurvey";
import Error from "../../participate/Error";
import Loading from "../../participate/Loading";
import {
  Container,
  SNavBar,
  SummaryText,
  Survey,
  TitleText,
} from "../../participate/styled";
import CardSubmitted from "./card/CardSubmitted";
import InquireEssayQuestionItem from "./general/EssayQuestionItem";
import InquireMultipleChoiceQuestionItem from "./general/MultipleChoiceQuestionItem";
import InquireOXQuestionItem from "./general/OXQuestionItem";

export default function SubmittedSurvey({ sharingKey }) {
  const user = useRecoilValue(userState);

  const [survey, setSurvey] = useRecoilState(surveyForSubmitted);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isDeleted, setIsDeleted] = useState(false);

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
        setIsDeleted(response.data.data.isDeleted);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setErrorMessage(error.message);
        Sentry.captureException(error);

        setError(true);
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
  }, []);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (isDeleted) return <DeleteSurvey request={"mypage"}></DeleteSurvey>;
  if (loading) return <Loading></Loading>;

  return (
    <Container>
      <SNavBar></SNavBar>
      {/* 카드 형식 보여주기 */}
      {checkingCard() ? (
        <CardSubmitted sharingKey={sharingKey} />
      ) : (
        <Survey>
          <TitleText>{survey.title}</TitleText>
          <SummaryText>{survey.summary}</SummaryText>
          {survey.questions.map((question) =>
            question.type === "ESSAY" ? (
              <InquireEssayQuestionItem
                key={question.questionId}
                item={question}
                sharingKey={sharingKey}
              ></InquireEssayQuestionItem>
            ) : question.type === "OX" ? (
              <InquireOXQuestionItem
                key={question.questionId}
                item={question}
                sharingKey={sharingKey}
              ></InquireOXQuestionItem>
            ) : (
              <InquireMultipleChoiceQuestionItem
                key={question.questionId}
                item={question}
                multiquestion={survey.multiQuestions}
                sharingKey={sharingKey}
              ></InquireMultipleChoiceQuestionItem>
            )
          )}
        </Survey>
      )}
    </Container>
  );
}
