import { atom } from "recoil";
import dayjs from "dayjs";

export const surveyTitle = atom({
  key: "surveyTitle",
  default: "",
});

export const surveySummary = atom({
  key: "surveySummary",
  default: "",
});

export const surveyIsAnonymous = atom({
  key: "surveyIsAnonymous",
  default: false,
});

export const surveyIsPublic = atom({
  key: "surveyIsPublic",
  default: false,
});

export const surveyStartDate = atom({
  key: "surveyStartDate",
  default: dayjs(""),
});

export const surveyEndDate = atom({
  key: "surveyEndDate",
  default: dayjs(""),
});

export const surveyListState = atom({
  key: "surveyListState",
  default: [],
});

export const detailMCQuestionState = atom({
  key: "detailMCQuestionState",
  default: [],
});

export const surveyImage = atom({
  key: "surveyImage",
  default: "",
});

export const surveyCategory = atom({
  key: "surveyCategory",
  default: [],
});

export const surveyList = atom({
  key: "surveyList",
  default: [],
});

export const createdSurvey = atom({
  key: "createdSurvey",
  default: [],
});

export const submittedSurvey = atom({
  key: "submittedSurvey",
  default: [],
});
