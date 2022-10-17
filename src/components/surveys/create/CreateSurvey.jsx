import React, { useEffect } from "react";
import styled from "styled-components";
import CreateSection from "../../../components/surveys/create/CreateSection";
import PreviewSection from "../../../components/surveys/create/PreviewSection";
import NavBar from "./NavBar";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
export default function CreateSurvey() {
  // 로그인 상태 검사
  const user = useRecoilValue(userState);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("https://mokaform-client-q6w1.vercel.app/");
    }
  }, []);

  return (
    <Container>
      <NavBar></NavBar>
      <CreateSection></CreateSection>
      <PreviewSection></PreviewSection>
    </Container>
  );
}
