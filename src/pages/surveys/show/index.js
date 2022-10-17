import React from "react";
import { useParams } from "react-router-dom";
import ShowSurvey from "../../../components/surveys/detail/ShowSurvey";

export default function Show() {
  const { surveyId } = useParams();
  console.log(surveyId);
  return <ShowSurvey surveyId={surveyId}></ShowSurvey>;
}
