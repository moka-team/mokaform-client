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

export default function SurveyDetail({ sharingKey }) {
  const [survey, setSurvey] = useState(null);
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
      })
      .then(function (response) {
        console.log(response);
        setSurvey(response.data);
        setIsDeleted(response.data.data.isDeleted);
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
