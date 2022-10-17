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
  isEssayAnswerValidate,
  isMultiChoiceAnswerValidate,
  isOXAnswerValidate,
  EssayAnswerListState,
  MultipleChoiceAnswerListState,
  oxAnswerListState,
} from "../../../atoms";
import { useSetRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "../../../authentication/userState";

export default function SurveyDetail({ sharingKey }) {
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const setEssayAnswerList = useResetRecoilState(EssayAnswerListState);
  const setMultiChoiceAnswerList = useResetRecoilState(
    MultipleChoiceAnswerListState
  );
  const setOXAnswerList = useResetRecoilState(oxAnswerListState);

  const setIsEssayValidate = useSetRecoilState(isEssayAnswerValidate);
  const setIsMultiChoiceValidate = useSetRecoilState(
    isMultiChoiceAnswerValidate
  );
  const setIsOXValidate = useSetRecoilState(isOXAnswerValidate);

  console.log(setEssayAnswerList);
  console.log(setMultiChoiceAnswerList);
  console.log(setOXAnswerList);

  // 로그인 상태 검사
  const user = useRecoilValue(userState);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("https://mokaform-client-q6w1.vercel.app/");
    }
  }, []);

  useEffect(() => {
    axios
      .get("/api/v1/survey", {
        params: {
          sharingKey: sharingKey,
        },
      })
      .then(function (response) {
        console.log(response);
        setSurvey(response.data);
        setIsDeleted(response.data.data.isDeleted);

        response.data.data.questions.filter(
          (question) => question.type == "ESSAY"
        ).length === 0
          ? setIsEssayValidate(true)
          : setIsEssayValidate(false);

        response.data.data.questions.filter(
          (question) => question.type == "MULTIPLE_CHOICE"
        ).length === 0
          ? setIsMultiChoiceValidate(true)
          : setIsMultiChoiceValidate(false);

        response.data.data.questions.filter((question) => question.type == "OX")
          .length === 0
          ? setIsOXValidate(true)
          : setIsOXValidate(false);

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
