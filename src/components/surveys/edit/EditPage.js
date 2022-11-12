import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../create/general/styled";
import { EditSection } from "./EditSection";
import NavBar from "./NavBar";
import { PreviewSection } from "./PreviewSection";
import { useEditSurveyActions } from "./surveyState";

export default function EditPage() {
  const { state } = useLocation();
  const { setCurrentSurvey } = useEditSurveyActions();
  useEffect(() => {
    setCurrentSurvey(state);
  }, []);
  return (
    <Container>
      <NavBar></NavBar>
      <EditSection></EditSection>
      <PreviewSection></PreviewSection>
    </Container>
  );
}
