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

export const isEssayAnswerValidate = atom({
  key: "isEssayAnswerValidate",
  default: false,
});

export const isMultiChoiceAnswerValidate = atom({
  key: "isMultiChoiceAnswerValidate",
  default: false,
});

export const isOXAnswerValidate = atom({
  key: "isOXAnswerValidate",
  default: false,
});

export const surveyList = atom({
  key: "surveyList",
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
