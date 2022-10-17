import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import EssayQuestionItemDisabled from "./EssayQuestionItemDisabled";
import { Container, SummaryText, Survey, TitleText } from "./styled";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";
import OXQuestionItemDisabled from "./OXQuestionItemDisabled";
import MultipleChoiceQuestionItemDisabled from "./MultipleChoiceQuestionItemDisabled";

export default function ShowSurvey({ sharingKey }) {
  const [survey, setSurvey] = useState(null);
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
  }, [sharingKey]);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (loading) return <Loading></Loading>;

  return (
    <Container>
      <NavBar></NavBar>
      <Survey>
        <TitleText>{survey.data.title}</TitleText>
        <SummaryText>{survey.data.summary}</SummaryText>
        {survey.data.questions.map((question) =>
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
              multiquestion={survey.data.multiQuestions}
            ></MultipleChoiceQuestionItemDisabled>
          )
        )}
      </Survey>
    </Container>
  );
}
