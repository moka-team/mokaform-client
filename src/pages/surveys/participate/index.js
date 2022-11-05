import { React } from "react";
import { useParams } from "react-router-dom";
import SurveyDetail from "../../../components/surveys/participate/SurveyDetail";

export default function Participate() {
  const { sharingKey } = useParams();
  return <SurveyDetail sharingKey={sharingKey}></SurveyDetail>;
}
