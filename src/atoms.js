import { atom } from "recoil";

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
export const surveyListState = atom({
  key: "surveyListState",
  default: [],
});

export const detailMCQuestionState = atom({
  key: "detailMCQuestionState",
  default: [],
});
