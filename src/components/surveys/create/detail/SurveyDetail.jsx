import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import SurveySection from "./SurveySection";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #edeef0;
`;

export default function SurveyDetail() {
  return (
    <Container>
      <NavBar></NavBar>
      <SurveySection></SurveySection>
    </Container>
  );
}
