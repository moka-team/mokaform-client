import React from "react";
import { useParams } from "react-router-dom";
import ShowSurvey from "../../../components/surveys/participate/ShowSurvey";

export default function Show() {
  const { surveyId } = useParams();
  return <ShowSurvey surveyId={surveyId}></ShowSurvey>;
}
