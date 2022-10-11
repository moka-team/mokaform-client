import React from "react";
import styled from "styled-components";
import CreateSection from "../../../components/surveys/create/CreateSection";
import PreviewSection from "../../../components/surveys/create/PreviewSection";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: red;
`;

export default function CreateSurvey() {
  return (
    <Container>
      <CreateSection></CreateSection>
      <PreviewSection></PreviewSection>
    </Container>
  );
}
