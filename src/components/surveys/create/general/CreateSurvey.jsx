import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  detailMCQuestionState,
  isEndDateValidate,
  isStartDateValidate,
  surveyCategory,
  surveyEndDate,
  surveyImage,
  surveyIsAnonymous,
  surveyIsPublic,
  surveyListState,
  surveyStartDate,
  surveySummary,
  surveyTitle,
} from "../../../../atoms";
import { userState } from "../../../../authentication/userState";
import CreateSection from "./CreateSection";
import NavBar from "./NavBar";
import PreviewSection from "./PreviewSection";
import { createContext, useContext, useMemo, useRef, useState } from "react";
import { CounterProvider, CreateSurveyProvider } from "../surveyState";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;
export default function CreateSurvey() {
  const setSurveyList = useSetRecoilState(surveyListState);
  const setDetailList = useSetRecoilState(detailMCQuestionState);
  const setCategory = useSetRecoilState(surveyCategory);
  const setSurveyImage = useSetRecoilState(surveyImage);
  const setTitle = useSetRecoilState(surveyTitle);
  const setSummary = useSetRecoilState(surveySummary);
  const setIsAnonymous = useSetRecoilState(surveyIsAnonymous);
  const setIsPublic = useSetRecoilState(surveyIsPublic);
  const setStartDate = useSetRecoilState(surveyStartDate);
  const setEndDate = useSetRecoilState(surveyEndDate);
  const setStartDateValidate = useSetRecoilState(isStartDateValidate);
  const setEndDateValidate = useSetRecoilState(isEndDateValidate);

  // 로그인 상태 검사
  const user = useRecoilValue(userState);

  const resetRecoilValue = () => {
    setTitle("");
    setSummary("");
    setIsAnonymous(false);
    setIsPublic(false);
    setStartDate(dayjs(""));
    setEndDate(dayjs(""));
    setCategory([]);
    setSurveyImage("");
    setSurveyList([]);
    setDetailList([]);
    setStartDateValidate(false);
    setEndDateValidate(false);
  };

  useEffect(() => {
    resetRecoilValue();
  }, []);

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
