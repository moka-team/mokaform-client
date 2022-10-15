import React from "react";
import { useParams } from "react-router-dom";
import SurveyDetail from "../../../components/surveys/create/detail/SurveyDetail";

export default function Participate() {
  const { surveyId } = useParams();
  return <SurveyDetail surveyId={surveyId}></SurveyDetail>;
}
