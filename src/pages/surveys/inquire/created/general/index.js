import React from "react";
import { useParams } from "react-router-dom";
import ShowSurvey from "../../../../../components/surveys/inquire/created/ShowSurvey";

export default function Show() {
  const { sharingKey } = useParams();
  return <ShowSurvey sharingKey={sharingKey}></ShowSurvey>;
}
