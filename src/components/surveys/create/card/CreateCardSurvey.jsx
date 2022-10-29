import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
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
import NavBar from "../general/NavBar";
import CreateSection from "./CreateSection";
import PreviewSection from "./PreviewSection";

const Container = styled.div`
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
`;

export default function CreateCardSurvey() {
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