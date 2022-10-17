import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
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

export default function SubmittedSurvey({ sharingKey }) {
  const user = useRecoilValue(userState);

  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("http://localhost:3000/");
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
  }, []);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (loading) return <Loading></Loading>;

  return (
    <Container>
      <SNavBar></SNavBar>
      <Survey>
        <TitleText>{survey.data.title}</TitleText>
        <SummaryText>{survey.data.summary}</SummaryText>
        {survey.data.questions.map((question) =>
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
              multiquestion={survey.data.multiQuestions}
              sharingKey={sharingKey}
            ></InquireMultipleChoiceQuestionItem>
          )
        )}
      </Survey>
    </Container>
  );
}
