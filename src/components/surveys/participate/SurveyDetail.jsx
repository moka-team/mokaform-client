import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { getSurveyQuery } from "../../../atoms";
import { CreateAnswerProvider } from "./answerState";
import DeleteSurvey from "./DeleteSurvey";
import Error from "./Error";
import Loading from "./Loading";
import NavBar from "./NavBar";
import { Container } from "./styled";
import SurveyItem from "./SurveyItem";

export default function SurveyDetail({ sharingKey }) {
  function SurveyInfo() {
    const survey = useRecoilValueLoadable(getSurveyQuery(sharingKey));
    switch (survey.state) {
      case "hasValue":
        if (survey.contents.isDeleted) {
          return <DeleteSurvey></DeleteSurvey>;
        }
        return (
          <CreateAnswerProvider>
            <Container>
              <NavBar></NavBar>
              <SurveyItem survey={survey}></SurveyItem>
            </Container>
          </CreateAnswerProvider>
        );
      case "loading":
        return <Loading></Loading>;
      case "hasError":
        return <Error></Error>;
    }
  }

  return <SurveyInfo></SurveyInfo>;
}
