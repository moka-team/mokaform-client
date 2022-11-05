import { atom, selectorFamily } from "recoil";
import apiClient from "./api/client";

export const EssayAnswerListState = atom({
  key: "EssayAnswerListState",
  default: [],
});

export const MultipleChoiceAnswerListState = atom({
  key: "MultipleChoiceAnswerListState",
  default: [],
});

export const oxAnswerListState = atom({
  key: "oxAnswerListState",
  default: [],
});

// 설문 답변 생성
export const essayAnswerValidateCount = atom({
  key: "essayAnswerValidateCount",
  default: 0,
});

export const multiChoiceAnswerValidateCount = atom({
  key: "multiChoiceAnswerValidateCount",
  default: 0,
});

export const oxAnswerValidateCount = atom({
  key: "oxAnswerValidateCount",
  default: 0,
});

export const surveyQuestionCount = atom({
  key: "surveyQuestionCount",
  default: 0,
});

export const surveyForSubmit = atom({
  key: "surveyForSubmit",
  default: [],
});

export const surveyList = atom({
  key: "surveyList",
  default: [],
});

// 마이페이지
export const surveyForSubmitted = atom({
  key: "surveyForSubmitted",
  default: [],
});

export const surveySortState = atom({
  key: "surveySortState",
  default: "new",
});

export const createdSurvey = atom({
  key: "createdSurvey",
  default: [],
});

export const submittedSurvey = atom({
  key: "submittedSurvey",
  default: [],
});

export const createdMySurvey = atom({
  key: "createdMySurvey",
  default: [],
});

export const submittedMySurvey = atom({
  key: "submittedMySurvey",
  default: [],
});

export const createdQuestionCount = atom({
  key: "createdQuestionCount",
  default: 0,
});

export const isStartDateValidate = atom({
  key: "isStartDateValidate",
  default: false,
});

export const isEndDateValidate = atom({
  key: "isEndDateValidate",
  default: false,
});

// selector 이용한 비동기 처리

// 특정 설문 조회
export const getSurveyQuery = selectorFamily({
  key: "surveyState",
  get: (sharingKey) => async () => {
    const response = await apiClient.get("/api/v1/survey", {
      params: {
        sharingKey: sharingKey,
      },
    });
    return response.data.data;
  },
});

// 특정 설문에 대한 응답 조회
export const getSurveyAnswerQuery = selectorFamily({
  key: "surveyAnswerState",
  get: (sharingKey) => async () => {
    const response = await apiClient.get(
      "/api/v1/users/my/submitted-surveys/" + sharingKey
    );
    return response.data.data;
  },
});
