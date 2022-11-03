import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Create, Summary, Title } from "../../common/styled";
import SurveyCreateItem from "./SurveyCreateItem";
import SurveyItemCreator from "./SurveyItemCreator";
import { isEndDateValidate, isStartDateValidate } from "../../../../atoms";
import dayjs from "dayjs";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";

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
  const setStartDateValidate = useSetRecoilState(isStartDateValidate);
  const setEndDateValidate = useSetRecoilState(isEndDateValidate);

  const resetCreateSurveyState = () => {
    setTitle("");
    setSummary("");
    setIsAnonymous(false);
    setIsPublic(false);
    setStartDate(dayjs(""));
    setEndDate(dayjs(""));
    setCategories([]);
    setQuestions([]);
    setMultiQuestions([]);
    setStartDateValidate(false);
    setEndDateValidate(false);
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
    <Create bgColor="#f5f6fa" width="30%">
      <Title
        placeholder="설문 제목을 입력해주세요."
        onChange={titleOnChange}
        bgColor="#f5f6fa"
        tcolor="#202632"
        mTop="18%"
      ></Title>
      <Summary
        placeholder="설문 설명을 입력해주세요."
        onChange={summaryOnChange}
        bgColor="#f5f6fa"
        tcolor="#202632"
      ></Summary>
      {survey.questions.map((surveyItem) => (
        <SurveyCreateItem
          key={surveyItem.index}
          item={surveyItem}
        ></SurveyCreateItem>
      ))}
      <SurveyItemCreator></SurveyItemCreator>
    </Create>
  );
}
