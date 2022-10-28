import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import EssayQuestionItem from "./EssayQuestionItem";
import MultipleChoiceQuestionItem from "./MultipleChoiceQuestionItem";
import OXQuestionItem from "./OXQuestionItem";
import { Container, SummaryText, Survey, TitleText } from "./styled";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";
import DeleteSurvey from "./DeleteSurvey";
import {
  EssayAnswerListState,
  MultipleChoiceAnswerListState,
  oxAnswerListState,
  surveyQuestionCount,
  essayAnswerValidateCount,
  oxAnswerValidateCount,
  multiChoiceAnswerValidateCount,
  surveyForSubmit,
} from "../../../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Sentry from "@sentry/react";
import { getAccessToken, getRefreshToken } from "../../../authentication/auth";

export default function SurveyDetail({ sharingKey }) {
  const [survey, setSurvey] = useRecoilState(surveyForSubmit);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const setSurveyQuestionCount = useSetRecoilState(surveyQuestionCount);

  // 답변 저장 관련 변수
  const setEssayValidateCount = useSetRecoilState(essayAnswerValidateCount);
  const setMultiValidateCount = useSetRecoilState(
    multiChoiceAnswerValidateCount
  );
  const setOXValidateCount = useSetRecoilState(oxAnswerValidateCount);
  const setEssayAnswerList = useSetRecoilState(EssayAnswerListState);
  const setMultiChoiceAnswerList = useSetRecoilState(
    MultipleChoiceAnswerListState
  );
  const setOXAnswerList = useSetRecoilState(oxAnswerListState);

  useEffect(() => {
    setEssayAnswerList([]);
    setMultiChoiceAnswerList([]);
    setOXAnswerList([]);

    setEssayValidateCount(0);
    setMultiValidateCount(0);
    setOXValidateCount(0);

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
        setSurvey(response.data);
        setIsDeleted(response.data.data.isDeleted);
        setSurveyQuestionCount(response.data.data.questionCount);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setErrorMessage(error.message);
        setError(true);
        Sentry.captureException(error);
      })
      .finally(function () {
        // always executed
      });
  }, [sharingKey]);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (isDeleted) return <DeleteSurvey></DeleteSurvey>;
  if (loading) return <Loading></Loading>;

  return (
    <Container>
      <NavBar></NavBar>
      <Survey>
        <TitleText>{survey.data.title}</TitleText>
        <SummaryText>{survey.data.summary}</SummaryText>
        {survey.data.questions.map((question) =>
          question.type === "ESSAY" ? (
            <EssayQuestionItem
              key={question.questionId}
              item={question}
            ></EssayQuestionItem>
          ) : question.type === "OX" ? (
            <OXQuestionItem
              key={question.questionId}
              item={question}
            ></OXQuestionItem>
          ) : (
            <MultipleChoiceQuestionItem
              key={question.questionId}
              item={question}
              multiquestion={survey.data.multiQuestions}
            ></MultipleChoiceQuestionItem>
          )
        )}
      </Survey>
    </Container>
  );
}
