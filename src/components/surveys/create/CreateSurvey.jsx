import React, { useEffect } from "react";
import styled from "styled-components";
import CreateSection from "../../../components/surveys/create/CreateSection";
import PreviewSection from "../../../components/surveys/create/PreviewSection";
import NavBar from "./NavBar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../../../authentication/userState";
import {
  surveyTitle,
  surveySummary,
  surveyIsAnonymous,
  surveyIsPublic,
  surveyListState,
  detailMCQuestionState,
  surveyEndDate,
  surveyStartDate,
  surveyCategory,
  surveyImage,
  createdQuestionCount,
  isStartDateValidate,
  isEndDateValidate,
} from "../../../atoms";
import dayjs from "dayjs";

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
    <Container>
      <NavBar></NavBar>
      <CreateSection></CreateSection>
      <PreviewSection></PreviewSection>
    </Container>
  );
}
