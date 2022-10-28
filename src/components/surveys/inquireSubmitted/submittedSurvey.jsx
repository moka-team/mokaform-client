import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";
import axios from "axios";
import {
  Container,
  SummaryText,
  Survey,
  TitleText,
} from "../participate/styled";
import Error from "../participate/Error";
import Loading from "../participate/Loading";
import { SNavBar } from "../participate/styled";
import InquireEssayQuestionItem from "./EssayQuestionItem";
import InquireMultipleChoiceQuestionItem from "./MultipleChoiceQuestionItem";
import InquireOXQuestionItem from "./OXQuestionItem";
import DeleteSurvey from "../participate/DeleteSurvey";
import { surveyForSubmitted } from "../../../atoms";
import * as Sentry from "@sentry/react";
import { getAccessToken, getRefreshToken } from "../../../authentication/auth";

export default function SubmittedSurvey({ sharingKey }) {
  const user = useRecoilValue(userState);

  const [survey, setSurvey] = useRecoilState(surveyForSubmitted);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isDeleted, setIsDeleted] = useState(false);

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
    </Container>
  );
}
