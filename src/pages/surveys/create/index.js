import { React, useEffect } from "react";
import CreateSurvey from "../../../components/surveys/create/CreateSurvey";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";

export default function CreateSurvey2() {
  const user = useRecoilValue(userState);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("http://localhost:3000/");
    }
  }, []);
  return <CreateSurvey></CreateSurvey>;
}
