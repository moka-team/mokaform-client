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
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { userState } from "../../../authentication/userState";

export default function SurveyDetail({ sharingKey }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const [survey, setSurvey] = useRecoilState(surveyForSubmit);
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

  // 로그인 상태 검사
  const user = useRecoilValue(userState);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("http://localhost:3000/");
    }
  }, []);

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
        console.log(response);
        setSurvey(response.data.data);
        setIsDeleted(response.data.data.isDeleted);
        setSurveyQuestionCount(response.data.data.questionCount);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setErrorMessage(error.message);
        setError(true);
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
        <TitleText>{survey.title}</TitleText>
        <SummaryText>{survey.summary}</SummaryText>
        {survey.questions.map((question) =>
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
              multiquestion={survey.multiQuestions}
            ></MultipleChoiceQuestionItem>
          )
        )}
      </Survey>
    </Container>
  );
}
