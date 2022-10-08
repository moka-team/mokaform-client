import React from "react";
import styled from "styled-components";
import CreateSection from "../../../components/surveys/create/CreateSection";
import PreviewSection from "../../../components/surveys/create/PreviewSection";

const Container = styled.div`
  height: 100vh;
  color: white;
`;

export default function CreateSurvey2() {
  return (
    <Container>
      <CreateSection></CreateSection>
      <PreviewSection></PreviewSection>
    </Container>
  );
}
