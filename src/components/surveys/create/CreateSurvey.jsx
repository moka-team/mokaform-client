import React from "react";
import styled from "styled-components";
import CreateSection from "../../../components/surveys/create/CreateSection";
import PreviewSection from "../../../components/surveys/create/PreviewSection";
import NavBar from "./NavBar";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
export default function CreateSurvey() {
  return (
    <Container>
      <NavBar></NavBar>
      <CreateSection></CreateSection>
      <PreviewSection></PreviewSection>
    </Container>
  );
}
