import React from "react";
import { useParams } from "react-router-dom";
import SubmittedSurvey from "../../../components/surveys/inquire/submitted/submittedSurvey";

export default function InquireSubmittedSurvey() {
  const { sharingKey } = useParams();
  return <SubmittedSurvey sharingKey={sharingKey}></SubmittedSurvey>;
}
