import React from "react";
import NavBar from "../general/NavBar";
import { CreateSurveyProvider } from "../surveyState";
import CreateSection from "./CreateSection";
import PreviewSection from "./PreviewSection";
import { Container } from "./styled";

export default function CreateCardSurvey() {
  return (
    <CreateSurveyProvider>
      <Container>
        <NavBar></NavBar>
        <CreateSection></CreateSection>
        <PreviewSection></PreviewSection>
      </Container>
    </CreateSurveyProvider>
  );
}
