import React from "react";
import styled from "styled-components";
import NavBar from "../general/NavBar";
import { CreateSurveyProvider } from "../surveyState";
import CreateSection from "./CreateSection";
import PreviewSection from "./PreviewSection";

const Container = styled.div`
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
`;

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
