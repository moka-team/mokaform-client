import { atom } from "recoil";

export const surveyListState = atom({
  key: "surveyListState",
  default: [],
});

export const detailQuestionState = atom({
  key: "detailQuestionState",
  default: [],
});
