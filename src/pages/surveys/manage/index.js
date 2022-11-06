import { React, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../authentication/userState";
import ManageSurveySection from "../../../components/surveys/manage/ManageSurveySection";

export default function ManageSurvey() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/");
    }
  }, []);
  return <ManageSurveySection></ManageSurveySection>;
}
