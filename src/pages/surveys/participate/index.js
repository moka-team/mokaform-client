import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import SurveyDetail from "../../../components/surveys/participate/SurveyDetail";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";

export default function Participate() {
  const { sharingKey } = useParams();
  return <SurveyDetail sharingKey={sharingKey}></SurveyDetail>;
}
