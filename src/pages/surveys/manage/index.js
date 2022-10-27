import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManageSurveySection from "../../../components/surveys/manage/ManageSurveySection";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";

export default function ManageSurvey() {
  const { userId } = useParams();
  return <ManageSurveySection userId={userId}></ManageSurveySection>;
}
