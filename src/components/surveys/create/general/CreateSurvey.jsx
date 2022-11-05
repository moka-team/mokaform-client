import React from "react";
import { CreateSurveyProvider } from "../surveyState";
import CreateSection from "./CreateSection";
import NavBar from "./NavBar";
import PreviewSection from "./PreviewSection";
import { Container } from "./styled";

export default function CreateSurvey() {
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
