import React from "react";
import { Create } from "./styled";
import SurveyItemCreator from "./SurveyItemCreator";
import { surveyListState } from "../../../atoms";
import { useRecoilValue } from "recoil";
import SurveyCreateItem from "./SurveyCreateItem";

export default function CreateSection() {
  const surveyList = useRecoilValue(surveyListState);
  return (
    <Create>
      <SurveyItemCreator></SurveyItemCreator>
      {surveyList.map((surveyItem) => (
        <SurveyCreateItem key={surveyItem.id} item={surveyItem} />
      ))}
    </Create>
  );
}
