import React from "react";
import styled from "styled-components";
import { CreateSurveyProvider } from "../surveyState";
import CreateSection from "./CreateSection";
import NavBar from "./NavBar";
import PreviewSection from "./PreviewSection";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
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
