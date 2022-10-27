import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import EssayQuestionItemDisabled from "./EssayQuestionItemDisabled";
import { Container, SummaryText, Survey, TitleText } from "./styled";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";
import OXQuestionItemDisabled from "./OXQuestionItemDisabled";
import MultipleChoiceQuestionItemDisabled from "./MultipleChoiceQuestionItemDisabled";
import { surveyForCreated } from "../../../atoms";
import { useRecoilState } from "recoil";

export default function ShowSurvey({ sharingKey }) {
  const [survey, setSurvey] = useRecoilState(surveyForCreated);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get("/api/v1/survey", {
        params: {
          sharingKey: sharingKey,
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
      })
      .finally(function () {
        // always executed
      });
  }, [sharingKey]);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (loading) return <Loading></Loading>;

  return (
    <Container>
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
    </Container>
  );
}
