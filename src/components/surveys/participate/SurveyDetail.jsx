import * as Sentry from "@sentry/react";
import { setUser } from "@sentry/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  EssayAnswerListState,
  essayAnswerValidateCount,
  multiChoiceAnswerValidateCount,
  MultipleChoiceAnswerListState,
  oxAnswerListState,
  oxAnswerValidateCount,
  surveyForSubmit,
  surveyQuestionCount,
} from "../../../atoms";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  updateAccessToken,
} from "../../../authentication/auth";
import CardParticipate from "./card/CardParticipate";
import DeleteSurvey from "./DeleteSurvey";
import Error from "./Error";
import EssayQuestionItem from "./general/EssayQuestionItem";
import MultipleChoiceQuestionItem from "./general/MultipleChoiceQuestionItem";
import OXQuestionItem from "./general/OXQuestionItem";
import Loading from "./Loading";
import NavBar from "./NavBar";
import { Container, SummaryText, Survey, TitleText } from "./styled";

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

  function checkingCard() {
    if (survey.data.questions[0].type === "MULTIPLE_CHOICE") {
      if (survey.data.multiQuestions[0].multiQuestionType === "CARD") {
        return true;
      }
    }
    return false;
  }

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
      })
      .then(function (response) {
        setSurvey(response.data);
        setIsDeleted(response.data.data.isDeleted);
        setSurveyQuestionCount(response.data.data.questionCount);
        setLoading(false);
      })
      .catch(function (error) {
        Sentry.captureException(error);
        console.log(error);

        // Access Token 재발행이 필요한 경우
        if (error.response.data.code === "C005") {
          delete axios.defaults.headers.common["accessToken"]
          axios
            .post("/api/v1/users/token/reissue",{
              accessToken:getAccessToken(),
            })
            .then((res) => {
              updateAccessToken(res.data.data);
              window.location.reload();
            })
            .catch(function (err) {
              if (err.response.data.code === "C009") {
                alert("토큰 만료! 다시 로그인해주세요! 🥰");
                logout();
                window.location.replace("/");
                localStorage.clear();
                setUser(null);
              }
            });
        }
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

      {/* 카드 형식 보여주기 */}
      {checkingCard() ? (
        <CardParticipate />
      ) : (
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
      )}
    </Container>
  );
}
