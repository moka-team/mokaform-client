import { React, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ManageSurveySection from "../../../components/surveys/manage/ManageSurveySection";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";

export default function ManageSurvey() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/");
    }
  }, []);
  return <ManageSurveySection userId={userId}></ManageSurveySection>;
}
