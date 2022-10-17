import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import SurveyDetail from "../../../components/surveys/participate/SurveyDetail";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";

export default function Participate() {
  const { sharingKey } = useParams();
  const user = useRecoilValue(userState);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("http://localhost:3000/");
    }
  }, []);
  return <SurveyDetail sharingKey={sharingKey}></SurveyDetail>;
}
