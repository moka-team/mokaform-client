import dayjs from "dayjs";
import { React, useEffect } from "react";
import { Create, Summary, Title } from "../../common/styled";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";
import SurveyCreateItem from "./SurveyCreateItem";
import SurveyItemCreator from "./SurveyItemCreator";

export default function CreateSection() {
  const survey = useCreateSurveyValue();
  const {
    setTitle,
    setSummary,
    setIsAnonymous,
    setIsPublic,
    setStartDate,
    setEndDate,
    setCategories,
    setQuestions,
    setMultiQuestions,
  } = useCreateSurveyActions();

  const resetCreateSurveyState = () => {
    setTitle("");
    setSummary("");
    setIsAnonymous(false);
    setIsPublic(false);
    setStartDate(dayjs().format("YYYY-MM-DD"));
    setEndDate(dayjs(""));
    setCategories([]);
    setQuestions([]);
    setMultiQuestions([]);
  };

  useEffect(() => {
    resetCreateSurveyState();
  }, []);

  const titleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const summaryOnChange = (event) => {
    setSummary(event.target.value);
  };

  return (
    <Create>
      <Title
        placeholder="설문 제목을 입력해주세요."
        onChange={titleOnChange}
      ></Title>
      <Summary
        placeholder="설문 설명을 입력해주세요."
        onChange={summaryOnChange}
      ></Summary>
      {survey.questions.map((surveyItem) => (
        <SurveyCreateItem key={surveyItem.index} item={surveyItem} survey={survey}/>
      ))}
      <SurveyItemCreator></SurveyItemCreator>
    </Create>
  );
}
