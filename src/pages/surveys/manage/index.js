import React from "react";
import { useParams } from "react-router-dom";
import ManageSurveySection from "../../../components/surveys/manage/ManageSurveySection";

export default function ManageSurvey() {
  const { userId } = useParams();
  return <ManageSurveySection userId={userId}></ManageSurveySection>;
}
